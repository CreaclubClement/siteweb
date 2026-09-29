import {getChatGPTUser} from '@/app/chatgpt-auth';
// Server-side owner allowlist. Dispatcher supplies verified identity headers.
export async function isProjectEditor(){const user=await getChatGPTUser();return user?.email.toLowerCase()==='clement73lb@gmail.com';}
export function sameOrigin(request:Request){const origin=request.headers.get('origin');return !!origin&&origin===new URL(request.url).origin;}
