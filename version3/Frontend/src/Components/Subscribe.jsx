import './Subscribe.css'

function Subscribe() {
  return (
    <div className="text-white bg-[url('https://cdn.prod.website-files.com/6584ee98993ef2a2ba17f296/65850001dcdc7fa1686a8490_Noise_Black.webp')] w-full h-full">
      <div className="group bg-[#E0FF00] w-full h-[400px] flex flex-row justify-around">
        {/* Left Image */}
        <div>
          <img
            src="https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Screenshot_2025-11-10_164404-removebg-preview.png?updatedAt=1762802102311"
            alt="Subscribe Illustration"
            className="h-[350px] object-contain transition-transform duration-700 ease-in-out group-hover:scale-150"

          />
        </div>

        {/* Right Section */}
        <div className="my-auto flex flex-col text-black">
          <p className="py-3 font-medium">✨ Subscribe</p>
          <h1 className="text-6xl font-bold">Get the latest</h1>
          <h1 className="text-6xl font-bold mb-6">GEOPRESS NEWS</h1>

          <label
            htmlFor="input-group-1"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Email
          </label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="email"
              id="input-group-1"
              placeholder="name@example.com"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full ps-10 p-2.5"
            />
          </div>

          <button className="bg-black text-[#E0FF00] font-semibold py-2 px-6 rounded-lg hover:bg-gray-800 transition">
            Subscribe Now
          </button>
        </div>
      </div>
      <div className="overflow-hidden whitespace-nowrap bg-black pt-20 ">
      <div className="animate-marquee inline-block">
        <span className="text-[#D4F600] text-stroke font-black text-9xl ">
           WELCOME TO CAREER COMPASS
        </span>
        <span className="text-transparent text-stroke font-black text-9xl mx-10">
          LEARN BUILD GROW
        </span>
       
      </div>
    </div>

    <div className="overflow-hidden whitespace-nowrap bg-black pb-7 ">
      <div className="animate-marqueeS inline-block ">
        <span className="text-transparent text-stroke font-black text-9xl px-5 ">
           WELCOME TO CAREER COMPASS
        </span>
        <span className="text-[#D4F600] text-stroke font-black text-9xl">
           LEARN BUILD GROW
        </span>
       
      </div>
    </div>
    </div>
  );
}

export default Subscribe;
