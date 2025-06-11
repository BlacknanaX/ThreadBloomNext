"use client";

/**
 * CustomizeOptions
 * Panel for selecting product customization options.
 */
export function CustomizeOptions({
                                     options,
                                     customization,
                                     onChange,
                                 }: {
    options: {
        baseShapes: string[];
        baseColors: string[];
        laceStyles: string[];
        laceColors: string[];
        decorations: { id: number; name: string; price: number }[];
    };
    customization: {
        baseShape: string;
        baseColor: string;
        laceStyle: string;
        laceColor: string;
        decorations: { id: number; name: string; price: number }[];
    };
    onChange: (customization: any) => void;
}) {
    return (
        <div className="space-y-4">
            <div>
                <div className="font-content font-medium mb-1">Base Shape</div>
                <div className="flex gap-2 flex-wrap">
                    {options.baseShapes.map((shape) => (
                        <button
                            key={shape}
                            className={`px-3 py-1 border rounded ${customization.baseShape === shape ? "border-[#3b3530]" : "border-gray-300"}`}
                            onClick={() => onChange({ ...customization, baseShape: shape })}
                            type="button"
                        >
                            {shape}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <div className="font-content font-medium mb-1">Base Color</div>
                <div className="flex gap-2">
                    {options.baseColors.map((color) => (
                        <button
                            key={color}
                            className={`w-6 h-6 rounded-full border-2 ${customization.baseColor === color ? "border-[#3b3530]" : "border-gray-300"}`}
                            style={{ backgroundColor: color }}
                            onClick={() => onChange({ ...customization, baseColor: color })}
                            type="button"
                        />
                    ))}
                </div>
            </div>
            <div>
                <div className="font-content font-medium mb-1">Lace Style</div>
                <div className="flex gap-2 flex-wrap">
                    {options.laceStyles.map((style) => (
                        <button
                            key={style}
                            className={`px-3 py-1 border rounded ${customization.laceStyle === style ? "border-[#3b3530]" : "border-gray-300"}`}
                            onClick={() => onChange({ ...customization, laceStyle: style })}
                            type="button"
                        >
                            {style}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <div className="font-content font-medium mb-1">Lace Color</div>
                <div className="flex gap-2">
                    {options.laceColors.map((color) => (
                        <button
                            key={color}
                            className={`w-6 h-6 rounded-full border-2 ${customization.laceColor === color ? "border-[#3b3530]" : "border-gray-300"}`}
                            style={{ backgroundColor: color }}
                            onClick={() => onChange({ ...customization, laceColor: color })}
                            type="button"
                        />
                    ))}
                </div>
            </div>
            <div>
                <div className="font-content font-medium mb-1">Decorations</div>
                <div className="flex flex-col gap-2">
                    {options.decorations.map((dec) => (
                        <label key={dec.id} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={!!customization.decorations.find((d) => d.id === dec.id)}
                                onChange={(e) => {
                                    let newDecorations = customization.decorations.slice();
                                    if (e.target.checked) {
                                        newDecorations.push(dec);
                                    } else {
                                        newDecorations = newDecorations.filter((d) => d.id !== dec.id);
                                    }
                                    onChange({ ...customization, decorations: newDecorations });
                                }}
                            />
                            <span>{dec.name} (+£{dec.price})</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}