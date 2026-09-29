// Source: Figma 21:1611; fluid layout adaptation.
const assetPathPrefix = "/assets/figma";
const imgUuidC594854B938E41CdA6552Ad5Ea221458 = `${assetPathPrefix}/e2205.svg`;
const imgUuidC594854B938E41CdA6552Ad5Ea221459 = `${assetPathPrefix}/59da7.svg`;

type LogoAnimationHeaderProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function LogoAnimationHeader({ className, property1 = "Default" }: LogoAnimationHeaderProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || "h-[21.093px] relative max-w-full w-[110px]"} data-figma-id={isVariant2 ? "node-21_1618" : "node-21_1612"}>
      <div className={`absolute contents ${isVariant2 ? "inset-[-0.06%_80.81%_-0.06%_-0.01%]" : "inset-[0_80.82%_0_0]"}`} data-figma-id={isVariant2 ? "node-21_1619" : "node-21_1613"} style={isVariant2 ? { containerType: "size" } : undefined}>
        <div className={`absolute contents ${isVariant2 ? "inset-[-0.06%_80.81%_-0.06%_-0.01%]" : "inset-[0_80.82%_0_0]"}`} data-figma-id={isVariant2 ? "node-21_1620" : "node-21_1614"} style={isVariant2 ? { containerType: "size" } : undefined}>
          {property1 === "Default" && (
            <div className="absolute inset-[0_80.82%_0_0]" data-node-id="21:1615" data-name="uuid-c594854b-938e-41cd-a655-2ad5ea221458">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUuidC594854B938E41CdA6552Ad5Ea221458} />
            </div>
          )}
          {isVariant2 && (
            <div className="absolute flex inset-[-0.06%_80.81%_-0.06%_-0.01%] items-center justify-center" data-node-id="21:1621" style={{ containerType: "size" }}>
              <div className="flex-none h-[hypot(0.118121cqw,-99.8819cqh)] rotate-[-179.93deg] w-[hypot(-99.8819cqw,-0.118121cqh)]">
                <div className="relative size-full" data-name="uuid-c594854b-938e-41cd-a655-2ad5ea221458">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUuidC594854B938E41CdA6552Ad5Ea221459} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Season_VF-TRIAL:Sans_Medium'] inset-[10%_-0.48%_4.66%_26.85%] leading-[17.578px] not-italic text-[17.578px] text-[color:var(--noir,#252525)] tracking-[-0.3516px] whitespace-normal" data-figma-id={isVariant2 ? "node-21_1623" : "node-21_1617"}>
        Étape Zero
      </p>
    </div>
  );
}