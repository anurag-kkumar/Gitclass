import { motion } from "framer-motion";
function Hero() {

  return (
    
    <div className="text-white pt-[190px]">   
        <div className="w-[1009px] h-[237px] m-auto">
           <h1 className="text-8xl font-bold text-center uppercase"> Empowering Safety with WITH </h1>
           <div className="bg-[#D4F600] w-[650px] m-auto"><span  className=" text-black text-8xl font-bold ">TECHNOLOGY</span></div>
        </div>
        {/* <div  className="w-0.5 h-[90px] bg-[#D4F600] mt-[100px] m-auto mb-3"></div> */}

<div  className="w-0.5 h-[90px] mt-[100px] m-auto mb-3">
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: [0, 100, 0] }} // from point → line → point
        transition={{
          duration: 2,          // total time for one cycle
          ease: "easeInOut",    // smooth easing
          repeat: Infinity,     // loop forever
          repeatType: "mirror", // go back and forth
        }}
        className="h-1 bg-[#D4F600] rounded-full"
      />
    </div>
        
        <div className="flex flex-row justify-around">
            <div className="text-2xl font-bold flex flex-col gap-1 uppercase">
               
                Certified by 
                <p>Trusted News Sources</p>
                </div>
            <div className="text-center w-[450px] text-lg font-bold text-gray-300">Navigate the digital landscape with confidence.
                    Navigate your surroundings with confidence. Our unique, outcome-driven news intelligence and safety-focused 
                    solutions inform decisions, ensure awareness, and deliver certainty.</div>
            <div className="w-[300px] h-[60px] flex flex-row  text-white font-bold justify-between">
               <div className="">
                <img src="https://ik.imagekit.io/dyp7q5hzjq/Screenshot%202025-11-08%20132122.png?updatedAt=1762588414408"
                 alt=""
                 width="55px"
                 height="55px"
                 className="m-auto" />
                 <p className="text-center" >Dainik Bhaskar</p>
               </div>
               <div>
                <img src="https://ik.imagekit.io/dyp7q5hzjq/Screenshot%202025-11-08%20132054.png?updatedAt=1762588414132"
                 alt=""
                  width="75px"
                 height="55px"
                 className=""
                  />
                   <p className="text-center " >TOI</p>
               </div>
               <div>
                <img src="https://i0.wp.com/hindupost.in/wp-content/uploads/2023/02/bbc-logo-red-0.jpeg?resize=696%2C464&ssl=1"
                 alt="" 
                  width="75px"
                 height="55px"
                 />
                 
               </div>
            </div>

        </div>
    </div>
  )
}

export default Hero;