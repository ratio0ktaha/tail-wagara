import React from "react";

export default function Foot() {
  return (
    <div className="fleX flex-wrap">
      <footer class=" w-auto p-7 bg-black">
        <div class="flex flex-wrap justify-between container ">
          <div className="mb-6 p-[2px]">
            <img src="/images/mag_image.png" />

            <div className="mt-5 text-gray-400 ">
              Everything you need to dominate
            </div>
          </div>

          <div class="grid grid-rows- gap-1 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="sm:grid-cols-2 mb-2 text-sm font-semibold uppercase text-white mt-3 ">
                Resources
              </h2>
              <ul class="text-gray-400">
                <li class="mb-2">News</li>
                <li>blog</li>
              </ul>
            </div>
            <div>
              <h2 class="mt-3 mb-1 text-sm font-semibold text-white">Product</h2>
              <ul class="text-gray-400">
                <li class="mb-2">Adspy</li>
                <li class="mb-2">Defend</li>

                <li>Optimize</li>
              </ul>
            </div>
            <div>
              <h2 class="mb-3 text-sm font-semibold mt-3 text-white">Company</h2>
              <ul class="text-gray-400">
                <li class="mb-2 mt-3">Price</li>
                <li class="mb-2">About</li>
              </ul>
            </div>
          </div>
        </div>
        <hr class=" container my-6 border-gray-400 " />
        <div class="sm:flex sm:items-center sm:justify-between">
          <a class=" container text-gray-400">Copyright PPC Mage 2022 . All rights Reserved. </a>

          <div class="sm:contain flex mt-5 space-x-6 sm:justify-center sm:mt-0"></div>
        </div>

      </footer>
    </div>
  );
}
