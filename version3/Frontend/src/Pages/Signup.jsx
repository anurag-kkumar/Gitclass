import Templet from "../Components/Templet";
// import loginImg from "../assets/logimg.jpg"
const Signup =({setLoggedIn})=>{

return(
<Templet
     title="Welecome back"
    desc1="build skill for today tommorrow and beyond."
    descr2="Education to future proof your career."
    // image={loginImg}
    formtypes="signup"
    setLoggedIn={setLoggedIn}
/>

);

}
export default Signup;