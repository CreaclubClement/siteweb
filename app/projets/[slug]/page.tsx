import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {listProjectRecords,getProjectRecord} from '@/lib/cms/projects';
import {toProjectCard} from '@/lib/content/projects';
import {ProjectDetail} from '@/components/projects/ProjectDetail';
import '../../home.css';
import '../project.css';
export const dynamic='force-dynamic';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const record=await getProjectRecord(slug);return record?.project.published?{title:record.project.title+' — Étape Zero',description:record.project.description}:{title:'Projet introuvable — Étape Zero'};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const records=await listProjectRecords(),record=records.find(r=>r.project.id===slug&&r.project.published);if(!record)notFound();const related=records.filter(r=>r.project.id!==slug&&r.project.listed).map(r=>toProjectCard(r.project));return <ProjectDetail project={record.project} related={related}/>;}
