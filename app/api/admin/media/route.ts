import {env} from 'cloudflare:workers';
import {isProjectEditor,sameOrigin} from '@/lib/cms/auth';
const types:Record<string,string>={'image/jpeg':'jpg','image/png':'png','image/webp':'webp','image/gif':'gif','image/avif':'avif','video/mp4':'mp4','video/webm':'webm'};
export async function POST(request:Request){
 if(!await isProjectEditor()||!sameOrigin(request))return Response.json({error:'Accès non autorisé.'},{status:403});
 if(Number(request.headers.get('content-length')||0)>51*1024*1024)return Response.json({error:'Média limité à 50 Mo.'},{status:413});
 try{const form=await request.formData(),file=form.get('file');if(!(file instanceof File)||!types[file.type]||file.size===0||file.size>(file.type.startsWith('video/')?50:10)*1024*1024)return Response.json({error:'Choisir une image de moins de 10 Mo ou une vidéo MP4/WebM de moins de 50 Mo.'},{status:400});if(!env.BUCKET)throw new Error('Storage unavailable');const key=crypto.randomUUID()+'.'+types[file.type];await env.BUCKET.put(key,await file.arrayBuffer(),{httpMetadata:{contentType:file.type}});return Response.json({src:'/media/'+key});}catch{return Response.json({error:'Import impossible. Réessayez.'},{status:500});}
}
