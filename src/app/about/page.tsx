"use client";

import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import Contents from "../componets/contents";
import Footer from "../componets/footer";
import Header from "../componets/header";
import { IconContext } from "react-icons";


export default function AboutPage (){
    return(
        <>
        <Header />
        <Contents>
            <div className="h-screen text-gray-500">
            <h1 className="text-4xl text-center font-bold mb-12 text-vpurple font-vfont">We Are Venom</h1>
            <div className="flex flex-col sm:flex-row mb-20">
                <div className="flex flex-1 flex-col mb-6 sm:mb-0">
                    <h2 className="text-center text-2xl text-vred font-vfont font-bold">Intro</h2>
                    <p className="text-center">We are a Minor League Football team that provides platforms for young eligible players.</p>
                </div>
                <div className="flex flex-1 flex-col">
                    <h2 className="text-center text-2xl text-vred font-vfont font-bold">Location</h2>
                    <p className="text-center">Home games will be at Rocky River High School.</p>
                    <p className="text-center">10505 Clear Creek Commerce Dr, Mint Hill, NC 28227</p>
                </div>
            </div>
            <div className="">
                <h2 className="text-center text-2xl text-vred font-vfont font-bold">Follow Venom's Social</h2>
                <div className="flex justify-between items-center">
                    
                    <IconContext.Provider value={{ size: "2rem", color: "black"}}>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h3>
                            Follow Our Facebook
                        </h3>
                        <a href="https://www.facebook.com/profile.php?id=100054646651802">
                            <FaFacebook/>
                        </a>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <h3>
                            Follow Our TikTok
                        </h3>
                        <a href="https://www.tiktok.com/@snake.pit6?fbclid=IwAR2KmjZrlGE-OHRFH5ONrgFjVY9WWerIhCetzSD_aQhwpwFJq4nYf5eBkbM">
                            <FaTiktok />
                        </a>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <h3>
                            Subscribe to Our Youtube
                        </h3>
                        <a href="https://www.youtube.com/@nccarolinavenomadministrat1363">
                            <FaYoutube/>
                        </a>
                    </div>
                    </IconContext.Provider>
                </div>
            </div>
            </div>
        </Contents>
        <Footer />
        </>
    )
}