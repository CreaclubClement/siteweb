import {env} from 'cloudflare:workers';
import {serviceSeeds} from '@/lib/content/service-details';
import {serviceSchema,type ServiceRecord,type CMSService} from './service-schema';
function database(){if(!env.DB)throw new Error('La collection services est indisponible.');return env.DB;}
export async function listServiceRecords():Promise<ServiceRecord[]>{
 const rows=await database().prepare('SELECT data, revision FROM cms_services ORDER BY updated_at ASC').all<{data:string;revision:number}>();
 const records=new Map(serviceSeeds.map(service=>[service.id,{service,revision:0}]));
 for(const row of rows.results){const service=serviceSchema.parse(JSON.parse(row.data));records.set(service.id,{service,revision:row.revision});}
 return [...records.values()];
}
export async function getServiceRecord(id:string){return (await listServiceRecords()).find(r=>r.service.id===id);}
export async function saveService(service:CMSService,revision:number){
 const data=JSON.stringify(service),now=new Date().toISOString();
 const result=revision===0?await database().prepare('INSERT INTO cms_services (id,data,revision,updated_at) VALUES (?,?,1,?) ON CONFLICT(id) DO NOTHING').bind(service.id,data,now).run():await database().prepare('UPDATE cms_services SET data=?,revision=revision+1,updated_at=? WHERE id=? AND revision=?').bind(data,now,service.id,revision).run();
 return result.meta.changes===1?revision+1:null;
}
