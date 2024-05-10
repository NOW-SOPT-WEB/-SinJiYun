import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/main",
      element: <MainPage />,
    },
  ]);