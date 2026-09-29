// Source: Figma 114:2948; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgFrame418 = `${assetPathPrefix}/f60c9.png`;

type Frame442Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Frame442({ className, property1 = "Default" }: Frame442Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "content-stretch flex flex-col gap-[16px] h-auto items-start justify-center relative w-full"} data-figma-id={isVariant2 ? "node-114_2965" : "node-114_2949"}>
      <div className={`flex-[1_0_0] min-h-px overflow-clip relative w-full ${isVariant2 ? "content-stretch flex flex-col items-end justify-end p-[12px]" : ""}`} data-figma-id={isVariant2 ? "node-114_2966" : "node-114_2950"}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[180.75%] left-0 max-w-none top-[-58.49%] w-full" src={imgFrame418} />
        </div>
        <div className={`content-stretch flex gap-[12px] items-center ${isVariant2 ? "relative shrink-0" : "absolute left-[75px] top-[481px]"}`} data-figma-id={isVariant2 ? "node-114_2967" : "node-114_2951"}>
          <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-figma-id={isVariant2 ? "node-114_2968" : "node-114_2952"}>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center whitespace-normal" data-figma-id={isVariant2 ? "node-114_2969" : "node-114_2953"}>
              Identité visuelle
            </p>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-figma-id={isVariant2 ? "node-114_2970" : "node-114_2954"}>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center whitespace-normal" data-figma-id={isVariant2 ? "node-114_2971" : "node-114_2955"}>
              Stratégie de marque
            </p>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-figma-id={isVariant2 ? "node-114_2972" : "node-114_2956"}>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center whitespace-normal" data-figma-id={isVariant2 ? "node-114_2973" : "node-114_2957"}>
              Expérience digitale
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-114_2974" : "node-114_2958"}>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-figma-id={isVariant2 ? "node-114_2975" : "node-114_2959"}>
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#252525] text-[16px] text-center whitespace-normal" data-figma-id={isVariant2 ? "node-114_2976" : "node-114_2960"}>
            Lucas Drifter
          </p>
          <div className={`content-stretch flex items-center justify-center p-[4px] relative shrink-0 ${isVariant2 ? "bg-[#d9ff8e]" : "bg-[#f1f1f1]"}`} data-figma-id={isVariant2 ? "node-114_2977" : "node-114_2961"}>
            <p className="[word-break:break-word] font-sans font-[450] leading-[normal] relative shrink-0 text-[#252525] text-[14px] text-center tracking-[-0.28px] whitespace-normal" data-figma-id={isVariant2 ? "node-114_2978" : "node-114_2962"}>
              REBRANDING
            </p>
          </div>
        </div>
        <div className="content-stretch flex items-start relative min-w-0 w-full" data-figma-id={isVariant2 ? "node-114_2979" : "node-114_2963"}>
          <p className="[word-break:break-word] font-sans font-light leading-[normal] relative shrink-0 text-[#5e5e5e] text-[16px] w-full" data-figma-id={isVariant2 ? "node-114_2980" : "node-114_2964"}>{`Créer une identité sobre et durable, à l'image d'un savoir-faire artisanal.`}</p>
        </div>
      </div>
    </div>
  );
}