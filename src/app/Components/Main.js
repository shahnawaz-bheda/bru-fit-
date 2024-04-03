import CardSlider from "./CardSlider";

export default function Main() {
    return (
        <>
            <div className="w-full h-64 bg-[#FFFFFF] sm:h-[700px] carousel">
                <div className="w-full carousel" style={{ height: '100%' }}>
                    <div className="carousel-item w-full">
                        <img src="./assets/banner2.webp" className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src="./assets/banner1.webp" className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row mb-4 p-12 sm:p-36 bg-white text-black">
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl sm:text-7xl">Why Brufit Peanut Butter</h2>
                    <p className="text-lg md:text-xl mt-3 md:mt-5 ">At Brufit, we redefine peanut butter. Our commitment to quality, taste, and sustainability sets us apart. Discover why Brufit Peanut Butter is the choice of peanut enthusiasts. Explore our delectable flavors, and our dedication to your health and the planet.</p>

                    <div className="flex flex-col md:flex-row mb-4 mt-10">
                        <div className="w-full md:w-1/2 h-auto p-2">
                            <div>
                                <div className="pet-grooming">
                                    <i>
                                        <div className="image-container">
                                            <img className="w-full mt-3 p-9" src="./assets/high-protein.png" alt="High Protein" />
                                            <div style={{ marginTop: '10px', marginLeft: '2px' }}>
                                                <svg
                                                    id="myDIV"
                                                    width="138"
                                                    height="140"
                                                    style={{ marginTop: '-150px' }}
                                                    viewBox="0 0 673 673"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        style={{ marginTop: '-400px' }}
                                                        clipRule="evenodd"
                                                        d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z"
                                                        fill="#fa441d"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </i>
                                </div>
                                <h3 className="text-4xl font-bold mt-5 hover:text-orange-700">High Protein</h3>
                                <p className="text-xl mt-4">
                                    Fuel your day with protein-packed peanut butter, your perfect source for strength and vitality.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 h-auto p-2 mt-4 md:mt-0">
                            <div>
                                <div className="pet-grooming">
                                    <i>
                                        <div className="image-container">
                                            <img className="w-full mt-3 p-9" src="./assets/heart-health.png" alt="High Protein" />
                                            <div style={{ marginTop: '10px', marginLeft: '2px' }}>
                                                <svg
                                                    id="myDIV"
                                                    width="138"
                                                    height="140"
                                                    style={{ marginTop: '-150px' }}
                                                    viewBox="0 0 673 673"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        style={{ marginTop: '-400px' }}
                                                        clipRule="evenodd"
                                                        d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z"
                                                        fill="#fa441d"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </i>
                                </div>
                                <h3 className="text-4xl font-bold mt-5 hover:text-orange-700">Heart Health</h3>
                                <p className="text-xl mt-4">
                                    Enjoy guilt-free, as it's packed with nutrients that promote heart-healthy fats & antioxidants.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="dog-walker two d-block">
                        <img src="./assets/welcome.webp" className="w-full" alt="Brufit Peanut Butter" />
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#F5F5F5] relative" style={{ backgroundImage: `url(assets/healthy-product.png)`, height: 'auto' }}>
                <div className="p-8 md:p-32 ">
                    <div className="flex justify-center items-center">
                        <img src="./assets/heading-img.png" />
                    </div>
                    <p className="text-lg md:text-xl mt-3 text-orange-600 text-center font-bold">FIND HEALTHY PRODUCT</p>
                    <h2 className="text-4xl md:text-7xl mt-3 md:mt-5 text-center text-black">Peanut Butter Collection</h2>
                    <div className="flex flex-col md:flex-row mt-5">
                        <div className="w-full  sm:w-1/3 p-4">
                            <div className="block  bg-white border border-gray-200">
                                <img src="./assets/pure-and-natural-peanut-butter.webp" className="w-60 ms-20  sm:ms-0  p-9 sm:w-[100%]" alt="Pure and Natural Peanut Butter - No additives" />
                            </div>
                            <p className="mt-3 font-bold text-gray-500">Natural</p>
                            <p className="font-bold text-xl md:text-3xl mt-2 text-black">Pure and Natural Peanut Butter - No additives</p>
                        </div>
                        <div className="w-full md:w-1/3 p-4 mt-4 md:mt-0">
                            <div className="block bg-white border border-gray-200">
                                <img src="./assets/smooth-and-creamy-peanut-butter.webp" className="w-60 ms-20 sm:ms-0  p-9 sm:w-[100%]" alt="Smooth and Creamy Peanut Butter" />
                            </div>
                            <p className="mt-3 font-bold text-gray-500">Classic</p>
                            <p className="font-bold text-xl md:text-3xl mt-2 text-black">The timeless, smooth and creamy favorite</p>
                        </div>
                        <div className="w-full md:w-1/3 p-4 mt-4 md:mt-0">
                            <div className="block bg-white border border-gray-200">
                                <img src="./assets/peanut-butter-chocolate.webp" className="w-60 ms-20 sm:ms-0 p-9  sm:w-[100%]" alt="Peanut Butter Infused with Rich Chocolate" />
                            </div>
                            <p className="mt-3 font-bold text-gray-500">Chocolate</p>
                            <p className="font-bold text-xl md:text-3xl mt-2 text-black">Peanut Butter Infused with Rich Chocolate</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto bg-white text-black">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-16">
                    <div className="mt-4 p-4">
                        <div className="pet-grooming">
                            <div className="image-container">
                                <img className="rounded-full" src="./assets/vegan.webp" alt="High Protein" />
                                <div style={{ marginTop: '-315px', marginLeft: '2px' }}>
                                    <svg width="326" height="326" id="myDIV" viewBox="0 0 673 673" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z" fill="#fedc4f"></path>
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-4xl mt-5 hover:text-orange-700">100% Vegan</h2>
                            <p className="mt-5 text-md">Purely Vegan Peanut Butter - 100% plant-based delight</p>
                        </div>
                    </div>
                    <div className="mt-4 p-4">
                        <div className="pet-grooming">
                            <div className="image-container">
                                <img className="rounded-full" src="./assets/gluten-free.webp" alt="High Protein" />
                                <div style={{ marginTop: '-315px', marginLeft: '2px' }}>
                                    <svg width="326" height="326" id="myDIV" viewBox="0 0 673 673" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z" fill="#fb5e3c"></path>
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-4xl mt-5 hover:text-orange-700">Gluten Free</h2>
                            <p className="mt-5 text-md">Gluten-Free Peanut Butter - Enjoy the Nutty Goodness without Gluten.</p>
                        </div>
                    </div>
                    <div className="mt-4 p-4">
                        <div className="pet-grooming">
                            <div className="image-container">
                                <img className="rounded-full" src="./assets/Healthy-fats.webp" alt="High Protein" />
                                <div style={{ marginTop: '-315px', marginLeft: '2px' }}>
                                    <svg width="326" height="326" id="myDIV" viewBox="0 0 673 673" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z" fill="#fedc4f"></path>
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-4xl mt-5 hover:text-orange-700">Healthy Fats</h2>
                            <p className="mt-5 text-md">Heart-Healthy Peanut Butter - Packed with the Goodness of Healthy Fats.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-32 sm:p-32" style={{ backgroundImage: `url(assets/client-b.webp)`, height: 'auto' }}>

                <div className="carousel rounded-box h-[120%] w-[150%] sm:h-[100%] sm:w-[100%]">
                    <div className="carousel-item w-full md:w-1/2 relative">
                        <img src="./assets/client.png" className="w-full" alt="Client" />

                        <div className="absolute top-0 left-0 right-0 bottom-0 md:bottom-32 flex flex-col justify-center items-center">
                            <div className="flex sm:mt-12 ">
                                <img src="./assets/star.png" width="20px" alt="star" />
                                <img src="./assets/star.png" width="20px" alt="star" />
                                <img src="./assets/star.png" width="20px" alt="star" />
                                <img src="./assets/star.png" width="20px" alt="star" />
                                <img src="./assets/star.png" width="20px" alt="star" />
                            </div>

                            <p className="text-black sm:mt-12 text-center sm:p-5 sm:text-2xl ms-12">
                                One thing I appreciate about this peanut butter is the consistent quality. I can rely on the same great taste and texture with every jar. It's become a pantry essential for me.
                            </p>
                            <p className="sm:text-3xl font-bold sm:mt-5">Sarika Reddy</p>
                            <i className="quote  top-44  sm:left-auto sm:top-80    sm:right-[100px]">
                                <img src="./assets/quote.png" alt="quote" />
                            </i>
                        </div>
                    </div>


                    <div className="carousel-item w-full md:w-1/2 relative">
                        <img src="./assets/client.png" className="w-full" alt="Client" />

                        <div className="absolute top-0 left-0 right-0 bottom-0 md:bottom-32 flex flex-col justify-center items-center">
                            <div className="flex sm:mt-12 ">
                                <img src="./assets/star.png" width="20px" alt="star" />
                                <img src="./assets/star.png" width="20px" alt="star" />
                                <img src="./assets/star.png" width="20px" alt="star" />
                                <img src="./assets/star.png" width="20px" alt="star" />
                                <img src="./assets/star.png" width="20px" alt="star" />
                            </div>

                            <p className="text-black sm:mt-12 text-center sm:p-5 sm:text-2xl ms-12">
                                One thing I appreciate about this peanut butter is the consistent quality. I can rely on the same great taste and texture with every jar. It's become a pantry essential for me.
                            </p>
                            <p className="sm:text-3xl font-bold sm:mt-5">Sarika Reddy</p>
                            <i className="quote  top-44  sm:left-auto sm:top-80    sm:right-[100px]">
                                <img src="./assets/quote.png" alt="quote" />
                            </i>
                        </div>
                    </div>

                    <div className="carousel-item w-full md:w-1/2 relative">
                        <img src="./assets/client.png" className="w-full" alt="Client" />

                        <div className="absolute top-0 left-0 right-0 bottom-0 md:bottom-32 flex flex-col justify-center items-center">
                            <div className="flex sm:mt-12 ">
                                <img src="./assets/star.png" width="20px" alt="star" />
                                <img src="./assets/star.png" width="20px" alt="star" />
                                <img src="./assets/star.png" width="20px" alt="star" />
                                <img src="./assets/star.png" width="20px" alt="star" />
                                <img src="./assets/star.png" width="20px" alt="star" />
                            </div>

                            <p className="text-black sm:mt-12 text-center sm:p-5 sm:text-2xl ms-12">
                                One thing I appreciate about this peanut butter is the consistent quality. I can rely on the same great taste and texture with every jar. It's become a pantry essential for me.
                            </p>
                            <p className="sm:text-3xl font-bold sm:mt-5">Sarika Reddy</p>
                            <i className="quote  top-44  sm:left-auto sm:top-80    sm:right-[100px]">
                                <img src="./assets/quote.png" alt="quote" />
                            </i>
                        </div>
                    </div>

                    <div className="carousel-item w-full md:w-1/2 relative">
                        <img src="./assets/client.png" className="w-full" alt="Client" />

                        <div className="absolute top-0 left-0 right-0 bottom-0 md:bottom-32 flex flex-col justify-center items-center">
                            <div className="flex sm:mt-12 ">
                                <img src="./assets/star.png" width="20px" alt="star" />
                                <img src="./assets/star.png" width="20px" alt="star" />
                                <img src="./assets/star.png" width="20px" alt="star" />
                                <img src="./assets/star.png" width="20px" alt="star" />
                                <img src="./assets/star.png" width="20px" alt="star" />
                            </div>

                            <p className="text-black sm:mt-12 text-center sm:p-5 sm:text-2xl ms-12">
                                One thing I appreciate about this peanut butter is the consistent quality. I can rely on the same great taste and texture with every jar. It's become a pantry essential for me.
                            </p>
                            <p className="sm:text-3xl font-bold sm:mt-5">Sarika Reddy</p>
                            <i className="quote  top-44  sm:left-auto sm:top-80    sm:right-[100px]">
                                <img src="./assets/quote.png" alt="quote" />
                            </i>
                        </div>
                    </div>

                </div>

                {/* <div className="mt-12 items-center">
                    <div className="flex mb-4  ms-96">
                        <div><img src="./assets/star-dark.png" /></div>
                        <div><img src="./assets/star-dark.png" /></div>
                        <div><img src="./assets/star-dark.png" /></div>
                        <div><img src="./assets/star-dark.png" /></div>
                        <div><img src="./assets/star-dark.png" /></div>
                    </div>
                </div> */}
            </div>



            <div className="p-8 sm:p-28 text-center">
                <div className="flex justify-center items-center">
                    <img src="./assets/heading-img.png" alt="Header" />
                </div>
                <p className="text-xl sm:text-2xl text-orange-600 font-bold mt-3">Recipes & Blogs</p>
                <h2 className="text-3xl sm:text-7xl font-bold">Recent Articles</h2>

                <div className="flex flex-col mt-4 sm:flex-row sm:mb-4 sm:mt-5 p-8 sm:p-32">
                    <div className="mb-8 sm:w-1/3 sm:mr-5">
                        <div className="bg-white border border-gray-200 relative max-w-lg overflow-hidden bg-cover bg-no-repeat">
                            <img className="max-w-lg transition duration-300 ease-in-out hover:scale-110" src="./assets/the-benefits-of-peanut-butter-for-heart-health.webp" alt="Article 1" />
                        </div>
                        <p className="text-lg sm:text-2xl text-start mt-4 sm:mt-6 font-bold hover:text-orange-500">The Benefits of Peanut Butter for Heart Health</p>
                    </div>

                    <div className="mb-8 sm:w-1/3 sm:mr-5">
                        <div className="bg-white border border-gray-200 relative max-w-lg overflow-hidden bg-cover bg-no-repeat">
                            <img className="max-w-lg transition duration-300 ease-in-out hover:scale-110" src="./assets/peanut-butter-and-diabetes-how-to-incorporate-it-into-your-diet-safely.webp" alt="Article 2" />
                        </div>
                        <p className="text-lg sm:text-2xl text-start mt-4 sm:mt-6 font-bold hover:text-orange-500">Peanut Butter and Diabetes: How to Incorporate It into Your Diet Safely</p>
                    </div>

                    <div className="sm:w-1/3">
                        <div className="bg-white border border-gray-200 relative max-w-lg overflow-hidden bg-cover bg-no-repeat">
                            <img className="max-w-lg transition duration-300 ease-in-out hover:scale-110" src="./assets/peanut-butter-for-Weight-management-how-it-can-help-you-lose-or-gain-weight.webp" alt="Article 3" />
                        </div>
                        <p className="text-lg sm:text-2xl text-start mt-4 sm:mt-6 font-bold hover:text-orange-500">Peanut Butter for Weight Management: How It Can Help You Lose or Gain Weight</p>
                    </div>


                </div>
                <button type="button" className="text-white font-bold bg-red-700  focus:outline-none focus:ring-4 focus:ring-red-300 rounded-full text-xl px-20 py-5  text-center mr-2 mb-2 ">See All Bogs</button>

                {/* <div className="flex mb-4 p-20">
                    <div className="w-1/4  h-12">
                        <img className="ms-32" src="./assets/apeda-approved.webp" />
                        <p className="mt-3 text-2xl text-center font-bold hover:text-orange-500 ms-12">APEDA Approved</p>
                    </div>
                    <div className="w-1/4  h-12">
                        <img className="ms-32" src="./assets/freshly-made.webp" />
                        <p className="mt-3 text-2xl text-center font-bold hover:text-orange-500 ms-12">Freshly Made</p>
                    </div>
                    <div className="w-1/4  h-12">
                        <img className="ms-32" src="./assets/quality-peanuts.webp" />
                        <p className="mt-3 text-2xl text-center font-bold hover:text-orange-500 ms-12">Quality Peanuts</p>
                    </div>
                    <div className="w-1/4  h-12">
                        <img className="ms-32" src="./assets/pure-veg.webp" />
                        <p className="mt-3 text-2xl text-center font-bold hover:text-orange-500 ms-12">100% Veg</p>
                    </div>
                </div> */}

                {/* <div className="p-8 sm:p-20">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
                            <img src="./assets/apeda-approved.webp" alt="APEDA Approved" className="mx-auto" />
                            <p className="text-lg sm:text-2xl text-center font-bold hover:text-orange-500 mt-2 sm:mt-3">APEDA Approved</p>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
                            <img src="./assets/freshly-made.webp" alt="Freshly Made" className="mx-auto" />
                            <p className="text-lg sm:text-2xl text-center font-bold hover:text-orange-500 mt-2 sm:mt-3">Freshly Made</p>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
                            <img src="./assets/quality-peanuts.webp" alt="Quality Peanuts" className="mx-auto" />
                            <p className="text-lg sm:text-2xl text-center font-bold hover:text-orange-500 mt-2 sm:mt-3">Quality Peanuts</p>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
                            <img src="./assets/pure-veg.webp" alt="100% Veg" className="mx-auto" />
                            <p className="text-lg sm:text-2xl text-center font-bold hover:text-orange-500 mt-2 sm:mt-3">100% Veg</p>
                        </div>
                    </div>
                </div> */}
                <div class="p-8 sm:p-20">
                    <div class="flex flex-wrap justify-center">
                        <div class="w-full sm:w-1/2 md:w-1/4 p-4 relative">
                            <div class="group overflow-hidden">
                                <img src="./assets/apeda-approved.webp" alt="APEDA Approved" class="mx-auto transform origin-center transition-transform duration-300 group-hover:rotate-180" />
                            </div>
                            <p class="text-lg sm:text-2xl text-center font-bold hover:text-orange-500 mt-2 sm:mt-3">APEDA Approved</p>
                        </div>


                        <div class="w-full sm:w-1/2 md:w-1/4 p-4 relative">
                            <div class="group overflow-hidden">
                                <img src="./assets/freshly-made.webp" alt="Freshly Made" class="mx-auto transform origin-center transition-transform duration-300 group-hover:rotate-180" />
                            </div>
                            <p class="text-lg sm:text-2xl text-center font-bold hover:text-orange-500 mt-2 sm:mt-3">Freshly Made</p>
                        </div>

                        <div class="w-full sm:w-1/2 md:w-1/4 p-4 relative">
                            <div class="group overflow-hidden">
                                <img src="./assets/quality-peanuts.webp" alt="Quality Peanuts" class="mx-auto transform origin-center transition-transform duration-300 group-hover:rotate-180" />
                            </div>
                            <p class="text-lg sm:text-2xl text-center font-bold hover:text-orange-500 mt-2 sm:mt-3">Quality Peanuts</p>
                        </div>

                        <div class="w-full sm:w-1/2 md:w-1/4 p-4 relative">
                            <div class="group overflow-hidden">
                                <img src="./assets/pure-veg.webp" alt="100% Veg" class="mx-auto transform origin-center transition-transform duration-300 group-hover:rotate-180" />
                            </div>
                            <p class="text-lg sm:text-2xl text-center font-bold hover:text-orange-500 mt-2 sm:mt-3">100% Veg</p>
                        </div>
                    </div>
                </div>

            </div>


        </>

    );
}
