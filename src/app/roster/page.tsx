import Contents from "../componets/contents";
import Footer from "../componets/footer";
import Header from "../componets/header";


export default function RosterPage (){
    return(
        <>
        <Header />
        <Contents>
            <div className="h-screen">
            <h1 className="text-vpurple font-vfont text-3xl mb-6">Venom's Roster</h1>
            <div className="flex justify-center mt-8 gap-4">
                <button className="h-[2.5rem] w-[7.3rem] rounded-[2.5rem] text-base flex justify-center items-center font-bold cursor-pointer duration-200 hover:opacity-80 text-white bg-vlightpurp">Full Roster</button>
                <button className="h-[2.5rem] w-[7.3rem] rounded-[2.5rem] text-base flex justify-center items-center font-bold duration-200 hover:opacity-80 text-white bg-gray-300">Depth Chart</button>
            </div>
            <div className="">
                <div className="flex text-base font-bold mt-16 text-vred items-center">
                    <div className="flex flex-[2] font-bold bg-gray-300 h-[2.2rem] pl-4 mr-[2px] rounded-l-2xl">Player</div>
                    <div className="flex flex-[2] font-bold bg-gray-300 h-[2.2rem] pl-4 mr-[2px] rounded-r-2xl">Position</div>
                </div>
                <div className="mt-4 p-4">Roster Unavailable</div>
            </div>
            </ div>
        </Contents>
        <Footer />
        </>
    )
}