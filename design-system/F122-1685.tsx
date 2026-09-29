// Source: Figma 122:1685; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgFrame373 = `${assetPathPrefix}/1386a.png`;

type Frame427322454Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Frame427322454({ className, property1 = "Default" }: Frame427322454Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[16px] items-start justify-center relative w-full"} data-figma-id={isVariant2 ? "node-122_1697" : "node-122_1686"}>
      <div className={`h-[389px] overflow-clip relative min-w-0 w-full ${isVariant2 ? "content-stretch flex flex-col items-end justify-end p-[12px]" : ""}`} data-figma-id={isVariant2 ? "node-122_1698" : "node-122_1687"}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame373} />
        <div className={`content-stretch flex items-center ${isVariant2 ? "relative shrink-0" : "absolute justify-end left-[573px] top-[391px]"}`} data-figma-id={isVariant2 ? "node-122_1699" : "node-122_1688"}>
          <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-figma-id={isVariant2 ? "node-122_1700" : "node-122_1689"}>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center whitespace-normal" data-figma-id={isVariant2 ? "node-122_1701" : "node-122_1690"}>
              Identité visuelle
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-figma-id={isVariant2 ? "node-122_1702" : "node-122_1691"}>
        <div className="content-stretch flex gap-[12px] items-center relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-122_1703" : "node-122_1692"}>
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#252525] text-[16px] text-center whitespace-normal" data-figma-id={isVariant2 ? "node-122_1704" : "node-122_1693"}>{`Cooked & CO`}</p>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-[#d9ff8e]" : "bg-[#f1f1f1]"}`} data-figma-id={isVariant2 ? "node-122_1705" : "node-122_1694"}>
            <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[#252525] text-[14px] text-center tracking-[-0.28px] whitespace-normal" data-figma-id={isVariant2 ? "node-122_1706" : "node-122_1695"}>
              LANCEMENT
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-sans font-light leading-[normal] relative shrink-0 text-[#5e5e5e] text-[16px] w-full" data-figma-id={isVariant2 ? "node-122_1707" : "node-122_1696"}>
          Construire un système graphique cohérent pour accompagner la croissance de la marque.
        </p>
      </div>
    </div>
  );
}