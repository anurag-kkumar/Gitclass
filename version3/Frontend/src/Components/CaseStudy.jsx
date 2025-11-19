import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper/modules";

const CaseStudy = () => {
  const swiperRef = useRef(null);

  const slides = [
    { name: "Information Overload",info:"Citizens are bombarded with news from everywhere, not filtered by what's actually near them", img: "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Gemini_Generated_Image_q5b6u9q5b6u9q5b6.png?updatedAt=1762833273200" },
    { name: "No Geographic Context",info:"News articles rarely include precise locations or maps, making it difficult to understand where incidents occur." ,img: "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Gemini_Generated_Image_q9r4poq9r4poq9r4.png?updatedAt=1762833263209" },
    { name: "Slow Emergency Response",info:"During crises, every second counts. Manual location searches delay critical decision-making." ,img: "https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Gemini_Generated_Image_xbos3jxbos3jxbos.png?updatedAt=1762833227509" },
    // { name: "Will", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9c0637aa-b440-4aef-93f3-ea20cf19f42c" },
    // { name: "Eleven", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/6a90b5ba-9f3e-4cb3-a8e2-3ae19b2aa443" },
    // { name: "Dustin", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/fe05145f-c9ab-457f-a91b-92a4c1bd633c" },
    // { name: "Eddie Munson", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/1158c3d4-81d5-4dfc-bb42-863f357ecdb5" },
    // { name: "Steve", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c8ef23d2-37ee-4473-ad86-d9c9911be3bb" },
    // { name: "Robin", img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/29eff421-1087-4b51-92a2-a7f204098187" },
  ];

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white  pb-5
      bg-[url(https://cdn.prod.website-files.com/6584ee98993ef2a2ba17f296/65850001dcdc7fa1686a8490_Noise_Black.webp)]
    "
    >
     <div className="flex flex-row justify-around mx-40">
      <h1 className="text-6xl text-white py-5 font-bold uppercase">The <span className="text-[#E0FF00]">Problem</span> We Solve</h1>
      <p className="my-auto">Traditional news lacks geographic context. When emergencies strike, finding relevant local information is slow, scattered, and frustrating.</p>

     </div>
     <div className="w-[80%] h-0.5 bg-[#E0FF00] mx-auto my-7"></div>
      {/* Swiper */}
      <div className="w-full max-w-[1200px]">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          grabCursor
          centeredSlides
          slidesPerView={1.4} // ✅ Shows ~20% of prev & next card
          spaceBetween={30}
          speed={800}
          pagination={{ clickable: true }}
          modules={[Pagination, Mousewheel]}
          className="rounded-xl"
        >
          {slides.map((slide, i) => (
            <SwiperSlide
              key={i}
              className="transition-all duration-500 ease-in-out select-none"
            >
              <div className="flex bg-[url(./assets/homepage-bg.webp)] h-[400px] rounded-xl   overflow-hidden">
                {/* Left section */}
                <div className="flex flex-col justify-center w-1/2  p-6">
                  <h1 className="text-3xl font-bold mb-3">{slide.name}</h1>
                  <p className="text-sm text-gray-200 mb-5">
                    {slide.info}
                  </p>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-[#E0FF00] hover:text-black transition">
                    Read Case Study
                  </button>
                </div>

                {/* Right section */}
                <div className="w-1/2">
                  <img
                    src={slide.img}
                    alt={slide.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
     {/* Buttons */}
      <div className="flex gap-6 mt-10">
        <button
          className="bg-[#E0FF00] px-6 py-2 rounded-md text-black font-semibold hover:bg-amber-400 transition-all"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          Prev
        </button>
        <button
          className="bg-[#E0FF00] px-6 py-2 rounded-md text-black font-semibold hover:bg-amber-400 transition-all"
          onClick={() => swiperRef.current?.slideNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CaseStudy;
