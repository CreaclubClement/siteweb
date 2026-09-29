import {listArticleRecords} from '@/lib/cms/articles';
import {ArticleHub} from '@/components/articles/Articles';
import '../home.css';
import './journal.css';
export const dynamic='force-dynamic';
export const metadata={title:'Le Journal — Étape Zero'};
export default async function Page(){const articles=(await listArticleRecords()).map(r=>r.article).filter(a=>a.published&&a.listed).sort((a,b)=>b.date.localeCompare(a.date));return <ArticleHub articles={articles}/>}
