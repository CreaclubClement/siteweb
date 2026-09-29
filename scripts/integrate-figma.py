import json,re,pathlib,base64
P=pathlib.Path('.'); refs=P/'.figma-reference'; out=P/'components/design-system'; out.mkdir(exist_ok=True)
s=(refs/'design-system.md').read_text(); inv=json.loads(re.findall(r'```json\n(.*?)\n```',s,re.S)[1]); entries=[]; assets={}; imports=[]
for idx,n in enumerate(inv['components']):
 key=n['id'].replace(':','-'); d=json.loads((refs/(key+'.json')).read_text()); code=d['texts'][0]
 if d['isError']:
  whole=json.loads((refs/'36-4901.json').read_text())['texts'][0]
  start=whole.index('type FiltreSystemeGraphiqueProps'); end=whole.index('type FiltreValeurPercuProps',start)
  code=whole[start:end].replace('function FiltreSystemeGraphique','export default function FiltreSystemeGraphique')
 if d.get('image'):
  (refs/(key+'.png')).write_bytes(base64.b64decode(d['image']['data']))
 prefix=re.search(r'const assetPathPrefix = "([^"]+)";',code)
 if prefix:
  for fname in re.findall(r'\$\{assetPathPrefix\}/([^`]+)',code): assets.setdefault(fname,{'file':fname,'url':prefix[1]+'/'+fname,'components':[]})['components'].append(n['id'])
  code=code.replace(prefix[1],'/assets/figma')
 # Preserve the original high-fidelity source separately; convert fixed layout to fluid classes.
 code=re.sub(r"font-\[(?:'|\\?\")Geist:[^\]]+\]",'font-sans',code)
 # The root and content containers fill their parent; small icon dimensions remain intrinsic.
 def width(m):
  v=float(m[1]); return 'w-full' if v>=240 else 'max-w-full '+m[0]
 code=re.sub(r'w-\[([\d.]+)px\]',width,code)
 code=code.replace('whitespace-nowrap','whitespace-normal').replace('text-nowrap','text-wrap')
 # Turn fixed photo heights into aspect ratios using dimensions from the original class segment.
 original=d['texts'][0]
 for segment in re.findall(r'[^"`\n]*h-\[[\d.]+px\][^"`\n]*',original):
  hm=re.search(r'h-\[([\d.]+)px\]',segment); wm=re.search(r'w-\[([\d.]+)px\]',segment)
  if hm and wm and float(hm[1])>150 and float(wm[1])>=240:
   adapted=re.sub(r'w-\[([\d.]+)px\]',width,segment)
   ratio='aspect-['+wm[1]+'/'+hm[1]+']'
   # Image layers / media slot, not whole content cards.
   if 'overflow-clip' in segment or (float(hm[1]) in [389,479,266,400,300]):
    code=code.replace(adapted,adapted.replace(hm[0],ratio))
 code=re.sub(r'h-\[(481|571|553|425|820|1952|1223|627|562)px\]','h-auto',code)
 code=code.replace('shrink-0 w-full','min-w-0 w-full')
 code=code.replace('className ||','className ||')
 code=code.replace('id={','data-figma-id={').replace(' id="',' data-figma-id="')
 # All behavior is provided by accessible reusable wrappers, avoid nested buttons.
 code=code.replace('<button','<div').replace('</button>','</div>')
 (out/('F'+key+'.tsx')).write_text('// Source: Figma '+n['id']+'; fluid layout adaptation.\n'+code)
 name='F'+key.replace('-','_');imports.append(f'import {name} from "./F{key}";')
 if idx<23: family='Projets'
 elif idx<30: family='Articles'
 elif idx==30: family='Navigation'
 elif idx<53: family='Navigation' if idx not in [46,47,48,52] else 'Boutons'
 elif idx<62: family='Services'
 elif idx<65: family='Boutons'
 elif idx<67: family='Médias'
 elif idx<72: family='FAQ'
 elif idx<76 or idx==85: family='Formulaires'
 else: family='Filtres'
 vals=list(dict.fromkeys(v['name'].split('=',1)[-1] for v in n['variants']))
 # Figma's returned code preserves the valid exposed variant union, including misspellings.
 m=re.search(r'export default function[^\n]*property1 = "([^"]+)"',code); default=m[1] if m else (vals[0] if vals else 'Default')
 entries.append({'id':n['id'],'name':n['name'],'family':family,'variants':vals,'defaultVariant':default,'w':n['variants'][0]['w'] if n['variants'] else n['w'],'h':n['variants'][0]['h'] if n['variants'] else n['h'],'component':name})
lines=['"use client";','import type { ComponentType } from "react";']+imports+['export type Entry = { id:string;name:string;family:string;variants:string[];defaultVariant:string;w:number;h:number;component:ComponentType<any> };','export const catalog: Entry[] = [']
for e in entries:
 c=e.pop('component'); lines.append(json.dumps(e,ensure_ascii=False)[:-1]+', component:'+c+'},')
lines.append('];');(out/'catalog.ts').write_text('\n'.join(lines));(refs/'assets-manifest.json').write_text(json.dumps(list(assets.values()),indent=2)); print(json.dumps({'components':len(entries),'assets':len(assets)}))
