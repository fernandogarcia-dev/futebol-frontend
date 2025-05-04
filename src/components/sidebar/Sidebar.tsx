import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ChevronDown,
  ChevronRight,
  Home,
  Settings,
  User2,
  Users2,
} from 'lucide-react'

const sidebarItems = [
  {
    label: 'Dashboard',
    icon: <Home />,
    to: '/',
  },
  {
    label: 'Atletas',
    icon: <User2 />,
    children: [
      { label: 'Cadastrar', to: '/atletas/cadastrar' },
      { label: 'Listar', to: '/atletas/listar' },
    ],
  },
  {
    label: 'Treinadores',
    icon: <Users2 />,
    children: [
      { label: 'Cadastrar', to: '/treinadores/cadastrar' },
      { label: 'Listar', to: '/treinadores/listar' },
    ],
  },
  {
    label: 'Usuários',
    icon: <Users2 />,
    children: [
      { label: 'Cadastrar', to: '/usuarios/cadastrar' },
      { label: 'Listar', to: '/usuarios/listar' },
    ],
  },
  {
    label: 'Configurações',
    icon: <Settings />,
    to: '/configuracoes',
  },
]

interface SidebarProps {
  collapsed: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})
  const location = useLocation()

  const toggleItem = (label: string) => {
    setOpenItems((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  return (
    <aside className={`bg-white dark:bg-gray-800 border-r dark:border-gray-700 pt-12 fixed h-screen top-0 left-0 z-20 overflow-y-auto transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <ul className="py-6 px-2 space-y-2">
        {sidebarItems.map((item) => (
          <li key={item.label}>
            {item.children ? (
              <>
                <button
                  onClick={() => toggleItem(item.label)}
                  className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                >
                  <span className="text-gray-600 dark:text-gray-300">{item.icon}</span>
                  {!collapsed && <span className="ml-3 text-gray-800 dark:text-gray-200">{item.label}</span>}
                  {!collapsed && (
                    <span className="ml-auto">
                      {openItems[item.label] ? <ChevronDown /> : <ChevronRight />}
                    </span>
                  )}
                </button>
                {openItems[item.label] && !collapsed && (
                  <ul className="ml-8 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link
                          to={child.to}
                          className={`block px-3 py-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${location.pathname === child.to ? 'bg-gray-200 dark:bg-gray-700 font-semibold' : ''}`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                to={item.to!}
                className={`flex items-center px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${location.pathname === item.to ? 'bg-gray-200 dark:bg-gray-700 font-semibold' : ''}`}
              >
                <span className="text-gray-600 dark:text-gray-300">{item.icon}</span>
                {!collapsed && <span className="ml-3 text-gray-800 dark:text-gray-200">{item.label}</span>}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar

