import React from 'react'
import { FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa'

function Footer() {
    return (
    

<footer className="bg-white dark:bg-gray-900 border border-gray-500 shadow">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <img className='h-20 w-20' src="venom-logo2updated.png" alt="venom logo" />                
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="https://flowbite.com/" className="hover:underline">News</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" className="hover:underline">Schedule</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Roster</a>
                        </li>
                        <li>
                            <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Stats</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Coaches</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">About Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">NC Venom</a>. All Rights Reserved.
        </span>
        <div className="flex gap-4  mt-4 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com/profile.php?id=100054646651802">
                <FaFacebook />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100054646651802">
                <FaTiktok />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100054646651802">
                <FaYoutube/>
            </a>
        </div>
    </div>
    </div>
</footer>

    )
}

export default Footer