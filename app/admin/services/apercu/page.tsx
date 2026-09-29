import {notFound} from 'next/navigation';
import {requireChatGPTUser} from '@/app/chatgpt-auth';
import {isProjectEditor} from '@/lib/cms/auth';
import {getServiceRecord,listServiceRecords} from '@/lib/cms/services';
import {getProjectRecord} from '@/lib/cms/projects';
import {ServiceDetail} from '@/components/services/ServiceDetail';
import '../../../home.css';
import '../../../services/services.css';
import '../../../services/detail.css';
export const dynamic='force-dynamic';
export const metadata={title:'Aperçu service',robots:{index:false,follow:false}};
export default async function Page({searchParams}:{searchParams:Promise<{id?:string}>}){await requireChatGPTUser('/admin/services');if(!await isProjectEditor())notFound();const {id}=await searchParams;const r=id?await getServiceRecord(id):undefined;if(!r)notFound();const project=r.service.projectId?await getProjectRecord(r.service.projectId):undefined;return <><p style={{padding:16,background:'#d9ff8e'}}>Aperçu enregistré — <a href="/admin/services">Retour au CMS Services</a></p><ServiceDetail service={r.service} project={project?.project} related={(await listServiceRecords()).map(r=>r.service).filter(s=>s.listed&&s.id!==id)}/></>}
