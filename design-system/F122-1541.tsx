// Source: Figma 122:1541; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgFrame373 = `${assetPathPrefix}/bcf19.png`;

type CardProjetMobileProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function CardProjetMobile({ className, property1 = "Default" }: CardProjetMobileProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[16px] items-start justify-center relative w-full"} data-figma-id={isVariant2 ? "node-122_1557" : "node-122_1542"}>
      <div className={`h-[479px] overflow-clip relative min-w-0 w-full ${isVariant2 ? "content-stretch flex flex-col items-end justify-end p-[12px]" : ""}`} data-figma-id={isVariant2 ? "node-122_1558" : "node-122_1543"}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame373} />
        <div className={`content-stretch flex gap-[12px] ${isVariant2 ? "flex-col items-end justify-center relative shrink-0" : "absolute items-center left-[460px] top-[481px]"}`} data-figma-id={isVariant2 ? "node-122_1559" : "node-122_1544"}>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-white" : "bg-[#f1f1f1]"}`} data-figma-id={isVariant2 ? "node-122_1560" : "node-122_1545"}>
            <p className={`[word-break:break-word] font-sans font-normal relative shrink-0 text-[14px] text-black text-center whitespace-normal ${isVariant2 ? "leading-[1.4]" : "leading-[normal]"}`} data-figma-id={isVariant2 ? "node-122_1561" : "node-122_1546"}>
              Identité visuelle
            </p>
          </div>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-white" : "bg-[#f1f1f1]"}`} data-figma-id={isVariant2 ? "node-122_1562" : "node-122_1547"}>
            <p className={`[word-break:break-word] font-sans font-normal relative shrink-0 text-[14px] text-black text-center whitespace-normal ${isVariant2 ? "leading-[1.4]" : "leading-[normal]"}`} data-figma-id={isVariant2 ? "node-122_1563" : "node-122_1548"}>
              Stratégie de marque
            </p>
          </div>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-white" : "bg-[#f1f1f1]"}`} data-figma-id={isVariant2 ? "node-122_1564" : "node-122_1549"}>
            <p className={`[word-break:break-word] font-sans font-normal relative shrink-0 text-[14px] text-black text-center whitespace-normal ${isVariant2 ? "leading-[1.4]" : "leading-[normal]"}`} data-figma-id={isVariant2 ? "node-122_1565" : "node-122_1550"}>
              {isVariant2 ? "Expérience digitale" : "Expérience web"}
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-122_1566" : "node-122_1551"}>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-figma-id={isVariant2 ? "node-122_1567" : "node-122_1552"}>
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#252525] text-[16px] text-center whitespace-normal" data-figma-id={isVariant2 ? "node-122_1568" : "node-122_1553"}>
            Amoual
          </p>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-[#d9ff8e]" : "bg-[var(--gris-clair,#ededed)]"}`} data-figma-id={isVariant2 ? "node-122_1569" : "node-122_1554"}>
            <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[#252525] text-[14px] text-center tracking-[-0.28px] whitespace-normal" data-figma-id={isVariant2 ? "node-122_1570" : "node-122_1555"}>
              REBRANDING
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-sans font-light leading-[normal] relative shrink-0 text-[#5e5e5e] text-[16px] w-full" data-figma-id={isVariant2 ? "node-122_1571" : "node-122_1556"}>{`Construire une marque capable d'inspirer confiance aux investisseurs.`}</p>
      </div>
    </div>
  );
}