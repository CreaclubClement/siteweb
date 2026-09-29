// Source: Figma 21:819; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgFrame397 = `${assetPathPrefix}/48e72.png`;

type Frame390Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Frame390({ className, property1 = "Default" }: Frame390Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[16px] h-auto items-start justify-center relative w-full"} data-figma-id={isVariant2 ? "node-21_820" : "node-21_818"}>
      <div className={`aspect-[315/389] overflow-clip relative min-w-0 w-full ${isVariant2 ? "content-stretch flex flex-col items-end justify-end p-[12px]" : ""}`} data-figma-id={isVariant2 ? "node-21_821" : "node-21_802"}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame397} />
        <div className={`content-stretch flex flex-col gap-[12px] items-end justify-center ${isVariant2 ? "relative shrink-0" : "absolute left-[165px] top-[395px]"}`} data-figma-id={isVariant2 ? "node-21_822" : "node-21_810"}>
          <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-figma-id={isVariant2 ? "node-21_823" : "node-21_811"}>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center whitespace-normal" data-figma-id={isVariant2 ? "node-21_824" : "node-21_812"}>
              Identité visuelle
            </p>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-figma-id={isVariant2 ? "node-21_825" : "node-21_813"}>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center whitespace-normal" data-figma-id={isVariant2 ? "node-21_826" : "node-21_814"}>
              Stratégie de marque
            </p>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-figma-id={isVariant2 ? "node-21_827" : "node-21_815"}>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center whitespace-normal" data-figma-id={isVariant2 ? "node-21_828" : "node-21_816"}>
              Expérience digitale
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-21_829" : "node-21_803"}>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-figma-id={isVariant2 ? "node-21_830" : "node-21_804"}>
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#252525] text-[16px] text-center whitespace-normal" data-figma-id={isVariant2 ? "node-21_831" : "node-21_805"}>
            Active Life
          </p>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-[#d9ff8e]" : "bg-[#f1f1f1]"}`} data-figma-id={isVariant2 ? "node-21_832" : "node-21_806"}>
            <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[#252525] text-[14px] text-center tracking-[-0.28px] whitespace-normal" data-figma-id={isVariant2 ? "node-21_833" : "node-21_807"}>
              REBRANDING
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-sans font-light leading-[normal] min-w-full relative shrink-0 text-[#5e5e5e] text-[16px] w-[min-content]" data-figma-id={isVariant2 ? "node-21_834" : "node-21_808"}>{`Créer une communication capable de capter l'attention en quelques secondes.`}</p>
      </div>
    </div>
  );
}