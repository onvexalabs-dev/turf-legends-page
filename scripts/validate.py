from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import json,sys
root=Path(__file__).resolve().parents[1]
class Document(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.ids=set();self.images=[];self.lang=None
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.add(a['id'])
  if tag=='html':self.lang=a.get('lang')
  if tag=='img':self.images.append(a)
  for key in ['href','src']:
   if key in a and tag!='base':self.links.append(a[key])
docs={}
for p in root.rglob('*.html'):
 d=Document();d.feed(p.read_text(encoding='utf-8'));docs[p]=d
errors=[]
for path,d in docs.items():
 if d.lang not in ['en','de']:errors.append(f'{path}: language missing')
 for im in d.images:
  if 'alt' not in im:errors.append(f'{path}: image alt missing')
 for u in d.links:
  parts=urlsplit(u)
  if parts.scheme or parts.netloc:continue
  target=(path.parent/unquote(parts.path)).resolve() if parts.path else path
  if target.is_dir():target=target/'index.html'
  if not target.exists():errors.append(f'{path.name}: missing {u}')
  elif parts.fragment and target in docs and parts.fragment not in docs[target].ids:errors.append(f'{path.name}: missing anchor {u}')
js=(root/'assets/site.js').read_text()
assert not any(x in js for x in ['localStorage.','sessionStorage.','document.cookie','fetch('])
if '--release' in sys.argv:
 status=json.loads((root/'release-status.json').read_text())
 if not status['legal_ready']:errors.append('Release blocked: publisher/legal details incomplete')
 if not status['website_ready']:errors.append('Release blocked: website not ready')
 if '--app-release' in sys.argv and not status['android_privacy_verified']:errors.append('App release blocked: signed Android privacy behavior unverified')
if errors:print('\n'.join(errors));sys.exit(1)
print(f'PASS: {len(docs)} pages, internal links, anchors, image alt attributes, locale markers and no tracking/storage code.')
