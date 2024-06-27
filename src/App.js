import React from "react";
import Header from "./components/Header";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";
import Error from "./routes/Error";
import Cart from "./routes/Cart";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./components/Body";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default appRouter;
