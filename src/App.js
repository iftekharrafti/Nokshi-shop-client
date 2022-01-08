import "./App.css";
import Admin from "./Pages/Admin/Admin";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./context/AuthProvider";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Shipment from "./Pages/Shipment/Shipment";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admin">
          <Admin></Admin>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/shipment">
          <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/products/:id">
            <CheckOut></CheckOut>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
