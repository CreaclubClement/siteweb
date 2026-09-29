import Default from "./V127-2726";
import Active from "./V127-2738";
export default function Component({property1="Default"}:{property1?:string}){return property1==="Active"?<Active/>:<Default/>;}
