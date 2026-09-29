// Source: Figma 21:990; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgRectangle6 = `${assetPathPrefix}/2c25d.png`;

type Frame8Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Frame8({ className, property1 = "Default" }: Frame8Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[12px] items-start relative w-full"} data-figma-id={isVariant2 ? "node-21_991" : "node-21_989"}>
      <div className="h-[224px] relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-21_992" : "node-21_977"}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle6} />
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-21_993" : "node-21_978"}>
        <div className="content-stretch flex gap-[8px] items-center relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-21_994" : "node-21_979"}>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-[var(--accent,#d9ff8e)]" : "bg-[var(--gris-clair,#ededed)]"}`} data-figma-id={isVariant2 ? "node-21_995" : "node-21_980"}>
            <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[12px] text-[color:var(--noir,#252525)] whitespace-normal" data-figma-id={isVariant2 ? "node-21_996" : "node-21_981"}>
              STRATÉGIE
            </p>
          </div>
          <p className="[word-break:break-word] font-sans font-[450] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--noir,#252525)] whitespace-normal" data-figma-id={isVariant2 ? "node-21_997" : "node-21_982"}>
            12 juillet 2025
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col font-sans gap-[12px] items-start relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-21_998" : "node-21_983"}>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[14px] w-full" data-figma-id={isVariant2 ? "node-21_999" : "node-21_984"}>
            <p className={`font-[450] leading-[normal] relative shrink-0 text-[color:var(--noir,#252525)] w-full ${isVariant2 ? "[text-underline-position:from-font] decoration-from-font decoration-solid underline" : ""}`} data-figma-id={isVariant2 ? "node-21_1000" : "node-21_985"}>
              La stratégie de marque, quand devient-elle vraiement nécessaire pour votre projet ?
            </p>
            <p className="font-normal leading-[1.4] relative shrink-0 text-[color:var(--gris,#5e5e5e)] w-full" data-figma-id={isVariant2 ? "node-21_1001" : "node-21_986"}>{`On combine la réflexion de marque avec l'exécution technique. La plupart des agences vous font un logo ou un site web et vous souhaitent bonne chance. `}</p>
          </div>
          <p className="font-[450] leading-[1.4] relative shrink-0 text-[12px] text-[color:var(--gris,#5e5e5e)] whitespace-normal" data-figma-id={isVariant2 ? "node-21_1002" : "node-21_987"}>
            4min de lecture
          </p>
        </div>
      </div>
    </div>
  );
}