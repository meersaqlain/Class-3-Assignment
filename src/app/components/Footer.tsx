import Link from "next/link"

const Footer = () =>{
    return(
        <footer>
            <div className="text-white bg-black flex justify-center">
            <p>Copyright &copy; 2024  Designed By Meer Saqlain. All rights reserved.</p>
            <div >
            <Link href="">Home</Link>
            </div>
            <div>
            <Link href="">About</Link>
            </div>
            <div>
            <Link href="">Contacts</Link>
            </div>
            </div>
        </footer>
    )
}

export default Footer