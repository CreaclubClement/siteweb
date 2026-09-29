import {requireChatGPTUser} from '@/app/chatgpt-auth';
import {isProjectEditor} from '@/lib/cms/auth';
import {listProjectRecords} from '@/lib/cms/projects';
import {ProjectEditor} from '@/components/projects/ProjectEditor';
import './admin.css';
export const dynamic='force-dynamic';
export const metadata={title:'Projets — Administration Étape Zero',robots:{index:false,follow:false}};
export default async function Page(){await requireChatGPTUser('/admin/projets');if(!await isProjectEditor())return <main className="cms"><h1>Accès réservé au propriétaire</h1><a href="/">Retour au site</a></main>;return <ProjectEditor initial={await listProjectRecords()}/>;}
