import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
