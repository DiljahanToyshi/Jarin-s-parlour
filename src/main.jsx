import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home/Home/Home.jsx";
import ContactUS from "./Home/Home/Pages/Contact/ContactUS.jsx";
import Team from "./Home/Home/Pages/Team/Team.jsx";
import Portfolio from "./Home/Home/Pages/Portfolio/Portfolio.jsx";
import Login from "./Home/Home/Pages/Login/Login.jsx";
import SignUp from "./Home/Home/Pages/Signup/SignUp.jsx";
import AuthProvider from "./Home/Home/Components/Providers/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./Home/Home/Pages/Layout/Dashboard.jsx";
import Book from "./Home/Home/Pages/Dashboard/Book.jsx";
import OrderList from './Home/Home/Pages/Dashboard/OrderList';
import AddService from './Home/Home/Pages/Dashboard/AddService';
import MakeAdmin from './Home/Home/Pages/Dashboard/MakeAdmin';
import ManageService from "./Home/Home/Pages/Dashboard/ManageService.jsx";
import BookingList from './Home/Home/Pages/Dashboard/BookingList';
import PrivateRoute from './Home/Home/Components/Route/PrivateRoute';
import AdminRoute from "./Home/Home/Components/Route/AdminRoute.jsx";
import Review from "./Home/Home/Pages/Dashboard/Review.jsx";
import UpdateCard from "./Home/Home/Components/Card/UpdateCard.jsx";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "portfolio", element: <Portfolio></Portfolio> },

      { path: "contact", element: <ContactUS></ContactUS> },
      { path: "team", element: <Team></Team> },
      { path: "login", element: <Login></Login> },
      { path: "signup", element: <SignUp></SignUp> },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "book",
        element: <Book></Book>,
      },
      {
        path: "orderList",
        element: <AdminRoute><OrderList></OrderList></AdminRoute>,
      },
      {
        path: "addService",
        element:<AdminRoute> <AddService></AddService></AdminRoute>,
      },
      {
        path: "makeAdmin",
        element:<AdminRoute> <MakeAdmin></MakeAdmin> </AdminRoute>,
      },
      {
        path: "manageService",
        element:<AdminRoute> <ManageService></ManageService></AdminRoute>,
   },
      {
        path: "bookinkgList",
        element: <BookingList></BookingList>,
      },
     
      {
        path: "review",
        element: <Review></Review>,
      },
      {
        path: "manageService/:id",
        element:<UpdateCard></UpdateCard>,
        loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>{" "}
  </React.StrictMode>
);
