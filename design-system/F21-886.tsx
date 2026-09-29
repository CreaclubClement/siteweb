// Source: Figma 21:886; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgFrame373 = `${assetPathPrefix}/338b9.png`;

type CardProjetHomeVersion1Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function CardProjetHomeVersion1({ className, property1 = "Default" }: CardProjetHomeVersion1Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[16px] items-start justify-center relative w-full"} data-figma-id={isVariant2 ? "node-21_887" : "node-21_885"}>
      <div className={`aspect-[694/389] relative min-w-0 w-full ${isVariant2 ? "content-stretch flex flex-col items-end justify-end p-[12px]" : "overflow-clip"}`} data-figma-id={isVariant2 ? "node-21_888" : "node-21_870"}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame373} />
        <div className={`content-stretch flex gap-[12px] items-center ${isVariant2 ? "relative shrink-0" : "absolute left-[282px] top-[391px]"}`} data-figma-id={isVariant2 ? "node-21_889" : "node-21_877"}>
          <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-figma-id={isVariant2 ? "node-21_890" : "node-21_878"}>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center whitespace-normal" data-figma-id={isVariant2 ? "node-21_891" : "node-21_879"}>
              Identité visuelle
            </p>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-figma-id={isVariant2 ? "node-21_892" : "node-21_880"}>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center whitespace-normal" data-figma-id={isVariant2 ? "node-21_893" : "node-21_881"}>
              Stratégie de marque
            </p>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-figma-id={isVariant2 ? "node-21_894" : "node-21_882"}>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center whitespace-normal" data-figma-id={isVariant2 ? "node-21_895" : "node-21_883"}>
              Expérience digitale
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-figma-id={isVariant2 ? "node-21_896" : "node-21_871"}>
        <div className="content-stretch flex gap-[12px] items-center relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-21_897" : "node-21_872"}>
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#252525] text-[16px] text-center whitespace-normal" data-figma-id={isVariant2 ? "node-21_898" : "node-21_873"}>
            PB cosmetics
          </p>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-[#d9ff8e]" : "bg-[#f1f1f1]"}`} data-figma-id={isVariant2 ? "node-21_899" : "node-21_874"}>
            <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[#252525] text-[14px] text-center tracking-[-0.28px] whitespace-normal" data-figma-id={isVariant2 ? "node-21_900" : "node-21_875"}>
              REBRANDING
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-sans font-light leading-[normal] relative shrink-0 text-[#5e5e5e] text-[16px] w-full" data-figma-id={isVariant2 ? "node-21_901" : "node-21_876"}>{`Faire évoluer la perception d'une marque grâce à une identité plus premium.`}</p>
      </div>
    </div>
  );
}