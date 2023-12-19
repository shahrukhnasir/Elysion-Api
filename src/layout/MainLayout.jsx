import Chat from "../components/Chat/Chat";
import Footer from "../layout/footer/Footer";
import Navbar from "../layout/headerPrimary/Navbar";

const MainLayout = ({ children }) => {

  return (
    <> <Navbar />
          <main>{children}</main>
          <Chat />
          <Footer />
       
    
    </>
  );
};
export default MainLayout;
