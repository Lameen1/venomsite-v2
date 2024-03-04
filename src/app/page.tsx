import Header from "./componets/header";
import "./page.css"
import Footer from "./componets/footer"
import Contents from "./componets/contents"



export default function HomePage (){

  return(
    <main>
      <div className='w-full h-56 overflow-hidden flex relative'>
        <div className="flex flex-1 bg-blend-darken bg-black">
          <img src="cover-photo.jpg" className="w-full opacity-60 object-none object-[40%_27%]" />
          <img className="hidden" src="cover-3.jpg" alt="" />
        </div>
        <div className="flex flex-1 bg-blend-darken bg-black">
          <img src="huddle-pic.jpg" className="w-full opacity-60 object-none object-[50%_55%]" />
          <img className="hidden" src="cover-4.jpg" alt="" />
        </div>
      </div>
      <Header />
      <Contents>
      <div className='flex flex-col justify-center'>
        <h1 className='text-center text-2xl sm:text-4xl font-bold'> Welcome to the Official Website of the Website of the Carolina Venom</h1>
          <div className='flex justify-center'>
            <img className='sm:h-40 sm:w-40 h-20 w-20' src="venom-logo2updated.png" alt="" />
            <img className='sm:h-40 sm:w-64 h-20 w-32' src="NC-pic.jpg" alt="" />
            <img className='sm:h-40 sm:w-40 h-20 w-20' src="coastal-fa.jpg" alt="" />
          </div>
          <h2 className='text-center text-xl font-bold'>More Content And Features COMING SOON !!!</h2>
            </div>
        <div className='flex flex-col items-center '>
          <img className='h-[25rem] w-[25rem] mb-12 mt-8' src="coach-la.jpg" alt="coach la" />
          <div className='bg-gray-300 w-1/2 h-0.5'></div>
          <h1 className="text-2xl font-bold mt-6">In Loving Memory Of</h1>
          <h2 className="text-xl text-vred font-bold mt-6">Coach La</h2>
          <h3 className="text-xl text-vpurple font-bold mt-6">#LongLiveCoachLa</h3>
        </div>
      </Contents>
      <Footer />
    </main>
  )
}