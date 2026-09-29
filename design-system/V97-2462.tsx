const assetPathPrefix = "/assets/figma";
const imgRectangle30 = `${assetPathPrefix}/e77e6.png`;

type CardServiceStrategieDeMarqueDesktopPageAProposProps = {
  className?: string;
  property1?: "Variant2";
};

export default function CardServiceStrategieDeMarqueDesktopPageAPropos({ className, property1 = "Variant2" }: CardServiceStrategieDeMarqueDesktopPageAProposProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[12px] items-start relative"} data-figma-id={isVariant2 ? "node-97_2462" : "node-97_2450"}>
      <div className={`absolute bg-[var(--accent,#d9ff8e)] h-[200px] left-[353px] top-0 ${isVariant2 ? "w-full" : "w-0"}`} data-figma-id={isVariant2 ? "node-97_2463" : "node-97_2451"} />
      <div className="content-center flex flex-wrap gap-y-[173px] items-center relative shrink-0" data-figma-id={isVariant2 ? "node-97_2464" : "node-97_2452"}>
        <div className="content-stretch flex gap-[var(--l,24px)] items-center relative shrink-0" data-figma-id={isVariant2 ? "node-97_2465" : "node-97_2453"}>
          <div className="h-[200px] relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-97_2466" : "node-97_2454"}>
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle30} />
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-figma-id={isVariant2 ? "node-97_2467" : "node-97_2455"}>
            <div className="[word-break:break-word] col-1 content-stretch flex flex-col font-sans gap-[12px] items-start ml-0 mt-0 relative row-1 text-[color:var(--noir,#252525)]" data-figma-id={isVariant2 ? "node-97_2468" : "node-97_2456"}>
              <div className="content-stretch flex flex-col gap-[var(--xs,4px)] items-start relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-97_2469" : "node-97_2457"}>
                <p className="font-[450] leading-[1.4] relative shrink-0 text-[12px] w-full" data-figma-id={isVariant2 ? "node-97_2470" : "node-97_2458"}>{`Comprendre avant d'agir.`}</p>
                <p className="font-normal leading-[1.25] relative shrink-0 text-[24px] w-full" data-figma-id={isVariant2 ? "node-97_2471" : "node-97_2459"}>
                  Stratégie de marque
                </p>
              </div>
              <p className="font-normal leading-[1.4] relative shrink-0 text-[16px] w-full" data-figma-id={isVariant2 ? "node-97_2472" : "node-97_2460"}>
                Avant de créer une identité ou un site, nous clarifions votre positionnement, votre vision et la perception que votre entreprise souhaite construire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}