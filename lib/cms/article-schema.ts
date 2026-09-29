import {z} from 'zod';
import {photoSchema,blankPhoto} from './project-schema';
const text=z.string().max(30000);
export const articleSectionSchema=z.object({title:z.string().max(200),subtitle:z.string().max(200),text,bullets:z.array(z.string().max(1000)).max(30),photos:z.array(photoSchema).max(12),quote:z.string().max(2000)});
export const articleSchema=z.object({id:z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(100),title:z.string().trim().min(1).max(250),category:z.string().trim().min(1).max(100),date:z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(v=>!isNaN(Date.parse(v)),'Date invalide'),excerpt:text,intro:text,readingMinutes:z.number().int().min(0).max(999),cover:photoSchema,hero:photoSchema,cardFormat:z.enum(['landscape','portrait']),sections:z.array(articleSectionSchema).max(60),closing:text,author:z.string().max(150),authorRole:z.string().max(150),authorPhoto:photoSchema,published:z.boolean(),listed:z.boolean()});
export type CMSArticle=z.infer<typeof articleSchema>;
export type ArticleRecord={article:CMSArticle;revision:number};
export const blankSection=()=>({title:'',subtitle:'',text:'',bullets:[] as string[],photos:[] as z.infer<typeof photoSchema>[],quote:''});
export function blankArticle():CMSArticle{return {id:'',title:'',category:'',date:new Date().toISOString().slice(0,10),excerpt:'',intro:'',readingMinutes:0,cover:blankPhoto(),hero:blankPhoto(),cardFormat:'landscape',sections:[],closing:'',author:'Clément LE BAILLIF',authorRole:'Fondateur du Studio',authorPhoto:blankPhoto(),published:false,listed:true};}
export function readingTime(a:CMSArticle){return a.readingMinutes||Math.max(1,Math.ceil([a.intro,...a.sections.flatMap(s=>[s.title,s.subtitle,s.text,...s.bullets,s.quote]),a.closing].join(' ').split(/\s+/).filter(Boolean).length/200));}
export function articleDate(value:string){return new Intl.DateTimeFormat('fr-FR',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(value+'T12:00:00Z'));}
