// Source: Figma 21:1105; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgRectangle6 = `${assetPathPrefix}/3b7ec.png`;

type Frame11Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Frame11({ className, property1 = "Default" }: Frame11Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[12px] items-start relative w-full"} data-figma-id={isVariant2 ? "node-21_1106" : "node-21_1104"}>
      <div className="h-[224px] relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-21_1107" : "node-21_1078"}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle6} />
      </div>
      <div className="content-stretch flex flex-col items-start relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-21_1108" : "node-21_1079"}>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-21_1109" : "node-21_1080"}>
          <div className="content-stretch flex gap-[8px] items-center relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-21_1110" : "node-21_1081"}>
            <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-[var(--accent,#d9ff8e)]" : "bg-[var(--gris-clair,#ededed)]"}`} data-figma-id={isVariant2 ? "node-21_1111" : "node-21_1082"}>
              <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[12px] text-[color:var(--noir,#252525)] whitespace-normal" data-figma-id={isVariant2 ? "node-21_1112" : "node-21_1083"}>
                EXPÉRIENCE WEB
              </p>
            </div>
            <p className="[word-break:break-word] font-sans font-[450] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--noir,#252525)] whitespace-normal" data-figma-id={isVariant2 ? "node-21_1113" : "node-21_1084"}>
              12 juillet 2025
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-sans gap-[12px] items-start relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-21_1114" : "node-21_1085"}>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[14px] w-full" data-figma-id={isVariant2 ? "node-21_1115" : "node-21_1086"}>
              <p className={`font-[450] leading-[normal] relative shrink-0 text-[color:var(--noir,#252525)] w-full ${isVariant2 ? "[text-underline-position:from-font] decoration-from-font decoration-solid underline" : ""}`} data-figma-id={isVariant2 ? "node-21_1116" : "node-21_1087"}>
                La stratégie de marque, quand devient-elle vraiement nécessaire pour votre projet ?
              </p>
              <p className="font-normal leading-[1.4] relative shrink-0 text-[color:var(--gris,#5e5e5e)] w-full" data-figma-id={isVariant2 ? "node-21_1117" : "node-21_1088"}>{`On combine la réflexion de marque avec l'exécution technique. La plupart des agences vous font un logo ou un site web et vous souhaitent bonne chance. `}</p>
            </div>
            <p className="font-[450] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--gris,#5e5e5e)] whitespace-normal" data-figma-id={isVariant2 ? "node-21_1118" : "node-21_1089"}>
              4min de lecture
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}