import Footer from "./footer";
import Topnavbar from "./Topnavbar"
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Topnavbar />
            { children }
            <Footer />
        </div>
    );
}
 
export default Layout;