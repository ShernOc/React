/*Having multiple component in one File 
Having the profile and gallery components

- Like having two function in one file 
and we can only have one default export in a component */

// named export
export function Profile(){
    return (
<>
<img
      src="https://m.media-amazon.com/images/I/91RTxlqiz4L._SX342_.jpg"
      alt="Trevor Noah Book"
    />
  
</>
    ); 
}

// named export default 
export default function Gallery(){
    return (
        <>
        <section>
      <h1>Amazing scientists</h1>
       <h1> Sherlyne Was Here</h1>
      <Profile />
      <br></br>
      <Profile />
      <Profile />
    </section></>
    )
    
};



