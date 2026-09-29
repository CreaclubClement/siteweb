// Source: Figma 21:2522; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgRectangle30 = `${assetPathPrefix}/e77e6.png`;

type CardServiceStrategieDeMarqueDesktopProps = {
  className?: string;
  property1?: "Hover" | "Default";
};

export default function CardServiceStrategieDeMarqueDesktop({ className, property1 = "Default" }: CardServiceStrategieDeMarqueDesktopProps) {
  const isHover = property1 === "Hover";
  return (
    <div className={className || "content-stretch flex flex-col gap-[12px] items-start relative w-full"} data-figma-id={isHover ? "node-21_2649" : "node-21_2535"}>
      <div className={`absolute bg-[var(--accent,#d9ff8e)] h-[200px] left-[444px] top-0 ${isHover ? "w-full" : "w-0"}`} data-figma-id={isHover ? "node-21_2650" : "node-21_2545"} />
      <div className="content-center flex flex-wrap gap-[173px] items-center relative shrink-0" data-figma-id={isHover ? "node-21_2651" : "node-21_2536"}>
        <div className="content-stretch flex gap-[var(--l,24px)] items-center relative shrink-0" data-figma-id={isHover ? "node-21_2652" : "node-21_2537"}>
          <div className="h-[200px] relative min-w-0 w-full" data-figma-id={isHover ? "node-21_2653" : "node-21_2538"}>
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle30} />
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-figma-id={isHover ? "node-21_2654" : "node-21_2539"}>
            <div className="[word-break:break-word] col-1 content-stretch flex flex-col font-sans gap-[12px] items-start ml-0 mt-0 relative row-1 text-[color:var(--noir,#252525)]" data-figma-id={isHover ? "node-21_2655" : "node-21_2540"}>
              <div className="content-stretch flex flex-col gap-[var(--xs,4px)] items-start relative min-w-0 w-full" data-figma-id={isHover ? "node-21_2656" : "node-21_2541"}>
                <p className="font-[450] leading-[1.4] relative shrink-0 text-[12px] w-full" data-figma-id={isHover ? "node-21_2657" : "node-21_2542"}>{`Comprendre avant d'agir.`}</p>
                <p className="font-normal leading-[1.25] relative shrink-0 text-[24px] w-full" data-figma-id={isHover ? "node-21_2658" : "node-21_2543"}>
                  Stratégie de marque
                </p>
              </div>
              <p className="font-normal leading-[1.4] relative shrink-0 text-[16px] w-full" data-figma-id={isHover ? "node-21_2659" : "node-21_2544"}>
                Avant de créer une identité ou un site, nous clarifions votre positionnement, votre vision et la perception que votre entreprise souhaite construire.
              </p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] font-sans font-normal leading-[0] relative shrink-0 text-[14px] text-[color:var(--noir,#252525)] whitespace-normal" data-figma-id={isHover ? "node-21_2660" : "node-21_2546"}>
          <p className="leading-[1.4] mb-0">Naming</p>
          <p className="leading-[1.4] mb-0">Manifeste</p>
          <p className="leading-[1.4] mb-0">Copywriting</p>
          <p className="leading-[1.4] mb-0">Plateforme de marque</p>
          <p className="leading-[1.4] mb-0">Personnalité</p>
          <p className="leading-[1.4] mb-0">{`raison d'être`}</p>
          <p className="leading-[1.4]">concept de marque</p>
        </div>
      </div>
    </div>
  );
}