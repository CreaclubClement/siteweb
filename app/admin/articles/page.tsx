import {requireChatGPTUser} from '@/app/chatgpt-auth';
import {isProjectEditor} from '@/lib/cms/auth';
import {listArticleRecords} from '@/lib/cms/articles';
import {ArticleEditor} from '@/components/articles/ArticleEditor';
import '../projets/admin.css';
export const dynamic='force-dynamic';
export const metadata={title:'Articles — Administration Étape Zero',robots:{index:false,follow:false}};
export default async function Page(){await requireChatGPTUser('/admin/articles');if(!await isProjectEditor())return <main className="cms"><h1>Accès réservé au propriétaire</h1><a href="/">Retour au site</a></main>;return <ArticleEditor initial={await listArticleRecords()}/>}
