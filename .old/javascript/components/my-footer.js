class MyFooter extends HTMLElement {

  // connect component
  connectedCallback() {
    this.innerHTML = `
  <section class="bg-gray-800 text-white p-8">
    <div class="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
      <div class="sm:flex mb-4">
        <div class="sm:1/1 md:w-1/4 w-1/2 h-auto">
          <div class="text-orange mb-2 font-black">Contact</div>
          <ul class="list-reset leading-normal">
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">Thijlaan 4</a></li>
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">7576 ZB Oldenzaal</a></li>
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">The Netherlands</a></li>
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">WhatsApp: +31 6 10 73 25 35</li>
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">info@griddigitalmarketing.com</li>
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">© Grid Marketing, 2021</a></li>
          </ul>
        </div>
        <div class="sm:1/1 md:w-1/4 w-1/2 h-auto">
          <div class="text-blue mb-2 font-black">Sitemap</div>
          <ul class="list-reset leading-normal">
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">Home</a></li>
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">Digital Marketing Strategy</a></li>
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">Search Engine Optimization</a></li>
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">Search Engine Advertising</a></li>
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">Social Media Marketing</a></li>
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">Web Development &amp; Design</a></li>
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">Content Marketing</a></li>
          </ul>
  
          <div class="text-blue-light mb-2 mt-4 font-black">Sub-header</div>
          <ul class="list-reset leading-normal">
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">About Us</a></li>
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">Blog</a></li>
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">Contact</a></li>
          </ul>
        </div>
        <!-- NEEDS A I AGREE + SUBSCRIBE BUTTON -->
        <div class="sm:w-1/2 sm:mt-0 mt-8 h-auto">
          <div class="font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Newsletter
          </div>
          <p class="text-grey-darker leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consectetur.
          </p>
          <div class="flex items-end justify-center w-full lg:w-2/3 p-2 rounded-full bg-white shadow-xl">
            <div class="relative w-4/4 mr-4 text-left lg:w-full md:w-full rounded-full">
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                placeholder="Your email address"
                class="w-full rounded-full px-3 py-1 text-base leading-8 text-gray-800 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-200 rounded outline-none focus:border-indigo-500"
              />
            </div>
            <button
              class="inline-flex px-6 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-full focus:outline-none bg-gradient-to-r from-pink-400 to-indigo-500 font-lg hover:from-pink-800 hover:to-indigo-900 focus:shadow-outline shadow-lg"
            >
              Subscribe
            </button>
          </div>
        </div>
        <!-- NEEDS SOCIAL MEDIA BUTTONS -->
        <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
          <div class="text-green-dark mb-2 font-black">Follow us</div>
          <ul class="list-reset leading-normal">
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">Link</a></li>
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">Link</a></li>
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">Link</a></li>
          </ul>
  
          <div class="text-green-light mb-2 mt-4 font-black">Sub-header</div>
          <ul class="list-reset leading-normal">
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">Link</a></li>
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">Link</a></li>
            <li class="hover:text-orange text-white"><a href="#" class="py-4 text-sm text-white">Link</a></li>
          </ul>
        </div>

      </div>
    </div>
  </section>

    `;
  }
}

customElements.define( 'my-footer', MyFooter );

