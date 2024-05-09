import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
  ]);