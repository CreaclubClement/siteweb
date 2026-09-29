// Source: Figma 114:2901; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgFrame373 = `${assetPathPrefix}/bcf19.png`;

type CardProjetGridListingAmoualProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function CardProjetGridListingAmoual({ className, property1 = "Default" }: CardProjetGridListingAmoualProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[16px] items-start justify-center relative w-full"} data-figma-id={isVariant2 ? "node-114_2917" : "node-114_2902"}>
      <div className={`h-[479px] overflow-clip relative min-w-0 w-full ${isVariant2 ? "content-stretch flex flex-col items-end justify-end p-[12px]" : ""}`} data-figma-id={isVariant2 ? "node-114_2918" : "node-114_2903"}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame373} />
        <div className={`content-stretch flex gap-[12px] items-center ${isVariant2 ? "relative shrink-0" : "absolute left-[460px] top-[481px]"}`} data-figma-id={isVariant2 ? "node-114_2919" : "node-114_2904"}>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-white" : "bg-[#f1f1f1]"}`} data-figma-id={isVariant2 ? "node-114_2920" : "node-114_2905"}>
            <p className={`[word-break:break-word] font-sans font-normal relative shrink-0 text-[14px] text-black text-center whitespace-normal ${isVariant2 ? "leading-[1.4]" : "leading-[normal]"}`} data-figma-id={isVariant2 ? "node-114_2921" : "node-114_2906"}>
              Identité visuelle
            </p>
          </div>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-white" : "bg-[#f1f1f1]"}`} data-figma-id={isVariant2 ? "node-114_2922" : "node-114_2907"}>
            <p className={`[word-break:break-word] font-sans font-normal relative shrink-0 text-[14px] text-black text-center whitespace-normal ${isVariant2 ? "leading-[1.4]" : "leading-[normal]"}`} data-figma-id={isVariant2 ? "node-114_2923" : "node-114_2908"}>
              Stratégie de marque
            </p>
          </div>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-white" : "bg-[#f1f1f1]"}`} data-figma-id={isVariant2 ? "node-114_2924" : "node-114_2909"}>
            <p className={`[word-break:break-word] font-sans font-normal relative shrink-0 text-[14px] text-black text-center whitespace-normal ${isVariant2 ? "leading-[1.4]" : "leading-[normal]"}`} data-figma-id={isVariant2 ? "node-114_2925" : "node-114_2910"}>
              {isVariant2 ? "Expérience digitale" : "Expérience web"}
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-114_2926" : "node-114_2911"}>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-figma-id={isVariant2 ? "node-114_2927" : "node-114_2912"}>
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#252525] text-[16px] text-center whitespace-normal" data-figma-id={isVariant2 ? "node-114_2928" : "node-114_2913"}>
            Amoual
          </p>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-[#d9ff8e]" : "bg-[var(--gris-clair,#ededed)]"}`} data-figma-id={isVariant2 ? "node-114_2929" : "node-114_2914"}>
            <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[#252525] text-[14px] text-center tracking-[-0.28px] whitespace-normal" data-figma-id={isVariant2 ? "node-114_2930" : "node-114_2915"}>
              REBRANDING
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-sans font-light leading-[normal] relative shrink-0 text-[#5e5e5e] text-[16px] w-full" data-figma-id={isVariant2 ? "node-114_2931" : "node-114_2916"}>{`Construire une marque capable d'inspirer confiance aux investisseurs.`}</p>
      </div>
    </div>
  );
}