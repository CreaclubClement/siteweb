const assetPathPrefix = "/assets/figma";
const imgImg14733 = `${assetPathPrefix}/3cf9d.png`;

type CardServiceExperienceDigitalMobileProps = {
  className?: string;
  property1?: "Variant2";
};

export default function CardServiceExperienceDigitalMobile({ className, property1 = "Variant2" }: CardServiceExperienceDigitalMobileProps) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[12px] items-start relative w-full"} data-node-id="127:2726">
      <div className="absolute bg-[var(--accent,#d9ff8e)] h-px left-0 top-[199px] w-full" data-node-id="127:2727" />
      <div className="content-stretch flex flex-col gap-[var(--xl,40px)] items-start justify-center relative min-w-0 w-full" data-node-id="127:2728">
        <div className="content-stretch flex flex-col gap-[var(--m,16px)] items-start justify-center relative min-w-0 w-full" data-node-id="127:2729">
          <div className="h-[200px] relative min-w-0 w-full" data-node-id="127:2757" data-name="IMG_1473 3">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg14733} />
          </div>
          <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative min-w-0 w-full" data-node-id="127:2750">
            <div className="[word-break:break-word] col-1 content-stretch flex flex-col font-sans gap-[12px] items-start ml-0 mt-0 relative row-1 text-[color:var(--noir,#252525)] text-left w-full" data-node-id="127:2751">
              <div className="content-stretch flex flex-col gap-[var(--xs,4px)] items-start relative min-w-0 w-full" data-node-id="127:2752">
                <p className="font-[450] leading-[1.4] relative shrink-0 text-[12px] w-full" data-node-id="127:2753">
                  Prolonger la marque dans le digital.
                </p>
                <p className="font-normal leading-[1.25] relative shrink-0 text-[24px] w-full" data-node-id="127:2754">
                  Expérience digitale
                </p>
              </div>
              <p className="font-normal leading-[1.4] relative shrink-0 text-[16px] w-full" data-node-id="127:2755">
                Nous concevons des expériences digitales qui traduisent votre positionnement et accompagnent vos objectifs. Chaque interface est pensée pour créer une expérience fluide, cohérente et orientée conversion.
              </p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] font-sans font-normal leading-[0] relative shrink-0 text-[14px] text-[color:var(--noir,#252525)] text-left whitespace-normal" data-node-id="127:2737">
          <p className="leading-[1.4] mb-0">
            UX/UI Design
            <br aria-hidden />
            Parcours utilisateur
            <br aria-hidden />
            Expérience client
          </p>
          <p className="leading-[1.4] mb-0">Product design</p>
          <p className="leading-[1.4] mb-0">Dev Webflow</p>
          <p className="leading-[1.4] mb-0">Dev Shopify</p>
          <p className="leading-[1.4]">Dev sur-mesure</p>
        </div>
      </div>
    </div>
  );
}