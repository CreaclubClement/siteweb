// Source: Figma 114:3062; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgFrame373 = `${assetPathPrefix}/338b9.png`;

type CardProjetGridListingPbCosmeticsProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function CardProjetGridListingPbCosmetics({ className, property1 = "Default" }: CardProjetGridListingPbCosmeticsProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[16px] items-start justify-center relative w-full"} data-figma-id={isVariant2 ? "node-114_3078" : "node-114_3063"}>
      <div className={`h-[389px] relative min-w-0 w-full ${isVariant2 ? "content-stretch flex flex-col items-end justify-end p-[12px]" : "overflow-clip"}`} data-figma-id={isVariant2 ? "node-114_3079" : "node-114_3064"}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame373} />
        <div className={`content-stretch flex gap-[12px] items-center ${isVariant2 ? "relative shrink-0" : "absolute left-[282px] top-[391px]"}`} data-figma-id={isVariant2 ? "node-114_3080" : "node-114_3065"}>
          <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-figma-id={isVariant2 ? "node-114_3081" : "node-114_3066"}>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center whitespace-normal" data-figma-id={isVariant2 ? "node-114_3082" : "node-114_3067"}>
              Identité visuelle
            </p>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-figma-id={isVariant2 ? "node-114_3083" : "node-114_3068"}>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center whitespace-normal" data-figma-id={isVariant2 ? "node-114_3084" : "node-114_3069"}>
              Stratégie de marque
            </p>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-figma-id={isVariant2 ? "node-114_3085" : "node-114_3070"}>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center whitespace-normal" data-figma-id={isVariant2 ? "node-114_3086" : "node-114_3071"}>
              Expérience digitale
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-figma-id={isVariant2 ? "node-114_3087" : "node-114_3072"}>
        <div className="content-stretch flex gap-[12px] items-center relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-114_3088" : "node-114_3073"}>
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#252525] text-[16px] text-center whitespace-normal" data-figma-id={isVariant2 ? "node-114_3089" : "node-114_3074"}>
            PB cosmetics
          </p>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-[#d9ff8e]" : "bg-[#f1f1f1]"}`} data-figma-id={isVariant2 ? "node-114_3090" : "node-114_3075"}>
            <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[#252525] text-[14px] text-center tracking-[-0.28px] whitespace-normal" data-figma-id={isVariant2 ? "node-114_3091" : "node-114_3076"}>
              REBRANDING
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-sans font-light leading-[normal] relative shrink-0 text-[#5e5e5e] text-[16px] w-full" data-figma-id={isVariant2 ? "node-114_3092" : "node-114_3077"}>{`Faire évoluer la perception d'une marque grâce à une identité plus premium.`}</p>
      </div>
    </div>
  );
}