// Source: Figma 21:1566; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgUuidC594854B938E41CdA6552Ad5Ea221458 = `${assetPathPrefix}/bb5ef.svg`;

type LogoAnimationHeaderProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function LogoAnimationHeader({ className, property1 = "Default" }: LogoAnimationHeaderProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "h-[26.475px] relative max-w-full w-[138.065px]"} data-figma-id={isVariant2 ? "node-21_1567" : "node-21_1565"}>
      <div className={`absolute contents ${isVariant2 ? "inset-[-0.06%_80.81%_-0.06%_-0.01%]" : "inset-[0_80.82%_0_0]"}`} data-figma-id={isVariant2 ? "node-21_1568" : "node-21_1560"} style={isVariant2 ? { containerType: "size" } : undefined}>
        <div className={`absolute contents ${isVariant2 ? "inset-[-0.06%_80.81%_-0.06%_-0.01%]" : "inset-[0_80.82%_0_0]"}`} data-figma-id={isVariant2 ? "node-21_1569" : "node-21_1561"} style={isVariant2 ? { containerType: "size" } : undefined}>
          {property1 === "Default" && (
            <div className="absolute inset-[0_80.82%_0_0]" data-node-id="21:1562" data-name="uuid-c594854b-938e-41cd-a655-2ad5ea221458">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUuidC594854B938E41CdA6552Ad5Ea221458} />
            </div>
          )}
          {isVariant2 && (
            <div className="absolute flex inset-[-0.06%_80.81%_-0.06%_-0.01%] items-center justify-center" data-node-id="21:1570" style={{ containerType: "size" }}>
              <div className="flex-none h-[hypot(0.118121cqw,-99.8819cqh)] rotate-[-179.93deg] w-[hypot(-99.8819cqw,-0.118121cqh)]">
                <div className="relative size-full" data-name="uuid-c594854b-938e-41cd-a655-2ad5ea221458">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUuidC594854B938E41CdA6552Ad5Ea221458} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Season_VF-TRIAL:Sans_Medium'] inset-[10%_0_3.12%_26.85%] leading-[22.062px] not-italic text-[22.062px] text-[color:var(--noir,#252525)] tracking-[-0.4412px] whitespace-normal" data-figma-id={isVariant2 ? "node-21_1572" : "node-21_1564"}>
        Étape Zero
      </p>
    </div>
  );
}