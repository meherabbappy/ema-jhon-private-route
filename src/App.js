import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/shop/Shop';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import OrderReview from './Components/OrderReview/OrderReview';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipping from './Components/Shipping/Shipping';

function App() {
  return (
    <div>
    
    <AuthProvider>

    <Router>
     <Header></Header>
       <Switch>

         <Route path = "/shop">
            <Shop></Shop>
         </Route>

         <Route path = "/review">
            <OrderReview></OrderReview>
         </Route>

         <PrivateRoute path = "/inventory">
            <Inventory></Inventory>
         </PrivateRoute>
         <PrivateRoute path = "/shipping">
            <Shipping></Shipping>
         </PrivateRoute>
          <PrivateRoute path ="/placeorder">
          <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path = "/login">
            <Login></Login>
          </Route>
          <Route path = "/register">
            <Register></Register>
          </Route>


         <Route path = "*">
            <NotFound></NotFound>
         </Route>

       </Switch>
     </Router>

    </AuthProvider>
    
    </div>
  );
}

export default App;
