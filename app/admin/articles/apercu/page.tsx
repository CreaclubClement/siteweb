import {notFound} from 'next/navigation';
import {requireChatGPTUser} from '@/app/chatgpt-auth';
import {isProjectEditor} from '@/lib/cms/auth';
import {getArticleRecord} from '@/lib/cms/articles';
import {ArticleDetail} from '@/components/articles/Articles';
import '../../../home.css';
import '../../../journal/journal.css';
export const dynamic='force-dynamic';
export const metadata={title:'Aperçu article',robots:{index:false,follow:false}};
export default async function Page({searchParams}:{searchParams:Promise<{id?:string}>}){await requireChatGPTUser('/admin/articles');if(!await isProjectEditor())notFound();const {id}=await searchParams;const record=id?await getArticleRecord(id):undefined;if(!record)notFound();return <><p style={{padding:16,background:'#d9ff8e'}}>Aperçu de la version enregistrée — <a href="/admin/articles">Retour aux articles</a></p><ArticleDetail article={record.article}/></>}
