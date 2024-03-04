import Header from "../componets/header";
import "../news/newspage.css"
import Contents from "../componets/contents"
import Footer from "../componets/footer";


export default function NewsPage (){
    return(
        <>
        <Header />
        <Contents>
        <div className="flex flex-col sm:flex-row">
            <div className="flex flex-1 flex-col">
                <div className="bg-gray-100 flex-2 rounded-2xl ">
                    <h1 className="text-lg ml-4 pt-4 text-vred font-bold">HEADLINES</h1>
                    <div className="bg-[rgb(250,169,169)] h-[1px] w-full"></div>
                    <ul className="list-none p-6">
                        <li className="mb-4 font-bold text-[1.2rem]">2024 Season Opener March 2nd!!</li>
                        <li className="mb-4 font-bold text-[1.2rem]">Recognizing our Team Captains</li>
                        <li className="mb-4 font-bold text-[1.2rem]">Join the Facebook Family</li>
                        <li className="mb-4 font-bold text-[1.2rem]">New Website Features Coming Soon!!</li>
                    </ul>
                </div>
                <h1 className="font-bold text-vred ">2024 Season Loading...</h1>
                <div className="flex-1">
                    <img className="h-full w-full object-contain" src="news-page-pic1.jpg" alt="" />
                </div>
                <div className="flex-1">
                    <img className="h-full w-full object-contain" src="news-page-pic2.jpg" alt="" />
                </div>
                <div className="flex-1 mb-4">
                    <img className="h-full w-full object-contain" src="news-page-pic3.jpg" alt="" />
                </div>
            </div>
            <div className="flex flex-[3] ml-4 text-gray-500">
                <div className="w-fulls">
                    <div className="flex-1">
                    <div className="flex flex-col">
                        <div className="flex flex-col sm:flex-row flex-1">
                            <div className="flex-1 mb-2">
                                <img className="h-[15rem] w-[22rem]" src="3-2-2024-gameposter.jpg" alt="" />
                            </div>
                            <div className="flex flex-1 flex-col items-center gap-4">
                                <h1 className="text-vpurple text-2xl font-vfont text-center">Spring Season Opener</h1>
                                <p className="text-center text-gray-500">Season kicks off with a Venom home game at Rocky River High School</p>
                                <p className="text-center text-gray-500">Concessions are available at the game</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-400 h-[1px] w-full mb-4 flex justify-center items-center m-4"></div>

                    <div className="flex flex-col sm:flex-row">
                            <div className="flex flex-row sm:flex-col flex-1 mb-4">
                                <img className="sm:h-56 sm:w-56 w-1/2" src="yott-news1.jpg" alt="" />
                                <img className="sm:h-56 sm:w-56 w-1/2" src="yott-news2.jpg" alt="" />
                            </div>
                            <div className="flex flex-col flex-1 gap-8 ml-12 items-center text-3xl font-vfont">
                                <h1 className="text-vpurple">Je'christopher</h1>
                                <h1 className="text-vred">"Yott"</h1>
                                <h1 className="text-vpurple">Bowler</h1>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <p className="">Je’christopher Bowler better know as “Yott”</p>
                            <p>NC Venom Football Captain/RB</p>
                            <p>*2x IAFL Allstar </p>
                            <p>*Division Champion</p>
                            <p>*3x lead Rusher </p>
                            <p></p>
                            <a className="h-8 w-8" href="https://www.facebook.com/jechristopherbowler/posts/pfbid02v3kGpW8CbxWsiZiYikJRfCFiYyx2xX8aaUxnQuRDQXb7QjiDnPkUsGEsonN2kPUkl"><img className=" transition-opacity hover:opacity-60" src="red-facebook.png" alt=""/></a>
                            <div className="bg-gray-400 h-[1px] w-full mb-4 flex justify-center items-center m-4"></div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row mb-4">
                        <div className="h-[15rem] w-[20] mb-2">
                            <img className="h-full w-full" src="tryout-pic.jpg" alt="" />
                        </div>
                        <div className="ml-4">
                            <h1 className="text-vpurple text-3xl font-vfont font-bold mb-4 text-center sm:text-left">Venom Football Tryouts</h1>
                            <div className="flex flex-col gap-4">
                                <p> Are you interested to join the team?</p>
                                <p>Stay connected with NC Venom</p>
                                <p>Join our Facebook Tryout Group for more info on joining the Troops</p>
                                <a className="h-8 w-8 flex justify-center" href="https://www.facebook.com/groups/344462162924643/permalink/1050577918979727/"><img className="transition-opacity hover:opacity-60" src="red-facebook.png" alt="" /></a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </Contents>
        <Footer />
        </>
    )
}