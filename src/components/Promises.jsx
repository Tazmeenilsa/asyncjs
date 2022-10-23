import react from "react";

function Promises() {
    let p = new Promise ((resolve, reject) => { 
        let a = 1 + 1;
        if (a == 2) {
            resolve("succeed")
            
        }
        else{
            reject("failed")
        }
    })

    p.then ((message)=>(
    console.log("Its resolved and " + message)
    ))
    .catch((message)=>console.log('its rejected and ' + message))
return(
    <div>
        <h1>HEllo</h1>
        </div>
)
}
export default Promises