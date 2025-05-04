import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, ChevronDownIcon, UserCircle } from 'lucide-react'

interface NavbarProps {
  onToggleSidebar: () => void
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between shadow-sm z-50 fixed w-full">
      <button
        onClick={onToggleSidebar}
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      <Link to="/" className="text-xl font-semibold text-gray-800 dark:text-white ml-4">
        🏟️ TeamTrack <span className="text-primary-500 font-bold">Futebol</span>
      </Link>

      <div className="relative ml-auto">
        <button
          onClick={() => setUserMenuOpen((open) => !open)}
          className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
        >
          <UserCircle className="w-6 h-6 mr-2" />
          <span>Usuário</span>
          <ChevronDownIcon className="ml-1 w-4 h-4" />
        </button>
        {userMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg z-50">
            <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Perfil</Link>
            <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Sair</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

