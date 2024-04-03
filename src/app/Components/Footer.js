export default function Footer() {
    return (
      <div className="mt-auto">
        <div
          className="w-full  text-black sm:p-32 bg-[#FFF8E5] relative flex items-center"
          style={{
            backgroundImage: `url(assets/backgroundfooter.png)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            minHeight: '400px',
          }}
        >
          <div className="container mx-auto">
            <div className="flex flex-row flex-wrap">
              <div className="w-full sm:w-1/3 p-4">
                <img src="./assets/logo.png" className="w-[100px] sm:w-[220px]" alt="Logo" />
                <p className="text-xl text-black mt-12">
                  We at Brufit are passionate about peanut butter, bringing you the finest nutty spreads. You can taste the excellence in every jar.
                </p>
              </div>
              <div className="w-full sm:w-1/3 p-4">
                <p className="font-bold text-3xl">Quick Links</p>
                <p className="font-bold text-gray-700 mt-12 text-xl">Home</p>
                <p className="font-bold text-gray-700 mt-5 text-xl">About Us</p>
                <p className="font-bold text-gray-700 mt-5 text-xl">Why Brufit?</p>
                <p className="font-bold text-gray-700 mt-5 text-xl">Recipes & Blogs</p>
                <p className="font-bold text-gray-700 mt-5 text-xl">Contact Us</p>
              </div>
              <div className="w-full sm:w-1/3 p-4">
                <img src="./assets/hero-shaps-1.png" className="ms-36" alt="Shapes" />
                <a href="#" className="block p-12 bg-white border border-gray-200 rounded-0 shadow">
                  <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Quick Contact</h5>
                  <p className="text-xl mt-12 font-bold">support@brufit.in</p>
  
                  <p className="font-normal text-5xl text-gray-400 font-bold">------------------</p>
  
                  <p className="text-xl font-bold">
                    Plot No 2, Revenue Survey No 189/P3, Aditya Industrial Area, Village Navagam, Rajkot, Gujarat - 360003
                  </p>
  
                  <p className="font-normal text-5xl text-gray-400 font-bold">------------------</p>
                  <div className="flex mb-4">
                    <div className="w-1/3 sm:w-auto h-12">
                      <img src="./assets/hadphon.png" alt="Phone" />
                    </div>
                    <div className="w-2/3 sm:w-auto h-12">
                      <i>
                        <p className="text-3xl font-bold text-red-500">+91 92658 16994</p>
                        <p className="text-lg font-bold mt-2">Got Questions? Call us 24/7</p>
                      </i>
                    </div>
                  </div>
  
                  <p className="font-normal text-5xl text-gray-400 font-bold">------------------</p>
  
                  <div className="flex">
                    <div className="w-16 h-16">
                      <img src="./assets/facebook.png" alt="Facebook" />
                    </div>
                    <div className="w-16 h-16">
                      <img src="./assets/twitter.png" alt="Twitter" />
                    </div>
                    <div className="w-16 h-16">
                      <img src="./assets/instagram.png" alt="Instagram" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  