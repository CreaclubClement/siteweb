import {env} from 'cloudflare:workers';
import {projectSeeds} from '@/lib/content/projects';
import {projectSchema,type ProjectRecord,type CMSProject} from './project-schema';
function database(){if(!env.DB)throw new Error('La collection projets est indisponible.');return env.DB;}
export async function listProjectRecords():Promise<ProjectRecord[]>{
 const rows=await database().prepare('SELECT data, revision FROM cms_projects ORDER BY updated_at ASC').all<{data:string;revision:number}>();
 const records=new Map(projectSeeds.map(project=>[project.id,{project,revision:0}]));
 for(const row of rows.results){const project=projectSchema.parse(JSON.parse(row.data));records.set(project.id,{project,revision:row.revision});}
 return [...records.values()];
}
export async function getProjectRecord(id:string){return (await listProjectRecords()).find(r=>r.project.id===id);}
export async function saveProject(project:CMSProject,revision:number){
 const data=JSON.stringify(project),now=new Date().toISOString();
 const result=revision===0?await database().prepare('INSERT INTO cms_projects (id,data,revision,updated_at) VALUES (?,?,1,?) ON CONFLICT(id) DO NOTHING').bind(project.id,data,now).run():await database().prepare('UPDATE cms_projects SET data=?,revision=revision+1,updated_at=? WHERE id=? AND revision=?').bind(data,now,project.id,revision).run();
 return result.meta.changes===1?revision+1:null;
}
