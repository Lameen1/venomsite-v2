"use client";

import { IoIosMail } from "react-icons/io";
import Contents from "../componets/contents";
import Footer from "../componets/footer";
import Header from "../componets/header";
import { GrGroup } from "react-icons/gr";


export default function ContentPage (){
    return(
        <>
        <Header />
        <Contents>
            <div className="h-screen text-gray-500">
                <h1 className="text-center text-4xl font-bold mb-12 text-vpurple font-vfont">Reach Out to Us</h1>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-vred font-vfont">Email NC Venom</h2>
                    <div className="flex gap-2 items-center">
                        <IoIosMail />
                        <p>carolinavenomsemiprofootball@gmail.com</p>
                    </div>
                    <p>Email Venom for any business oppurtunities or question</p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-vred font-vfont">Join Facebook Group</h2>
                    <div className="flex gap-2 items-center">
                        <GrGroup />
                        <a className="hover:underline" href="https://www.facebook.com/groups/344462162924643/?ref=share_group_link">https://www.facebook.com/groups/344462162924643/?ref=share_group_link</a>
                    </div>
                    <p>To stay in touch with everything Venom join our facebook group</p>
                </div>
            </div>
        </Contents>
        <Footer />
        </>
    )
}