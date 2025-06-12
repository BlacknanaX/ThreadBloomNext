"use client";

/**
 * ProductPreview
 * Shows a preview of the customized product.
 */
export function ProductPreview({
                                   customization,
                                   // onDecorationMove,
                                   // readonly = false,
                               }: {
    customization: {
        baseShape: string;
        baseColor: string;
        laceStyle: string;
        laceColor: string;
        decorations: { id: number; name: string; price: number }[];
    };
    onDecorationMove?: (decorations: { id: number; name: string; price: number }[]) => void;
    readonly?: boolean;
}) {
    // This is a placeholder preview. You can replace it with a real SVG or image preview.
    return (
        <div className="border rounded-lg p-6 bg-gray-50 min-h-[200px] flex flex-col items-center justify-center">
            <div className="mb-4 text-lg font-content">Product Preview</div>
            <div className="mb-2">Base Shape: {customization.baseShape || "None"}</div>
            <div className="mb-2">Base Color: <span style={{ color: customization.baseColor }}>{customization.baseColor || "None"}</span></div>
            <div className="mb-2">Lace Style: {customization.laceStyle || "None"}</div>
            <div className="mb-2">Lace Color: <span style={{ color: customization.laceColor }}>{customization.laceColor || "None"}</span></div>
            <div className="mb-2">Decorations:</div>
            <ul>
                {customization.decorations.map((dec) => (
                    <li key={dec.id} className="text-sm">
                        {dec.name} (+£{dec.price})
                    </li>
                ))}
            </ul>
            {/* You can add drag-and-drop preview logic here if needed */}
        </div>
    );
}