
// Destructuring/ nested prop object 

function Desprop({life}){

const {school ,git } = life;
    return(
        <>
        <h3>Passing Destructuring Props Links:</h3>
        <a href={school} target = "_blank"> W3schools</a> 
        <br /> 
        <a href={git} target = "_blank">Github</a>
        </>
    )

}

// Further destructuring 
// function Life({life:{school,git}}){
//     return (
//         <>
//         <p>the two websites 
//             1. {school}
//             2.{git}
//         </p>
//         </>
//     )
// }

export default Desprop;