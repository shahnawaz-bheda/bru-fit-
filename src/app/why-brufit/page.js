import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function whybrufit() {
    return (
        <>
            <Header />
            <div className="bg-[#FFF8E5] relative" style={{ backgroundImage: `url(assets/backgroundfooter.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '400px' }}>
                <div className="flex mb-4 p-10 sm:p-40">
                    <div className="w-1/2 h-auto sm:h-12">
                        <h2 className="text-4xl sm:text-6xl font-bold">Peanut Butter:<br/> Brufit's Process</h2>

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
                                        <span className="ml-1 text-xl font-bold md:ml-2 dark:text-gray-400"> Why Brufit?</span>
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

            <div className="p-10 sm:p-32 text-center">
                <h2 className="text-5xl font-bold ">How It's Made</h2>
                <p className="mt-3 text-xl">Explore the Mesmerizing Process Behind Crafting Our Delectable Peanut Butter Range</p>

                <div className="flex flex-col sm:flex-row mb-4 mt-16">
                    <div className="w-full sm:w-1/2">
                        <p className="text-start text-4xl font-bold mt-20">Peanut Selection</p>
                        <p className="text-start mt-5 text-2xl">We start with hand-picking the finest peanuts, assuring only the best make it into our peanut butter.</p>
                    </div>
                    <div className="w-full sm:w-1/2 how-img">
                        <img src="./assets/peanut-selection.webp" alt="Peanut Selection" />
                    </div>

                </div>


                <div className="flex flex-col sm:flex-row mb-4 mt-16">
                    <div className="w-full sm:w-1/2 how-img">
                        <img src="./assets/roasting-perfection.webp" alt="Roasting Perfection" />
                    </div>
                    <div className="w-full sm:w-1/2">
                        <p className="text-start text-4xl font-bold mt-20">Roasting Perfection</p>
                        <p className="text-start mt-5 text-2xl">Our peanuts are roasted to perfection, bringing out their rich, nutty taste and aroma.</p>
                    </div>
                </div>


                <div className="flex flex-col sm:flex-row mb-4 mt-16">
                    <div className="w-full sm:w-1/2">
                        <p className="text-start text-4xl font-bold mt-20">Grinding Expertise</p>
                        <p className="text-start mt-5 text-2xl">Using state-of-the-art equipment, we expertly grind the roasted peanuts to achieve a smooth & creamy texture.</p>
                    </div>
                    <div className="w-full sm:w-1/2 how-img">
                        <img src="./assets/grinding-expertise.webp" alt="Grinding Expertise" />
                    </div>

                </div>


                <div className="flex flex-col sm:flex-row mb-4 mt-16">
                    <div className="w-full sm:w-1/2 how-img">
                        <img src="./assets/flavor-infusion.webp" alt="Flavor Infusion" />
                    </div>
                    <div className="w-full sm:w-1/2">
                        <p className="text-start text-4xl font-bold mt-20">Flavor Infusion</p>
                        <p className="text-start mt-5 text-2xl">We handily infuse flavors like chocolate into our peanut butter for unique varieties.</p>
                    </div>
                </div>


                <div className="flex flex-col sm:flex-row mb-4 mt-16">
                    <div className="w-full sm:w-1/2">
                        <p className="text-start text-4xl font-bold mt-20">Quality Assurance</p>
                        <p className="text-start mt-5 text-2xl">Rigid quality checks at every stage ensure our peanut butter meets the highest standards.</p>
                    </div>
                    <div className="w-full sm:w-1/2 how-img">
                        <img src="./assets/quality-assurance.webp" alt="Quality Assurance" />
                    </div>

                </div>


                <div className="flex flex-col sm:flex-row mb-4 mt-16">
                    <div className="w-full sm:w-1/2 how-img">
                        <img src="./assets/packaging-precision.webp" alt="Packaging Precision" />
                    </div>
                    <div className="w-full sm:w-1/2">
                        <p className="text-start text-4xl font-bold mt-20">Packaging Precision</p>
                        <p className="text-start mt-5 text-2xl">Our peanut butter is packaged to maintain its freshness, ready to delight your taste buds.</p>
                    </div>
                </div>


                <div className="flex flex-col sm:flex-row mb-4 mt-16">
                    <div className="w-full sm:w-1/2">
                        <p className="text-start text-4xl font-bold mt-20">Sustainable Commitment</p>
                        <p className="text-start mt-5 text-2xl">We're dedicated to sustainability, from sourcing to production, minimizing our environmental footprint.</p>
                    </div>
                    <div className="w-full sm:w-1/2 how-img">
                        <img src="./assets/sustainable-commitment.webp" alt="Sustainable Commitment" />
                    </div>

                </div>


                <div className="flex flex-col sm:flex-row mb-4 mt-16">
                    <div className="w-full sm:w-1/2 how-img">
                        <img src="./assets/customer-delight.webp" alt="Customer Delight" />
                    </div>
                    <div className="w-full sm:w-1/2">
                        <p className="text-start text-4xl font-bold mt-20">Customer Delight</p>
                        <p className="text-start mt-5 text-2xl">The result? Peanut butter that delights your senses and satisfies your cravings with each delicious bite.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

