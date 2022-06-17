import {useState} from "react";

function Darkmode() {
const[darkmode , setDarkmode] = useState(false)

const enableDarkmode = () => {
    setDarkmode(!darkmode)
    if(darkmode == true){
        document.body.style.background = "black";
        document.body.style.color = "red";
    
    }else{
        document.body.style.background = "gray";
        document.body.style.color = "purple";

    }
}

const bstyle = {
    background: "white",
    padding: "20px",
    fontweigth: "600",
    cursor: "pointer"
}

    return ( 
        <>
           <h1>hello world</h1>
           <button style={bstyle} onClick={() => enableDarkmode()}>MODE</button>
        </>
     );
}

export default Darkmode;
