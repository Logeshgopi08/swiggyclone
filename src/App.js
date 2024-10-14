import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Home from "./Components/Home";
import ItemPage from "./Components/ItemPage";
import { Provider } from "react-redux";
import appStore from "./utlis/redux/appStore";
import CartPage from "./Components/CartPage";
import LoginPage from "./Components/LoginPage";

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
          path:"/restaurant/:resId",
          element:<ItemPage/>
        },
        {
          path:"/cart",
          element:<CartPage/>
        },
        {
          path:"/login",
          element:<LoginPage/>
        }
      ]
    }
  ])
  return (
    <Provider store={appStore}>
    <div className="">
      
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
