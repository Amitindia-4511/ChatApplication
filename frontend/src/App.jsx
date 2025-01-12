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
// import { useAuthStore } from "./store/store";
// import Authenticate from "./components/Authenticate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/message",
    element: <Messege />,
  },
  // {
  //   path: "/",
  //   element: <Authenticate />,
  // },
  // Catch-all route for unmatched paths
  { path: "*", element: <Navigate to="/" /> },
]);

function App() {
  return (
    <main className="h-screen bg-black">
      <RouterProvider router={router} />
      <ToastContainer />
    </main>
  );
}

export default App;
