import {z} from 'zod';
import {isProjectEditor,sameOrigin} from '@/lib/cms/auth';
import {projectSchema} from '@/lib/cms/project-schema';
import {saveProject} from '@/lib/cms/projects';
export async function PUT(request:Request){
 if(!await isProjectEditor())return Response.json({error:'Accès réservé au propriétaire.'},{status:403});
 if(!sameOrigin(request))return Response.json({error:'Origine non autorisée.'},{status:403});
 if(Number(request.headers.get('content-length')||0)>500000)return Response.json({error:'Fiche trop volumineuse.'},{status:413});
 try{const body=await request.text();if(body.length>500000)return Response.json({error:'Fiche trop volumineuse.'},{status:413});const parsed=z.object({project:projectSchema,revision:z.number().int().nonnegative()}).safeParse(JSON.parse(body));if(!parsed.success)return Response.json({error:'Vérifiez les champs : '+parsed.error.issues[0]?.message},{status:400});const revision=await saveProject(parsed.data.project,parsed.data.revision);if(revision===null)return Response.json({error:'Cette fiche a changé dans un autre onglet ou cet identifiant existe déjà. Rechargez la page avant de réessayer.'},{status:409});return Response.json({revision});}catch{return Response.json({error:'La sauvegarde a échoué. Votre saisie est conservée dans ce formulaire.'},{status:500});}
}
