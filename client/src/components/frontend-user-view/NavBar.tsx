import logo from '../../assets/colorspalette.png'; // Assuming you have a logo image in your assets folder
import { useTheme } from "@/components/theme/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { useEffect } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';


function NavBar() {
    const { theme, toggleTheme } = useTheme();
    useEffect(() => {
        document.body.setAttribute('class', theme);
    }, [theme]);
    return (
        <div className="h-[var(--navbar-height)] flex items-center justify-between border-b border-gray-300 dark:border-gray-700">
            <div className="min-w-50 px-5" for-logo>
                <Link to="/">
                    <img src={logo} alt="Logo" className="w-36" />
                </Link>
            </div>

            <div className='flex items-center w-120 bg-gray-200 dark:bg-gray-700 rounded-full h-12 px-5 pl-7 w-full'>
                {/* <AiOutlineSearch style={{fontSize : "1.6rem"}}/> */}
                <input placeholder="Search Palettes" className='w-full bg-transparent focus:outline-none'/>
            </div>


            <div className='flex items-center justify-end gap-3 min-w-70 px-5 '>
                <Switch onClick={toggleTheme} />

                <div className="h-8 w-px bg-gray-300" />

                <div className='flex items-center gap-3'>
                    <div className='justify-center cursor-pointer'>
                        <span className='text-bold text-black dark:text-white hover:underline'>Sign Up</span>
                    </div>
                    <div className='bg-black dark:bg-white h-10 rounded-full flex items-center justify-center px-4 cursor-pointer'>
                        <span className='text-bold text-white dark:text-black'>Log In</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;