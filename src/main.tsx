import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import React from "react";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Asset from "./pages/asset.tsx";
import Market from "./pages/market.tsx";
import Orcale from "./pages/orcale.tsx";
import { Web3Provider } from "./utils/provider/web3Provider.tsx";
import Navbar from "./components/Common/Navbar.tsx";
import {Outlet} from "react-router-dom";
import Footer from "@/components/Common/Footer.tsx"
import { Toaster } from "@/components/ui/sonner"




const Layout: React.FC = () => {
  return (
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      <Toaster />
      </>
  );
};

export default Layout;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/asset",
        element: <Asset />,
      },
      {
        path: "/market",
        element: < Market />,
      },
      {
        path: "/oracle",
        element: < Orcale/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
  <Web3Provider>
  <RouterProvider router={router} />
  </Web3Provider>
 </>
);
