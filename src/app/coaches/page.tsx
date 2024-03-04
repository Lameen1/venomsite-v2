import Contents from "../componets/contents";
import Footer from "../componets/footer";
import Header from "../componets/header";


export default function CoachesPage (){
    return(
        <>
        <Header />
        <Contents>
            <div className="h-screen">
            <h1 className="text-3xl text-vpurple font-bold text-center">Venom's Coaches and Staff</h1>
            <div className="">
                <div className="flex text-base font-bold mt-16">
                    <div className="flex items-center flex-[2] font-bold bg-gray-300 h-[2.2rem] pl-4 mr-[2px] rounded-l-2xl">Team Member</div>
                    <div className="flex items-center flex-[2] font-bold bg-gray-300 h-[2.2rem] pl-4 mr-[2px] rounded-r-2xl">Role</div>
                </div>
                <div className="mt-4 p-4">Currently Unavailable</div>
            </div>
            </ div>
        </Contents>
        <Footer />
        </>
    )
}