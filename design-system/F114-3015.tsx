// Source: Figma 114:3015; fluid layout adaptation.
type CardProjetGridListingUTragulinuProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function CardProjetGridListingUTragulinu({ className, property1 = "Default" }: CardProjetGridListingUTragulinuProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[16px] h-auto items-start justify-center relative w-full"} data-figma-id={isVariant2 ? "node-114_3031" : "node-114_3016"}>
      <div className={`h-[389px] overflow-clip relative min-w-0 w-full ${isVariant2 ? "content-stretch flex flex-col items-end justify-end p-[12px]" : ""}`} data-figma-id={isVariant2 ? "node-114_3032" : "node-114_3017"}>
        <div className={`content-stretch flex gap-[12px] items-center justify-end ${isVariant2 ? "relative shrink-0" : "absolute left-[165px] top-[395px]"}`} data-figma-id={isVariant2 ? "node-114_3033" : "node-114_3018"}>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-white" : "bg-[#f1f1f1]"}`} data-figma-id={isVariant2 ? "node-114_3034" : "node-114_3019"}>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center whitespace-normal" data-figma-id={isVariant2 ? "node-114_3035" : "node-114_3020"}>
              Identité visuelle
            </p>
          </div>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-white" : "bg-[#f1f1f1]"}`} data-figma-id={isVariant2 ? "node-114_3036" : "node-114_3021"}>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center whitespace-normal" data-figma-id={isVariant2 ? "node-114_3037" : "node-114_3022"}>
              Stratégie de marque
            </p>
          </div>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-white" : "bg-[#f1f1f1]"}`} data-figma-id={isVariant2 ? "node-114_3038" : "node-114_3023"}>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center whitespace-normal" data-figma-id={isVariant2 ? "node-114_3039" : "node-114_3024"}>
              {isVariant2 ? "Expérience digitale" : "Expérience web"}
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-figma-id={isVariant2 ? "node-114_3040" : "node-114_3025"}>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-figma-id={isVariant2 ? "node-114_3041" : "node-114_3026"}>
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#252525] text-[16px] text-center whitespace-normal" data-figma-id={isVariant2 ? "node-114_3042" : "node-114_3027"}>
            U-Tragulinu
          </p>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-[#d9ff8e]" : "bg-[#f1f1f1]"}`} data-figma-id={isVariant2 ? "node-114_3043" : "node-114_3028"}>
            <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[#252525] text-[14px] text-center tracking-[-0.28px] whitespace-normal" data-figma-id={isVariant2 ? "node-114_3044" : "node-114_3029"}>
              REBRANDING
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-sans font-light leading-[normal] relative shrink-0 text-[#5e5e5e] text-[16px] w-full" data-figma-id={isVariant2 ? "node-114_3045" : "node-114_3030"}>
          Moderniser une marque historique sans perdre son authenticité corse.
        </p>
      </div>
    </div>
  );
}