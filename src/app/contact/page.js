import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function Contact() {
    return (
        <>
            <Header />
            <div className="bg-[#FFF8E5] relative" style={{ backgroundImage: `url(assets/backgroundfooter.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '400px' }}>
                <div className="flex mb-4 p-10 sm:p-40">
                    <div className="w-1/2 h-auto sm:h-12">
                        <h2 className="text-4xl sm:text-6xl font-bold">Contact Us</h2>

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
                                        <span className="ml-1 text-xl font-bold md:ml-2 dark:text-gray-400">Contact Us</span>
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

            <div className="text-center p-8 sm:p-16 md:p-36">
                <p className="text-2xl sm:text-4xl text-orange-600 font-bold">We are eager to receive your messages.</p>
                <p className="text-4xl sm:text-6xl font-bold mt-3 sm:mt-5">Your Thoughts Matter to Us – Get in Touch</p>



                <div className="flex flex-col sm:flex-row mt-8 sm:mt-16">
                    <div className="w-full sm:w-1/3 h-auto">
                        <div className="pet-grooming">
                            <i>
                                <div className="image-container">
                                    <img className="w-full mt-5 p-9" src="./assets/sms.png" alt="High Protein" />
                                    <div style={{ marginTop: '18px', marginLeft: '2px' }}>
                                        <svg
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
                        <p className="mt-5 text-lg text-orange-500 font-bold">EMAIL ADDRESS</p>
                        <p className="text-2xl font-medium">support@brufit.in</p>
                    </div>

                    <div className="w-full sm:w-1/3 h-auto mt-4 sm:mt-0">
                        <div className="pet-grooming">
                            <i>
                                <div className="image-container">
                                    <img className="w-full mt-3 p-9" src="./assets/high-protein.png" alt="High Protein" />
                                    <div style={{ marginTop: '10px', marginLeft: '2px' }}>
                                        <svg
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
                        <p className="mt-5 text-lg text-orange-500 font-bold">CALL US</p>
                        <p className="text-2xl font-medium">+91 92658 16994</p>
                        <p className="text-xl font-medium">24/7 Support team</p>
                    </div>

                    <div className="w-full sm:w-1/3 h-auto mt-4 sm:mt-0">
                        <div className="pet-grooming">
                            <i>
                                <div className="image-container">
                                    <div className="image-container">
                                        <img className="w-full mt-3 p-9" src="./assets/high-protein.png" alt="High Protein" />
                                        <div style={{ marginTop: '10px', marginLeft: '2px' }}>
                                            <svg
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
                                </div>
                            </i>
                        </div>
                        <p className="mt-5 text-lg text-orange-500 font-bold">Working Hours</p>
                        <p className="text-2xl font-medium">9:00 AM - 5:00 PM</p>
                        <p className="text-xl font-medium">Monday - Saturday</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row p-4 sm:p-10 md:p-20">
                <div className="w-full sm:w-1/2">
                    <h2 className="text-6xl font-bold">Let's connect</h2>
                    <p className="text-2xl sm:text-3xl mt-3 sm:mt-5">Put your faith in Brufit, a celebrated brand crafting peanut butter delights.</p>

                    <div className="bg-gray-100 p-12 mt-10">
                        <p className="font-bold text-xl">Marketed By : BRUFIT HEALTH FOOD</p>
                        <p className="text-xl mt-5">Plot No 2, Revenue Survey No 189/P3, Aditya Industrial Area, Ahmedabad Highway, Village Navagam, Rajkot, Gujarat - 360003.</p>
                    </div>

                    <div className="bg-gray-100 p-12 mt-10">
                        <p className="font-bold text-xl">Manufactured By : ROASTO FOODS BRL</p>
                        <p className="text-xl mt-5">Shade No. 1, Iskcon Industrial Area, Ravki, Rajkot - 360004, Gujarat, India.</p>
                    </div>
                </div>
                <div className="w-full mt-5 sm:mt-0 sm:w-1/2 sm:ms-12">
                    <div className="bg-[#FEDA46] p-8 sm:p-16">
                        <p className="text-3xl font-bold">Send Message</p>

                        <div className="flex flex-col sm:flex-row mb-4 sm:mt-5">
                            <input type="text" className="mb-6 sm:mb-0 sm:w-1/2 bg-white border border-gray-300 text-gray-900 text-xl rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-5" placeholder="First Name" />

                            <input type="text" className="sm:ml-4 sm:w-1/2 bg-white border border-gray-300 text-gray-900 text-xl rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-5" placeholder="Last Name" />
                        </div>
                        <div className="flex flex-col sm:flex-row mb-4 sm:mt-10">
                            <input type="text" className="mb-6 sm:mb-0 sm:w-1/2 bg-white border border-gray-300 text-gray-900 text-xl rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-5" placeholder="Phone Number" />

                            <input type="text" className="sm:ml-4 sm:w-1/2 bg-white border border-gray-300 text-gray-900 text-xl rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-5" placeholder="Email Address" />
                        </div>
                        <textarea rows={4} className="mb-6 bg-white border border-gray-300 text-gray-900 text-xl rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-5" placeholder="Your Message"></textarea>
                        <button type="button" className="text-white font-bold bg-[#FA441D] focus:outline-none focus:ring-4 focus:ring-red-300 rounded-full text-xl px-20 py-5 text-center mb-2">Submit Now</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
