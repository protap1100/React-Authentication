import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className="flex gap-5 justify-center bg-blue-200 text-white py-4">
                    <li className="bg-green-600 px-3 py-1 rounded hover:bg-green-700 font-bold" ><Link to='/'>Home</Link></li>
                    <li className="bg-green-600 px-3 py-1 rounded hover:bg-green-700 font-bold" ><Link to='/login'>Login</Link></li>
                    <li className="bg-green-600 px-3 py-1 rounded hover:bg-green-700 font-bold" ><Link to='/register'>Register</Link></li>
                    <li className="bg-green-600 px-3 py-1 rounded hover:bg-green-700 font-bold" ><Link to='/product'>Product</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;