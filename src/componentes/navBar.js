
import Cartwidget from "./Cartwidget";

const NavBar = () =>{
    return (
        <div className="fixed w-full bg-green flex justify-between p-4 items-center ">
            <div className="text-2xl font-bold text-white">
                <h1>MANADA</h1> 
            </div>

            <nav>
                <ul className="md:flex gap-8 p-4 font-medium">
                    <li>INICIO</li>
                    <li>PRODUCTOS</li>
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