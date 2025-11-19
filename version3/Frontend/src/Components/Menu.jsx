import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
const Menu = ({ setismenuopen }) => {
  const navigate=useNavigate();
  return (

    <div  className="w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center text-white"
    //   onClick={() => setismenuopen(false)} // optional: close when clicked
    >       
      <h1 className="text-3xl mb-6">Menu</h1>
      <div>
            {/* item 1 */}
            <div className="group flex flex-row  justify-between  ">
                {/* div1  */}
            <div className="flex flex-row gap-6 transition-transform duration-300 group-hover:translate-x-9 group-hover:scale-104">
                <p className="flex items-end  justify-center  text-2xl pb-3">1</p>
            <p className="text-8xl  text-gray-500 font-bold group-hover:text-white
            
            " onClick={() => navigate("/home")}
            > HOME</p>
            </div>
            {/* div2 */}

          <div className="group flex items-end justify-center -rotate-45 group-hover:rotate-0  transition-transform duration-300 ">
             <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    width="80"
    height="80"
    class="fill-current text-gray-100 group-hover:text-[#E0FF00] transition-colors duration-300"
  >
    <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/>
  </svg>
           </div>
           
            </div>
            <div className="w-[80vw] h-0.5 bg-gray-100 mx-auto"></div>

            {/* item 1 */}
            <div className="group flex flex-row justify-between  ">
                {/* div1  */}
            <div className="flex flex-row gap-6 transition-transform duration-300 group-hover:translate-x-9 group-hover:scale-104">
                <p className="flex items-end  justify-center  text-2xl pb-3">2</p>
            <p className="text-8xl  text-gray-500 font-bold group-hover:text-white"
           onClick={() => navigate("/newsapp")}
            > NEWS</p>
            </div>
            {/* div2 */}

          <div className="group flex items-end justify-center -rotate-45 group-hover:rotate-0  transition-transform duration-300 ">
             <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    width="80"
    height="80"
    class="fill-current text-gray-100 group-hover:text-[#E0FF00] transition-colors duration-300"
  >
    <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/>
  </svg>
           </div>
           
            </div>
            <div className="w-[80vw] h-0.5 bg-gray-100 mx-auto"></div>


            {/* item 1 */}
            <div className="group flex flex-row  justify-between ">
                {/* div1  */}
            <div className="flex flex-row gap-6 transition-transform duration-300 group-hover:translate-x-9 group-hover:scale-104">
                <p className="flex items-end  justify-center  text-2xl pb-3">3</p>
            <p className="text-8xl  text-gray-500 font-bold group-hover:text-white"
            onClick={() => navigate("/newsmap")}
            >MAP NEWS</p>
            </div>
            {/* div2 */}
            {/* /newsmap */}


          <div className="group flex items-end justify-center -rotate-45 group-hover:rotate-0  transition-transform duration-300 ">
             <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    width="80"
    height="80"
    class="fill-current text-gray-100 group-hover:text-[#E0FF00] transition-colors duration-300"
  >
    <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/>
  </svg>
           </div>
           
            </div>
            <div className="w-[80vw] h-0.5 bg-gray-100 mx-auto"></div>
            {/* item 1 */}
            <div className="group flex flex-row  justify-between  ">
                {/* div1  */}
            <div className="flex flex-row gap-6 transition-transform duration-300 group-hover:translate-x-9 group-hover:scale-104">
                <p className="flex items-end  justify-center  text-2xl pb-3">4</p>
            <p className="text-8xl  text-gray-500 font-bold group-hover:text-white">STATIESTICS</p>
            </div>
            {/* div2 */}

          <div className="group flex items-end justify-center -rotate-45 group-hover:rotate-0  transition-transform duration-300 ">
             <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    width="80"
    height="80"
    class="fill-current text-gray-100 group-hover:text-[#E0FF00] transition-colors duration-300"
  >
    <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/>
  </svg>
           </div>
           
            </div>
            <div className="w-[80vw] h-0.5 bg-gray-100 mx-auto"></div>
        </div>
    </div>
  );
};

export default Menu;
