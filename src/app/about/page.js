import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function about() {
    return (
        <>
            <Header />
            <div className="bg-[#FFF8E5] relative" style={{ backgroundImage: `url(assets/backgroundfooter.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '400px' }}>
                <div className="flex mb-4 p-10 sm:p-40">
                    <div className="w-1/2 h-auto sm:h-12">
                        <h2 className="text-4xl sm:text-6xl font-bold">About</h2>

                        <nav className="flex mt-6 sm:mt-10" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <a href="/" className="inline-flex items-center text-xl font-bold hover:text-blue-600">
                                        <svg className="w-3 h-3 mr-2.5 sm:w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                        </svg>
                                        Home
                                    </a>
                                </li>
                                <li aria-current="page">
                                    <div className="flex items-center">
                                        <svg className="w-3 h-3 text-gray-400 mx-1 sm:w-4 h-4 md:ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <span className="ml-1 text-xl font-bold md:ml-2 dark:text-gray-400">About</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>

                    <div className="w-1/2 h-auto sm:h-12">
                        <div className="pet-grooming">

                            <div className="flex mb-4">
                                <div className="image-container">
                                    <img className="rounded-full h-52 w-52 sm:h-52 sm:w-52" src="./assets/banner-img-1.webp" alt="High Protein" style={{ marginTop: '-100px' }} />
                                    <div style={{ marginTop: '-218px', marginLeft: '2px' }}>
                                        <svg width="226" height="226" viewBox="0 0 673 673" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z" fill="#fb5e3c"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div>
                                    <img src="./assets/hero-shaps-1.png" style={{ marginTop: '-160px', marginLeft: '130px' }} />
                                    <div className="image-container" style={{ marginLeft: '-80px' }}>
                                        <img className="rounded-full" src="./assets/banner-img-2.webp" alt="High Protein" style={{ marginTop: '-50px' }} />
                                        <div style={{ marginTop: '-313px', marginLeft: '2px' }}>
                                            <svg width="326" height="326" viewBox="0 0 673 673" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z" fill="#fb5e3c"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row mb-4 p-12 sm:p-36 bg-white text-black">
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl sm:text-7xl">Welcome to The Brufit Company</h2>
                    <p className="text-2xl md:text-xl mt-10 md:mt-16 ">Join us on a delicious journey as we delve deep into the mesmerizing world of peanuts. Discover the rich history, mouthwatering recipes, and health benefits that make peanuts a true global delight.</p>
                    <div className="flex  mt-10">
                        <img src="./assets/list.png" className="h-7 w-7" />
                        <p className=" ms-5 text-xl text-gray-600 font-bold">Unique gourmet blends that tantalize your taste buds</p>
                    </div>

                    <div className="flex  mt-10">
                        <img src="./assets/list.png" className="h-7 w-7" />
                        <p className=" ms-5 text-xl text-gray-600 font-bold">Packed with protein, healthy fats, vitamins, and minerals</p>
                    </div>
                    <div className="flex  mt-10">
                        <img src="./assets/list.png" className="h-7 w-7" />
                        <p className="mt-1 ms-5 text-xl text-gray-600 font-bold">A lot of different yummy foods made with peanut butter</p>
                    </div>
                    <div className="flex  mt-10">
                        <img src="./assets/list.png" className="h-7 w-7" />
                        <p className="mt-1 ms-5 text-xl text-gray-600 font-bold">Tips & tricks for blending peanut butter into daily meals</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="dog-walker two d-block">
                        <img src="./assets/welcome.webp" className="w-full" alt="Brufit Peanut Butter" />
                    </div>
                </div>
            </div>
            <div className="p-8 sm:p-20">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full sm:w-1/2 md:w-1/4 p-4 relative">
                        <div className="group overflow-hidden">
                            <img src="./assets/apeda-approved.webp" alt="APEDA Approved" className="mx-auto transform origin-center transition-transform duration-300 group-hover:rotate-180" />
                        </div>
                        <p className="text-lg sm:text-2xl text-center font-bold hover:text-orange-500 mt-2 sm:mt-3">APEDA Approved</p>
                    </div>


                    <div className="w-full sm:w-1/2 md:w-1/4 p-4 relative">
                        <div className="group overflow-hidden">
                            <img src="./assets/freshly-made.webp" alt="Freshly Made" className="mx-auto transform origin-center transition-transform duration-300 group-hover:rotate-180" />
                        </div>
                        <p className="text-lg sm:text-2xl text-center font-bold hover:text-orange-500 mt-2 sm:mt-3">Freshly Made</p>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/4 p-4 relative">
                        <div className="group overflow-hidden">
                            <img src="./assets/quality-peanuts.webp" alt="Quality Peanuts" className="mx-auto transform origin-center transition-transform duration-300 group-hover:rotate-180" />
                        </div>
                        <p className="text-lg sm:text-2xl text-center font-bold hover:text-orange-500 mt-2 sm:mt-3">Quality Peanuts</p>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/4 p-4 relative">
                        <div className="group overflow-hidden">
                            <img src="./assets/pure-veg.webp" alt="100% Veg" className="mx-auto transform origin-center transition-transform duration-300 group-hover:rotate-180" />
                        </div>
                        <p className="text-lg sm:text-2xl text-center font-bold hover:text-orange-500 mt-2 sm:mt-3">100% Veg</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
