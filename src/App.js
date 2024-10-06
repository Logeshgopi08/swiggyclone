import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Home from "./Components/Home";
import ItemPage from "./Components/ItemPage";

function App() {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/home",
          element:<Home/>
        },
        {
          path:"/restaurant",
          element:<ItemPage/>
        }
      ]
    }
  ])
  return (
    <div className="">
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
