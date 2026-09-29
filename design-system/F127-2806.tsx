import Default from "./V127-2807";
import Active from "./V127-2819";
export default function Component({property1="Default"}:{property1?:string}){return property1==="Active"?<Active/>:<Default/>;}
