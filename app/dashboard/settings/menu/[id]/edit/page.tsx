export async function Page({params}:{
    params: Promise<{id:string}>
}){
    const {id} = await params;
    return <></>;
}