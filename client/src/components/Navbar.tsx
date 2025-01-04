import { useState } from 'react';
import { Menu, X, UserRoundSearch, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <UserRoundSearch className="h-8 w-8 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400" />
                        <span className="ml-1 text-2xl font-bold text-gray-800 dark:text-white">SchemeWise</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-800 dark:text-white text-xl hover:text-blue-800 dark:hover:text-blue-400">Home</Link>
                        <Link to="#" className="text-gray-800 dark:text-white text-xl hover:text-blue-800 dark:hover:text-blue-400">Schemes</Link>
                        <Link to="#" className="text-gray-800 dark:text-white text-xl hover:text-blue-800 dark:hover:text-blue-400">About</Link>
                        <Link to="#" className="text-gray-800 dark:text-white text-xl hover:text-blue-800 dark:hover:text-blue-400">Contact</Link>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            {theme === 'dark' ? (
                                <Sun className="h-6 w-6 text-yellow-500" />
                            ) : (
                                <Moon className="h-6 w-6 text-gray-800" />
                            )}
                        </button>

                        {isAuthenticated ? (
                            <>
                                <Link to="/profile" className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500">Profile</Link>
                                <button 
                                    onClick={logout} 
                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link 
                                    to="/login" 
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                >
                                    Login
                                </Link>
                                <Link 
                                    to="/signup" 
                                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            {theme === 'dark' ? (
                                <Sun className="h-6 w-6 text-yellow-500" />
                            ) : (
                                <Moon className="h-6 w-6 text-gray-800 dark:text-white" />
                            )}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-white">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800">
                        <Link to="/" className="block px-3 py-2 text-gray-600 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md">Home</Link>
                        <Link to="#" className="block px-3 py-2 text-gray-600 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md">Schemes</Link>
                        <Link to="#" className="block px-3 py-2 text-gray-600 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md">About</Link>
                        <Link to="#" className="block px-3 py-2 text-gray-600 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md">Contact</Link>

                        {isAuthenticated ? (
                            <>
                                <Link 
                                    to="/profile" 
                                    className="block px-3 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                                >
                                    Profile
                                </Link>
                                <button 
                                    onClick={logout} 
                                    className="block w-full text-left px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link 
                                    to="/login" 
                                    className="block px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
                                    Login
                                </Link>
                                <Link 
                                    to="/signup" 
                                    className="block px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;