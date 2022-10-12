import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Analysis from "./components/Analysis/Analysis";
import Blog from "./components/Blog/Blog";
import Main from "./layout/Main";
import Mcq from "./components/Mcq/Mcq";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "home",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        {
          path: "analysis",
          element: <Analysis></Analysis>,
        },
        {
          path: "/home/:homeId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.homeId}`
            );
          },
          element: <Mcq></Mcq>,
        },
      ],
    },

    {
      path: "/blog",
      element: <Blog></Blog>,
    },
    { path: "*", element: <div>This rout is not found</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer autoClose={300}></ToastContainer>
    </div>
  );
}

export default App;
