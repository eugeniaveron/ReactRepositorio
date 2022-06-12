import { Link } from "react-router-dom";
import Cartwidget from "./Cartwidget";
import logo from '../data/fotos/manadaverde.png'

const NavBar = () =>{
    return (
        <>
        <div className="w-full bg-green flex justify-center"> 
            <p className="text-base text-white "> 3 y 6 CUOTAS SIN INTERÉS </p>
        </div>
        <div className="fixed z-10 w-full bg-white flex justify-between p-4 items-center shadow-md ">
            <div className="pl-2">
                <Link to={'/'}> <img src={logo} alt='logo' className="w-32"/> </Link> 
            </div>

            <nav>
                <ul className="md:flex gap-8 p-4 ">
                    <li className="font-medium text-metal transform hover:text-gray"><Link to={'/'}>INICIO</Link></li>
                    <li className="font-medium text-metal hover:text-gray"><Link to={'/categorias'}>PRODUCTOS</Link></li>
                    <li className="font-medium text-metal hover:text-gray">CONTACTO</li>
                </ul>
            </nav>

            <div>
                <Cartwidget/>
            </div>
        </div>
        </>
    );
};

export default NavBar