import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function blog() {
    return (
        <>
            <Header />
            <div className="bg-[#FFF8E5] relative" style={{ backgroundImage: `url(assets/backgroundfooter.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '400px' }}>
                <div className="flex mb-4 p-10 sm:p-40">
                    <div className="w-1/2 h-auto sm:h-12">
                        <h2 className="text-4xl sm:text-6xl font-bold">about</h2>

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
                                        <span className="ml-1 text-xl font-bold md:ml-2 dark:text-gray-400">Recipes & Blogs</span>
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
            {/* 
            <div className="flex flex-col sm:flex-row sm:mb-4 sm:mt-5 p-8 sm:p-32">
                
                <div className="mb-8 sm:w-1/3 sm:mr-5">
                    <div className="bg-white border border-gray-200 relative w-auto overflow-hidden bg-cover bg-no-repeat">
                        <img className="w-full transition duration-300 ease-in-out hover:scale-110" src="./assets/the-benefits-of-peanut-butter-for-heart-health.webp" alt="Article 1" />
                    </div>
                    <p className="text-lg sm:text-2xl text-start mt-4 sm:mt-6 font-bold hover:text-orange-500">The Benefits of Peanut Butter for Heart Health</p>
                </div>
                
                <div className="mb-8 sm:w-1/3 sm:mr-5">
                    <div className="bg-white border border-gray-200 relative w-auto overflow-hidden bg-cover bg-no-repeat">
                        <img className="w-full transition duration-300 ease-in-out hover:scale-110" src="./assets/peanut-butter-and-diabetes-how-to-incorporate-it-into-your-diet-safely.webp" alt="Article 2" />
                    </div>
                    <p className="text-lg sm:text-2xl text-start mt-4 sm:mt-6 font-bold hover:text-orange-500">Peanut Butter and Diabetes: How to Incorporate It into Your Diet Safely</p>
                </div>
                
                <div className="mb-8 sm:w-1/3 sm:mr-5">
                    <div className="bg-white border border-gray-200 relative w-auto overflow-hidden bg-cover bg-no-repeat">
                        <img className="w-full transition duration-300 ease-in-out hover:scale-110" src="./assets/peanut-butter-for-Weight-management-how-it-can-help-you-lose-or-gain-weight.webp" alt="Article 3" />
                    </div>
                    <p className="text-lg sm:text-2xl text-start mt-4 sm:mt-6 font-bold hover:text-orange-500">Peanut Butter for Weight Management: How It Can Help You Lose or Gain Weight</p>
                </div>

                <div className="mb-8 sm:w-1/3 sm:mr-5">
                    <div className="bg-white border border-gray-200 relative w-auto overflow-hidden bg-cover bg-no-repeat">
                        <img className="w-full transition duration-300 ease-in-out hover:scale-110" src="./assets/peanut-butter-for-Weight-management-how-it-can-help-you-lose-or-gain-weight.webp" alt="Article 3" />
                    </div>
                    <p className="text-lg sm:text-2xl text-start mt-4 sm:mt-6 font-bold hover:text-orange-500">Peanut Butter for Weight Management: How It Can Help You Lose or Gain Weight</p>
                </div>

            </div> */}

            <div className="sm:mb-4 sm:mt-5 p-8 sm:p-32">

                <div className="flex flex-col sm:flex-row ">
                    <div className="mb-8 sm:w-1/3 sm:mr-5">
                        <div className="bg-white border border-gray-200 relative w-auto overflow-hidden bg-cover bg-no-repeat">
                            <img className="w-full transition duration-300 ease-in-out hover:scale-110" src="./assets/the-benefits-of-peanut-butter-for-heart-health.webp" alt="Article 1" />
                        </div>
                        <p className="text-lg sm:text-2xl text-start mt-4 sm:mt-6 font-bold hover:text-orange-500">The Benefits of Peanut Butter for Heart Health</p>
                    </div>


                    <div className="mb-8 sm:w-1/3 sm:mr-5">
                        <div className="bg-white border border-gray-200 relative w-auto overflow-hidden bg-cover bg-no-repeat">
                            <img className="w-full transition duration-300 ease-in-out hover:scale-110" src="./assets/peanut-butter-and-diabetes-how-to-incorporate-it-into-your-diet-safely.webp" alt="Article 2" />
                        </div>
                        <p className="text-lg sm:text-2xl text-start mt-4 sm:mt-6 font-bold hover:text-orange-500">Peanut Butter and Diabetes: How to Incorporate It into Your Diet Safely</p>
                    </div>


                    <div className="sm:w-1/3">
                        <div className="bg-white border border-gray-200 relative w-auto overflow-hidden bg-cover bg-no-repeat">
                            <img className="w-full transition duration-300 ease-in-out hover:scale-110" src="./assets/peanut-butter-for-Weight-management-how-it-can-help-you-lose-or-gain-weight.webp" alt="Article 3" />
                        </div>
                        <p className="text-lg sm:text-2xl text-start mt-4 sm:mt-6 font-bold hover:text-orange-500">Peanut Butter for Weight Management: How It Can Help You Lose or Gain Weight</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row ">
                    <div className="mb-8 sm:w-1/3 sm:mr-5">
                        <div className="bg-white border border-gray-200 relative w-[97%] overflow-hidden bg-cover bg-no-repeat">
                            <img className="w-[100%] transition duration-300 ease-in-out hover:scale-110" src="./assets/peanut-butter-and-nutrition-understanding-the-vital-nutrients-it-provides.webp" alt="Article 1" />
                        </div>
                        <p className="text-lg sm:text-2xl text-start mt-4 sm:mt-6 font-bold hover:text-orange-500">The Benefits of Peanut Butter for Heart Health</p>
                    </div>


                    <div className="mb-8 sm:w-1/3 sm:mr-5">
                        <div className="bg-white border border-gray-200 relative w-[95%] overflow-hidden bg-cover bg-no-repeat">
                            <img className="w-[100%] transition duration-300 ease-in-out hover:scale-110" src="./assets/difference-between-peanut-butter-and-jam.webp" alt="Article 2" />
                        </div>
                        <p className="text-lg sm:text-2xl text-start mt-4 sm:mt-6 font-bold hover:text-orange-500">Peanut Butter and Diabetes: How to Incorporate It into Your Diet Safely</p>
                    </div>


                </div>
            </div>




            <Footer />
        </>
    )
}
