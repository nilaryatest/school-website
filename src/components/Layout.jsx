import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"

function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow animate-fadeIn">
                <Outlet />
            </main>

            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default Layout
