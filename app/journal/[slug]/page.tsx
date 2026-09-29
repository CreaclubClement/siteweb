import {notFound} from 'next/navigation';
import {getArticleRecord} from '@/lib/cms/articles';
import {ArticleDetail} from '@/components/articles/Articles';
import '../../home.css';
import '../journal.css';
export const dynamic='force-dynamic';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const record=await getArticleRecord(slug);return record?.article.published?{title:record.article.title+' — Étape Zero',description:record.article.excerpt}:{title:'Article introuvable'};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const record=await getArticleRecord(slug);if(!record?.article.published)notFound();return <ArticleDetail article={record.article}/>}
