import Contents from "../componets/contents";
import Footer from "../componets/footer";
import Header from "../componets/header";


export default function SchedulePage (){
    return(
        <>
        <Header />
        <Contents>
            <div className="h-screen">
                <h1 className="text-vpurple font-vfont text-3xl mb-6">Venom Schedule 2024</h1>
                <div className="flex flex-col sm:flex-row items-center bg-gray-300">
                    <div className="flex flex-col sm:flex-row items-center flex-1 gap-2">
                        <div className="flex gap-2 items-center flex-col sm:flex-row">
                            <img className="h-40 w-40" src="venom-logo2updated.png" alt="" />
                            <div className="text-vpurple font-vfont text-2xl">0</div>
                        </div>
                        <div className="flex text-white bg-black font-bold rounded-[100%] justify-center items-center ml-6 mr-6 h-8 w-8 ">vs.</div>
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <div>North Carolina Gators</div>
                            <div className="text-vred font-vfont text-2xl">14</div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 items-center">
                        <div className="font-bold mb-4">Date: March 2nd</div>
                        <div className="">Location: Rocky River High School</div>
                    </div>
                </div>
                
            </div>
        </Contents>
        <Footer />
        </>
    )
}