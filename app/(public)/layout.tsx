import {Banner, Header} from "@/components/header";
import {Footer} from "@/components/footer";

export const experimental_ppr = true;

export default function Layout({children}:{children: React.ReactNode}){
    return (
        <div className="bg-[#f9f5f2]">
        {/*// <div className="flex h-screen flex-row md:flex-row md:overflow-hidden">*/}
            {/*<div className="w-full flex-none md:w-64">*/}
                <Banner/>
                <Header/>
            {/*</div>*/}
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
            <Footer/>
        {/*// </div>*/}
        </div>

    );
}