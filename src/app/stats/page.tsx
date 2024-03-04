import Contents from "../componets/contents";
import Footer from "../componets/footer";
import Header from "../componets/header";


export default function StatsPage (){
    return(
        <>
        <Header />
        <Contents>
            <div className="h-screen">
            <h1 className="text-3xl text-vpurple font-vfont">Venom 2024 Statistics</h1>
            <h1 className="text-2xl text-center font-bold">Offense</h1>
            <h1 className="text-2xl">Passing</h1>
            <div className="w-full rounded-sm border bg-gray-300">
                <div className="flex bg-gray-200 font-bold pt-2 pb-2 pl-4 text-sm sm:text-base">
                    <div className="flex-1">Player</div>
                    <div className="flex-1">ATT</div>
                    <div className="flex-1">COMP</div>
                    <div className="flex-1">YDS</div>
                    <div className="flex-1">COMP%</div>
                    <div className="flex-1">TD</div>
                    <div className="flex-1">INT</div>
                </div>
                <div className="h-[1px] w-full bg-gray-500"></div>
                <div className="pl-4">
                    Player Stats Unavailable
                </div>
            </div>
            <h1 className="text-2xl">Rushing</h1>
            <div className="w-full border border-gray-500">
                <div className="flex bg-gray-200 font-bold pt-2 pb-2 pl-4 text-sm sm:text-base">
                    <div className="flex-1">Player</div>
                    <div className="flex-1">ATT</div>
                    <div className="flex-1">YDS</div>
                    <div className="flex-1">YDS/ATT</div>
                    <div className="flex-1">TD</div>
                </div>
                <div className="h-[1px] w-full bg-gray-500"></div>
                <div className="pl-4">
                    Player Stats Unavailable
                </div>
            </div>
            <h1 className="text-2xl">Receiving</h1>
            <div className="w-full border border-gray-500">
                <div className="flex bg-gray-200 font-bold pt-2 pb-2 pl-4">
                    <div className="flex-1">Player</div>
                    <div className="flex-1">REC</div>
                    <div className="flex-1">YDS</div>
                    <div className="flex-1">YDS/REC</div>
                    <div className="flex-1">TD</div>
                </div>
                <div className="h-[1px] w-full bg-gray-500"></div>
                <div className="pl-4">
                    Player Stats Unavailable
                </div>
            </div>
            <h1 className="text-center font-bold text-2xl">Defense</h1>
            <h1 className="text-2xl">Tackles</h1>
            <div className="w-full border border-gray-500">
                <div className="flex bg-gray-200 font-bold pt-2 pb-2 pl-4">
                    <div className="flex-1">Player</div>
                    <div className="flex-1">TACK</div>
                    <div className="flex-1">SCK</div>
                    <div className="flex-1">FF</div>
                    <div className="flex-1">INT</div>
                </div>
                <div className="h-[1px] w-full bg-gray-500"></div>
                <div className="pl-4">
                    Player Stats Unavailable
                </div>
            </div>
            </div>
            
        </Contents>
        <Footer />
        </>
    )
}