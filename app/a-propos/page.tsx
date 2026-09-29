import type {Metadata} from 'next';
import {listServiceRecords} from '@/lib/cms/services';
import '../services/detail.css';
import {About} from '@/components/about/About';
import '../home.css';
import './about.css';
export const metadata:Metadata={title:'À propos — Étape Zero',description:'Nos convictions, notre vision des projets et nos engagements. Découvrez le studio Étape Zero.'};
export const dynamic='force-dynamic';
export default async function AboutPage(){const services=(await listServiceRecords()).map(r=>r.service).filter(s=>s.listed);return <About services={services}/>}
