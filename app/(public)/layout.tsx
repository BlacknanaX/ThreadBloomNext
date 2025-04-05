import {Banner, Header} from "@/components/header";
import {Footer} from "@/components/footer";
import "@/styles/color.css"

export const experimental_ppr = true;

export default function Layout({children}:{children: React.ReactNode}){
    return (
        <div className="content-bg">
        {/*// <div className="flex h-screen flex-row md:flex-row md:overflow-hidden">*/}
            {/*<div className="w-full flex-none md:w-64">*/}
                <Banner/>
                <Header/>
            {/*</div>*/}
            <div className="flex-grow md:overflow-y-auto">{children}</div>
            {/*<div>{children}</div>*/}
            <Footer/>
        {/*// </div>*/}
        </div>

    );
}