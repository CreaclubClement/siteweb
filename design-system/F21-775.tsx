// Source: Figma 21:775; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgFrame396 = `${assetPathPrefix}/77725.png`;

type Frame389Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Frame389({ className, property1 = "Default" }: Frame389Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[16px] h-auto items-start justify-center relative w-full"} data-figma-id={isVariant2 ? "node-21_776" : "node-21_774"}>
      <div className={`aspect-[315/389] overflow-clip relative min-w-0 w-full ${isVariant2 ? "content-stretch flex flex-col items-end justify-end p-[12px]" : ""}`} data-figma-id={isVariant2 ? "node-21_777" : "node-21_769"}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame396} />
        <div className={`content-stretch flex items-center ${isVariant2 ? "relative shrink-0" : "absolute left-[194px] top-[391px]"}`} data-figma-id={isVariant2 ? "node-21_778" : "node-21_770"}>
          <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-figma-id={isVariant2 ? "node-21_779" : "node-21_771"}>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center whitespace-normal" data-figma-id={isVariant2 ? "node-21_780" : "node-21_772"}>
              Identité visuelle
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-21_781" : "node-21_763"}>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-figma-id={isVariant2 ? "node-21_782" : "node-21_764"}>
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#252525] text-[16px] text-center whitespace-normal" data-figma-id={isVariant2 ? "node-21_783" : "node-21_765"}>
            SoleSpace
          </p>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-[#d9ff8e]" : "bg-[#f1f1f1]"}`} data-figma-id={isVariant2 ? "node-21_784" : "node-21_766"}>
            <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[#252525] text-[14px] text-center tracking-[-0.28px] whitespace-normal" data-figma-id={isVariant2 ? "node-21_785" : "node-21_767"}>
              LANCEMENT
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-sans font-light leading-[normal] min-w-full relative shrink-0 text-[#5e5e5e] text-[16px] w-[min-content]" data-figma-id={isVariant2 ? "node-21_786" : "node-21_768"}>{`Poser les bases d'une marque ambitieuse dès son lancement.`}</p>
      </div>
    </div>
  );
}