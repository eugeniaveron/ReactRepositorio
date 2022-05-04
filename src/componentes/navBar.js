import { Link } from "react-router-dom";
import Cartwidget from "./Cartwidget";
import logo from '../data/fotos/manadalogo.png'

const NavBar = () =>{
    return (
        <div className="fixed w-full bg-green flex justify-between p-4 items-center ">
            <div className="text-2xl font-bold text-white">
                <Link to={'/'}> <img src={logo} alt='logo' className="w-28"/> </Link> 
            </div>

            <nav>
                <ul className="md:flex gap-8 p-4 font-medium">
                    <li><Link to={'/'}>INICIO</Link></li>
                    <li><Link to={'/categorias'}>PRODUCTOS</Link></li>
                    <li>CONTACTO</li>
                </ul>
            </nav>

            <div>
                <Cartwidget/>
            </div>
        </div>
    );
};

export default NavBar