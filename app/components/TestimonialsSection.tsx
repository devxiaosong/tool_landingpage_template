export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      review: "This app is perfect for my needs. I have been using it for a few years and it has not disappointed. The customer service is responsive and corrects the issue very quickly.",
      author: "Gergo Kocsis",
      avatar: "https://idownergo.com/wp-content/themes/idownergo/assets/img/index/person1.png",
    },
    {
      rating: 5,
      review: "Good software and good support. If you could also provide option to control download quality from sites other than YouTube, that will be great.",
      author: "Vishnu Mohan",
      avatar: "https://idownergo.com/wp-content/themes/idownergo/assets/img/index/person2.png",
    },
    {
      rating: 5,
      review: "Excellent product, works as intended. I love all the features, such as the ability to download in different formats and different levels of quality. I also love that it works with Spotify. This is exceptional software with frequent updates, so they are constantly improving it even more.",
      author: "Bara Kunasaka",
      avatar: "https://idownergo.com/wp-content/themes/idownergo/assets/img/index/person3.png",
    },
  ];

  return (
    <section className="py-10 md:py-20 bg-white relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover opacity-50"
        style={{
          backgroundImage: "url('https://idownergo.com/wp-content/themes/idownergo/assets/img/index/circle-background2.png')",
        }}
      />
      
      <div className="container mx-auto max-w-[1310px] px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-10 md:mb-[60px]">
          <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold leading-tight text-black">
            Good Reviews from Users Around the World
          </h2>
        </div>

        {/* Reviews Card */}
        <div className="bg-white rounded-[20px] shadow-[0px_1px_4px_0px_rgba(234,156,236,0.5)] px-5 md:px-16 lg:px-[66px] pt-10 md:pt-[60px] pb-10 md:pb-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start text-center">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                {/* Stars */}
                <div className="w-[166px] h-[30px]">
                  <img
                    src="https://idownergo.com/wp-content/themes/idownergo/assets/img/index/five-star-praise.svg"
                    alt="five stars"
                    className="w-full h-full"
                  />
                </div>

                {/* Review Text */}
                <p className="mt-5 text-[#333333] text-[14px] md:text-[16px] leading-5 md:leading-6 max-w-[293px]">
                  "{testimonial.review}"
                </p>

                {/* Author */}
                <div className="flex justify-center items-center mt-5">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-11 h-11 rounded-full mr-2.5"
                  />
                  <p className="text-[#333333] text-[16px]">{testimonial.author}</p>
                </div>

                {/* Divider - only show between items on desktop */}
                {index < testimonials.length - 1 && (
                  <div className="w-full lg:w-auto">
                    {/* Horizontal line for mobile */}
                    <div className="h-[2px] w-full bg-gradient-to-r from-white via-[#F0F0F0] to-white my-6 lg:hidden" />
                    {/* Vertical line for desktop */}
                    <div className="hidden lg:block absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-white via-[#F0F0F0] to-white" 
                         style={{ 
                           left: `calc(${((index + 1) / testimonials.length) * 100}% - 1px)`,
                           height: '200px',
                           margin: 'auto 0'
                         }} 
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
