import Link from "next/link";

interface LgPromoProps {
    backgroundImage: string;
    title: string;
    linkText: string;
    linkHref: string;
    className?: string;
}

export function MdPromo(){
    return (
        <></>
    );
}

export function LgPromo({
    backgroundImage, 
    title, 
    linkText, 
    linkHref,
    className = "" ,
}: LgPromoProps) {
    return (
        <div 
            className={`relative h-[400px] md:h-[500px] rounded-lg overflow-hidden ${className}`}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* 渐变遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            
            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-8 md:px-12">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    {title}
                </h1>
                <Link 
                    href={linkHref}
                    className="inline-flex items-center justify-center w-fit px-8 py-4 text-lg bg-white font-content font-medium rounded-md hover:bg-white/90 transition-colors"
                >
                    {linkText}
                </Link>
            </div>
        </div>
    );
}