

function Footer(){
    const PresentYear = new Date().getFullYear();
    const text = `Copyright © ${PresentYear} Sherlyne Ochieng, All rights reserved `

    return (
        <>
        {/* The curly braces are used to showcase the javascript */}
        {text} 
        </>
    )
    }
    
    export default Footer;
    
