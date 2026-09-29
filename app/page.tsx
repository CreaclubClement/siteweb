import type {Metadata} from 'next';
import {Home} from '@/components/home/Home';
import './home.css';
import {listProjectRecords} from '@/lib/cms/projects';
import {toProjectCard} from '@/lib/content/projects';
export const dynamic='force-dynamic';
export const metadata:Metadata={title:'Étape Zero — Studio de branding indépendant',description:'Studio de branding indépendant spécialisé dans les projets de rebranding et de repositionnement. Stratégie de marque, identité visuelle et expérience digitale.'};
export default async function Page(){const records=await listProjectRecords();return <Home projects={records.filter(r=>r.project.listed).map(r=>toProjectCard(r.project))}/>}
