import {env} from 'cloudflare:workers';
async function serve(request:Request,params:Promise<{key:string}>){
 const {key}=await params;
 if(!/^[a-f0-9-]+\.(jpg|png|webp|gif|avif|mp4|webm)$/.test(key)||!env.BUCKET)return new Response('Introuvable',{status:404});
 const meta=await env.BUCKET.head(key);
 if(!meta)return new Response('Introuvable',{status:404});
 const headers=new Headers({'Content-Type':meta.httpMetadata?.contentType||'application/octet-stream','Cache-Control':'public, max-age=31536000, immutable','X-Content-Type-Options':'nosniff','Accept-Ranges':'bytes','Content-Length':String(meta.size)});
 if(request.method==='HEAD')return new Response(null,{headers});
 let range:{offset:number;length:number}|undefined;
 const requested=request.headers.get('range');
 if(requested){
  const match=/^bytes=(\d*)-(\d*)$/.exec(requested);
  let start=0,end=meta.size-1;
  if(match&&(match[1]||match[2])){
   if(match[1]){start=Number(match[1]);if(match[2])end=Math.min(Number(match[2]),end);}
   else start=Math.max(0,meta.size-Number(match[2]));
  }else start=meta.size;
  if(!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||start>end||start>=meta.size){headers.set('Content-Range',`bytes */${meta.size}`);headers.delete('Content-Length');return new Response(null,{status:416,headers});}
  range={offset:start,length:end-start+1};headers.set('Content-Range',`bytes ${start}-${end}/${meta.size}`);headers.set('Content-Length',String(range.length));
 }
 const object=await env.BUCKET.get(key,range?{range}:undefined);
 if(!object)return new Response('Introuvable',{status:404});
 return new Response(object.body,{status:range?206:200,headers});
}
export async function GET(request:Request,{params}:{params:Promise<{key:string}>}){return serve(request,params);}
export async function HEAD(request:Request,{params}:{params:Promise<{key:string}>}){return serve(request,params);}
