import {requireChatGPTUser} from '@/app/chatgpt-auth';
import {isProjectEditor} from '@/lib/cms/auth';
import {getProjectRecord} from '@/lib/cms/projects';
import {ProjectDetail} from '@/components/projects/ProjectDetail';
import {notFound} from 'next/navigation';
import '../../../home.css';
import '../../../projets/project.css';
export const dynamic='force-dynamic';
export const metadata={title:'Aperçu projet — Étape Zero',robots:{index:false,follow:false}};
async function Preview({id}:{id:string}){await requireChatGPTUser('/admin/projets/apercu?id='+encodeURIComponent(id));if(!await isProjectEditor())notFound();const record=await getProjectRecord(id);if(!record)notFound();return <><p style={{padding:16,background:'var(--accent)'}}>Aperçu de la version enregistrée · <a href="/admin/projets">Retour aux projets</a></p><ProjectDetail project={record.project} related={[]}/></>;}
export default async function Page({searchParams}:{searchParams:Promise<{id?:string}>}){const {id}=await searchParams;return <Preview id={id||''}/>;}
