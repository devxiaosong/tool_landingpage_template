export default function ContactCard() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-[1310px] px-4 pb-12">
        <div className="bg-white rounded-[30px] shadow-[0_1px_4px_0_#CDCDCD] py-7 px-6 md:px-10 lg:pl-10 xl:pl-36 flex items-center flex-col-reverse lg:flex-row">
          {/* Left - Image */}
          <img
            src="https://idownergo.com/wp-content/themes/idownergo/assets/img/support/still_need_help.svg"
            alt="still need help"
            className="w-[236px] h-[236px] mt-10 lg:mt-0"
          />

          {/* Right - Content */}
          <div className="lg:pl-10 xl:pl-36 lg:pr-10 text-center lg:text-left">
            <h2 className="text-2xl md:text-[40px] md:leading-[54px] font-bold text-gray-900">
              Still need help?
            </h2>
            <p className="text-gray-900 text-sm md:text-lg md:leading-7 mt-5">
              Submit your questions. One of our specialists will be reaching you soon.
            </p>
            <div className="flex items-center mt-7 justify-center lg:justify-start flex-col lg:flex-row">
              <a
                href="mailto:contact@idownergo.com"
                className="text-[#7A32FD] text-base w-40 py-2.5 border border-[#8323FF] rounded-full text-center hover:text-white hover:bg-[#8323FF] transition-all mr-3.5"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
