import React from "react";

export const Features = () => {
    return (
    <>  
      <div class="bg-secondary-color py-6 sm:py-8 lg:py-12 drop-shadow-2xl">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8 ">
          {/* <!-- text - start --> */} 
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-primary-color md:mb-6 lg:text-3xl">
              <span className="text-white">Sah</span>Yatri's Features
            </h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-400 md:text-lg">
                Explore Our Top Features for an Enhanced Ride-Sharing Experience
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div class="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-2 xl:gap-16 transition-all ease-in-out  xl:px-[4rem] overflow-hidden">
            {/* <!-- feature - start --> */}
            <div class="flex gap-4 md:gap-6 transition-all ease-in-out hover:bg-accent hover:scale-95 hover:rounded-xl p-2 hover:text-secondary-color text-gray-300">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-color hover:scale-95 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>

              <div className="target-div">
                <h3 class="target mb-2 text-lg text-primary-color font-semibold md:text-xl">Efficient Matching</h3>
                <p class="mb-2  ">
                Connect with nearby travelers easily and save on commute costs through our smart ride-matching system.
                </p>
                <a
                  href="#"
                  class="font-bold text-primary-color transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  More
                </a>
              </div>
            </div>
            {/* <!-- feature - end -->

            <!-- feature - start --> */}
            <div class="flex gap-4 md:gap-6 transition-all ease-in-out hover:bg-accent hover:scale-95 hover:rounded-xl p-2 hover:text-secondary-color text-gray-300">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-color hover:scale-95 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              <div>
                <h3 class="target mb-2 text-lg font-semibold md:text-xl text-primary-color">Seamless Real-Time Chat</h3>
                <p class="mb-2">
                Instantly chat with your ride partner. Coordinate pickups, discuss trip details, and enhance your journey with real-time communication.
                </p>
                <a
                  href="#"
                  class="font-bold text-primary-color transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  More
                </a>
              </div>
            </div>
            {/* <!-- feature - end -->

      <!-- feature - start --> */}
            <div class="flex gap-4 md:gap-6 transition-all ease-in-out hover:bg-accent hover:scale-95 hover:rounded-xl p-2 hover:text-secondary-color text-gray-300">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-color hover:scale-95  text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"  
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>

              <div>
                <h3 class="target mb-2 text-lg font-semibold text-primary-color md:text-xl">Complete Security</h3>
                <p class="mb-2 ">
                Connect securely with nearby travelers using our smart ride-matching system. Rest assured, your data is safe and confidential.
                </p>
                <a
                  href="#"
                  class="font-bold text-primary-color transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  More
                </a>
              </div>
            </div>
            {/* <!-- feature - end -->

            

      <!-- feature - start --> */}
            <div class="flex gap-4 md:gap-6 transition-all ease-in-out hover:bg-accent hover:scale-95 hover:rounded-xl p-2 hover:text-secondary-color text-gray-300">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-color hover:scale-95  text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>

              <div>
                <h3 class="target mb-2 text-lg font-semibold md:text-xl text-primary-color">User-Friendly Interface</h3>
                <p class="mb-2 ">
                Intuitive interface for easy navigation. Simplify ride requests, communication, and management for a seamless ride-sharing experience.
                </p>
                <a
                  href="#"
                  class="font-bold text-primary-color transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  More
                </a>
              </div>
            </div>
            {/* <!-- feature - end -->*/}

      

          </div>
        </div>
      </div>
    </>
  );
};
