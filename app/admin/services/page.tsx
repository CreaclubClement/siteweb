import {requireChatGPTUser} from '@/app/chatgpt-auth';
import {isProjectEditor} from '@/lib/cms/auth';
import {listServiceRecords} from '@/lib/cms/services';
import {listProjectRecords} from '@/lib/cms/projects';
import {ServiceEditor} from '@/components/services/ServiceEditor';
import '../projets/admin.css';
export const dynamic='force-dynamic';
export const metadata={title:'CMS Services — Étape Zero',robots:{index:false,follow:false}};
export default async function Page(){await requireChatGPTUser('/admin/services');if(!await isProjectEditor())return <main><h1>Accès réservé au propriétaire</h1></main>;return <ServiceEditor initial={await listServiceRecords()} projects={(await listProjectRecords()).map(r=>({id:r.project.id,title:r.project.title}))}/>}
