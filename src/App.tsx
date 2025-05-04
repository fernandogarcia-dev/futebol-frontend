import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import AppRoutes from "./routes/AppRoutes"

import { BrowserRouter as Router } from "react-router-dom"
import { useState } from "react"

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false)

  return (
    <Router>
      <div className="flex h-screen ">
        <div className="flex flex-col flex-1">
          <Navbar onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
          <div className="flex flex-row">
            <Sidebar collapsed={isSidebarCollapsed} />
            <main className={`flex-1 overflow-y-auto mt-6 p-6 transition-all duration-300 ${isSidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
              <AppRoutes />
            </main>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App

