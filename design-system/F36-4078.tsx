// Source: Figma 36:4078; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgRectangle7 = `${assetPathPrefix}/41740.png`;

type CardArticleV2Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function CardArticleV2({ className, property1 = "Default" }: CardArticleV2Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[12px] items-start relative w-full"} data-figma-id={isVariant2 ? "node-36_4091" : "node-36_4079"}>
      <div className="h-[352px] relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-36_4092" : "node-36_4080"}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle7} />
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-36_4093" : "node-36_4081"}>
        <div className="content-stretch flex gap-[8px] items-center relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-36_4094" : "node-36_4082"}>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-[var(--accent,#d9ff8e)]" : "bg-[var(--gris-clair,#ededed)]"}`} data-figma-id={isVariant2 ? "node-36_4095" : "node-36_4083"}>
            <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[12px] text-[color:var(--noir,#252525)] whitespace-normal" data-figma-id={isVariant2 ? "node-36_4096" : "node-36_4084"}>
              IDENTITÉ VISUELLE
            </p>
          </div>
          <p className="[word-break:break-word] font-sans font-[450] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--noir,#252525)] whitespace-normal" data-figma-id={isVariant2 ? "node-36_4097" : "node-36_4085"}>
            12 juillet 2025
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col font-sans gap-[12px] items-start relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-36_4098" : "node-36_4086"}>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[14px] w-full" data-figma-id={isVariant2 ? "node-36_4099" : "node-36_4087"}>
            <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-[450] leading-[normal] relative shrink-0 text-[color:var(--noir,#252525)] underline w-full" data-figma-id={isVariant2 ? "node-36_4100" : "node-36_4088"}>
              La stratégie de marque, quand devient-elle vraiement nécessaire pour votre projet ?
            </p>
            <p className="font-normal leading-[1.4] relative shrink-0 text-[color:var(--gris,#5e5e5e)] w-full" data-figma-id={isVariant2 ? "node-36_4101" : "node-36_4089"}>{`On combine la réflexion de marque avec l'exécution technique. La plupart des agences vous font un logo ou un site web et vous souhaitent bonne chance. `}</p>
          </div>
          <p className="font-[450] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--gris,#5e5e5e)] whitespace-normal" data-figma-id={isVariant2 ? "node-36_4102" : "node-36_4090"}>
            4min de lecture
          </p>
        </div>
      </div>
    </div>
  );
}