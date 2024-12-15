import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Messege from "./components/Messege";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: (
      <div className="h-screen w-screen">
        <Login />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div className="h-screen w-screen">
        <Signup />
      </div>
    ),
  },
  {
    path: "/message",
    element: <Messege />,
  },
  // Catch-all route for unmatched paths
  { path: "*", element: <Navigate to="/" /> },
]);

function App() {
  const validUser = true;
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
