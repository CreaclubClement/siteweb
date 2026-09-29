type ListingServiceMobileProps = {
  className?: string;
  property1?: "Variant2";
};

export default function ListingServiceMobile({ className, property1 = "Variant2" }: ListingServiceMobileProps) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[12px] items-start relative w-full"} data-node-id="127:2807">
      <div className="absolute bg-[var(--accent,#d9ff8e)] h-px left-0 top-[199px] w-full" data-node-id="127:2808" />
      <div className="content-stretch flex flex-col gap-[var(--xl,40px)] items-start justify-center relative min-w-0 w-full" data-node-id="127:2809">
        <div className="content-stretch flex flex-col gap-[var(--m,16px)] items-start justify-center relative min-w-0 w-full" data-node-id="127:2810">
          <div className="h-[200px] relative min-w-0 w-full" data-node-id="127:2833" data-name="IMG_1473 4" />
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="127:2837">
            <div className="[word-break:break-word] col-1 content-stretch flex flex-col font-sans gap-[12px] items-start ml-0 mt-0 relative row-1 text-[color:var(--noir,#252525)] text-left" data-node-id="127:2838">
              <div className="content-stretch flex flex-col gap-[var(--xs,4px)] items-start relative min-w-0 w-full" data-node-id="127:2839">
                <p className="font-[450] leading-[1.4] relative shrink-0 text-[12px] w-full" data-node-id="127:2840">{`Comprendre avant d'agir.`}</p>
                <p className="font-normal leading-[1.25] relative shrink-0 text-[24px] w-full" data-node-id="127:2841">
                  Identité visuelle
                </p>
              </div>
              <p className="font-normal leading-[1.4] relative shrink-0 text-[16px] w-full" data-node-id="127:2842">{`Nous transformons votre stratégie en un système graphique cohérent, durable et identifiable. Une identité pensée pour accompagner la croissance de votre entreprise sur l'ensemble de ses points de contact.`}</p>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] font-sans font-normal leading-[0] relative shrink-0 text-[14px] text-[color:var(--noir,#252525)] text-left whitespace-normal" data-node-id="127:2818">
          <p className="leading-[1.4] mb-0">
            Big idea
            <br aria-hidden />
            Univers graphique
            <br aria-hidden />
            {`Logo & déclinaison`}
          </p>
          <p className="leading-[1.4] mb-0">Palette Typographique</p>
          <p className="leading-[1.4] mb-0">Palette de couleurs</p>
          <p className="leading-[1.4] mb-0">Photographies</p>
          <p className="leading-[1.4]">Direction visuelle</p>
        </div>
      </div>
    </div>
  );
}