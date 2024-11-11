

// Destructuring/ nested prop object 

function Desprop({life}){

const {school ,git } = life;
    return(
        <>
        <p>We are passing the w3school link <a href={school}>{school}</a> <br /> 
        and also am going to call in 
        <a href={git}>{git}</a></p>

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