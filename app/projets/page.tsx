import type {Metadata} from 'next';
import {listProjectRecords} from '@/lib/cms/projects';
import {toProjectCard} from '@/lib/content/projects';
import {ProjectHub} from '@/components/projects/ProjectHub';
import '../home.css';
import './hub.css';
export const dynamic='force-dynamic';
export const metadata:Metadata={title:'Projets — Étape Zero',description:'Découvrez les projets de branding, rebranding et lancement de marque du studio Étape Zero.'};
const order=['amoual','lucas-drifter','u-tragulinu','pb-cosmetics','active-life','decibell','cooked','solespace'];
export default async function Page(){const records=await listProjectRecords();const projects=records.filter(r=>r.project.listed).map(r=>toProjectCard(r.project));const rank=(id:string)=>{const i=order.indexOf(id);return i<0?order.length:i;};projects.sort((a,b)=>rank(a.id)-rank(b.id));return <ProjectHub projects={projects}/>;}
