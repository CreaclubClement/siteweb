import {env} from 'cloudflare:workers';
import {articleSeeds} from '@/lib/content/articles';
import {articleSchema,type ArticleRecord,type CMSArticle} from './article-schema';
function database(){if(!env.DB)throw new Error('La collection articles est indisponible.');return env.DB;}
export async function listArticleRecords():Promise<ArticleRecord[]>{
 const rows=await database().prepare('SELECT data, revision FROM cms_articles ORDER BY updated_at ASC').all<{data:string;revision:number}>();
 const records=new Map(articleSeeds.map(article=>[article.id,{article,revision:0}]));
 for(const row of rows.results){const article=articleSchema.parse(JSON.parse(row.data));records.set(article.id,{article,revision:row.revision});}
 return [...records.values()];
}
export async function getArticleRecord(id:string){return (await listArticleRecords()).find(r=>r.article.id===id);}
export async function saveArticle(article:CMSArticle,revision:number){
 const data=JSON.stringify(article),now=new Date().toISOString();
 const result=revision===0?await database().prepare('INSERT INTO cms_articles (id,data,revision,updated_at) VALUES (?,?,1,?) ON CONFLICT(id) DO NOTHING').bind(article.id,data,now).run():await database().prepare('UPDATE cms_articles SET data=?,revision=revision+1,updated_at=? WHERE id=? AND revision=?').bind(data,now,article.id,revision).run();
 return result.meta.changes===1?revision+1:null;
}
