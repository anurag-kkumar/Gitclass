import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Catogories(){

     const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 200]); // move right 200px

const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
    
    return(
        <div className="relative bg-[url(https://cdn.prod.website-files.com/6584ee98993ef2a2ba17f296/65850001dcdc7fa1686a8490_Noise_Black.webp)] w-full h-[925px] overflow-hidden">
           <motion.img
        src="https://cdn.prod.website-files.com/6584ee98993ef2a2ba17f296/65b70b5321b5e9f99e5e74ba_BB-RAW-19-2.webp"
        alt="Scroll Image"
        width="500"
        height="300"
        style={{ y }}
        className="rounded-2xl shadow-lg mx-36"
      />
             <motion.div
             className="absolute top-52"
      ref={ref}
      style={{ x }}
    >
             <h1 className="verticalmovement   text-transparent text-stroke uppercase font-black text-[20rem]  ">features</h1>

    </motion.div>
      <motion.img
        src="https://ik.imagekit.io/dyp7q5hzjq/New%20Folder/Gemini_Generated_Image_cv96kvcv96kvcv96.png?updatedAt=1762618508909"
        alt="Scroll Image"
        width="400"
        height="300"
        style={{ y }}
        className=" rounded-2xl shadow-lg ml-auto mx-48 bottom-28"
      />
    <div className="w-[500px] h-auto text-white mx-[200px] flex flex-col gap-6 ">
            
                <p className="font-bold text-lg flex flex-row gap-2">
                    <img src="data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2016%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16%209.00377C12.3179%2010.5718%209.40009%2013.6627%207.99633%2017.5C6.59256%2013.6627%203.68213%2010.5718%200%209.00377C3.68213%207.42816%206.59256%204.33725%207.99633%200.5C9.40009%204.33725%2012.3179%207.42816%2016%209.00377Z%22%20fill%3D%22%23D4F700%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E" 
            alt=""
            width="10px"
            height="10px" />
                  Real-Time Updates</p>
                
                <p className="font-bold text-lg flex flex-row gap-2">
                    <img src="data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2016%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16%209.00377C12.3179%2010.5718%209.40009%2013.6627%207.99633%2017.5C6.59256%2013.6627%203.68213%2010.5718%200%209.00377C3.68213%207.42816%206.59256%204.33725%207.99633%200.5C9.40009%204.33725%2012.3179%207.42816%2016%209.00377Z%22%20fill%3D%22%23D4F700%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E" 
            alt=""
            width="10px"
            height="10px" />
                 Smart Location Detection</p>
                  
                <p className="font-bold text-lg flex flex-row gap-2">
                    <img src="data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2016%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16%209.00377C12.3179%2010.5718%209.40009%2013.6627%207.99633%2017.5C6.59256%2013.6627%203.68213%2010.5718%200%209.00377C3.68213%207.42816%206.59256%204.33725%207.99633%200.5C9.40009%204.33725%2012.3179%207.42816%2016%209.00377Z%22%20fill%3D%22%23D4F700%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E" 
            alt=""
            width="10px"
            height="10px" />
                 Interactive Map Links</p>
                  
                <p className="font-bold text-lg flex flex-row gap-2">
                    <img src="data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2016%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16%209.00377C12.3179%2010.5718%209.40009%2013.6627%207.99633%2017.5C6.59256%2013.6627%203.68213%2010.5718%200%209.00377C3.68213%207.42816%206.59256%204.33725%207.99633%200.5C9.40009%204.33725%2012.3179%207.42816%2016%209.00377Z%22%20fill%3D%22%23D4F700%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E" 
            alt=""
            width="10px"
            height="10px" />
                  Safety Alert System</p>
                  
                <p className="font-bold text-lg flex flex-row gap-2">
                    <img src="data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2016%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16%209.00377C12.3179%2010.5718%209.40009%2013.6627%207.99633%2017.5C6.59256%2013.6627%203.68213%2010.5718%200%209.00377C3.68213%207.42816%206.59256%204.33725%207.99633%200.5C9.40009%204.33725%2012.3179%207.42816%2016%209.00377Z%22%20fill%3D%22%23D4F700%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E" 
            alt=""
            width="10px"
            height="10px" />
                  Real-Time Updates</p>
                
                <button className="bg-[#E0FF00] w-[200px] h-[50px] rounded-3xl text-black font-bold">VIEW SECTORS </button>
            
        </div>
        
        </div>
    )
}
export default Catogories;