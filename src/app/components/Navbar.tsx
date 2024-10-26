
        import Link from "next/link"
        
export default function Navbar (){
    return(
        <div >
        <header style={{backgroundColor:"yellow" , color:"white"}}>
            <nav>
                <ul >
               
                   
                    <li style={{color:"Red"}}>
                        <Link href="/category/crypto">Crypto</Link>
                    </li> 
                    <li style={{color:"Red"}}>
                        <Link href="/products/product1">Laptop</Link>
                    </li>
                  
                </ul>
            </nav>
        </header>
        <div className="bg-black h-44 w-44 grid-flow-row "></div>
      
       </div>
    )
}
    