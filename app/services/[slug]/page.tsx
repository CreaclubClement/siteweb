import {notFound} from 'next/navigation';
import {getServiceRecord,listServiceRecords} from '@/lib/cms/services';
import {getProjectRecord} from '@/lib/cms/projects';
import {ServiceDetail} from '@/components/services/ServiceDetail';
import '../../home.css';
import '../services.css';
import '../detail.css';
export const dynamic='force-dynamic';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const r=await getServiceRecord(slug);return r?.service.published?{title:r.service.title+' — Étape Zero',description:r.service.intro||r.service.description}:{title:'Service introuvable'};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const r=await getServiceRecord(slug);if(!r?.service.published)notFound();const project=r.service.projectId?await getProjectRecord(r.service.projectId):undefined;const related=(await listServiceRecords()).map(r=>r.service).filter(s=>s.id!==slug&&s.listed);return <ServiceDetail service={r.service} project={project?.project} related={related}/>}
