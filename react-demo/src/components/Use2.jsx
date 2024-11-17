import { useState } from "react";

//button should say OFF when displayed
function Use2(){
// call useState 

const [isOn, setisON] = useState("OFF")
const color = isOn? "red":"green"; 
function handleClick(){
// going to call in the setTurn t

setisON((isOn)=>!isOn);

}

return (
    <>
    
    <button onClick={handleClick} style={{background:color}}>{isOn? "ON":"OFF"}
    </button>

    </>
)
}

export default Use2;