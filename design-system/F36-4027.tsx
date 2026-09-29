// Source: Figma 36:4027; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgRectangle6 = `${assetPathPrefix}/2c25d.png`;

type Frame435Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Frame435({ className, property1 = "Default" }: Frame435Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[12px] items-start relative w-full"} data-figma-id={isVariant2 ? "node-36_4040" : "node-36_4028"}>
      <div className="h-[352px] relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-36_4041" : "node-36_4029"}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle6} />
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-36_4042" : "node-36_4030"}>
        <div className="content-stretch flex gap-[8px] items-center relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-36_4043" : "node-36_4031"}>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-[var(--accent,#d9ff8e)]" : "bg-[var(--gris-clair,#ededed)]"}`} data-figma-id={isVariant2 ? "node-36_4044" : "node-36_4032"}>
            <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[12px] text-[color:var(--noir,#252525)] whitespace-normal" data-figma-id={isVariant2 ? "node-36_4045" : "node-36_4033"}>
              STRATÉGIE
            </p>
          </div>
          <p className="[word-break:break-word] font-sans font-[450] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--noir,#252525)] whitespace-normal" data-figma-id={isVariant2 ? "node-36_4046" : "node-36_4034"}>
            12 juillet 2025
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col font-sans gap-[12px] items-start relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-36_4047" : "node-36_4035"}>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[14px] w-full" data-figma-id={isVariant2 ? "node-36_4048" : "node-36_4036"}>
            <p className={`font-[450] leading-[normal] relative shrink-0 text-[color:var(--noir,#252525)] w-full ${isVariant2 ? "[text-underline-position:from-font] decoration-from-font decoration-solid underline" : ""}`} data-figma-id={isVariant2 ? "node-36_4049" : "node-36_4037"}>
              La stratégie de marque, quand devient-elle vraiement nécessaire pour votre projet ?
            </p>
            <p className="font-normal leading-[1.4] relative shrink-0 text-[color:var(--gris,#5e5e5e)] w-full" data-figma-id={isVariant2 ? "node-36_4050" : "node-36_4038"}>{`On combine la réflexion de marque avec l'exécution technique. La plupart des agences vous font un logo ou un site web et vous souhaitent bonne chance. `}</p>
          </div>
          <p className="font-[450] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--gris,#5e5e5e)] whitespace-normal" data-figma-id={isVariant2 ? "node-36_4051" : "node-36_4039"}>
            4min de lecture
          </p>
        </div>
      </div>
    </div>
  );
}