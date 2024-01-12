import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './Component/Error';
import Fileupload from './Component/Admin/Fileupload';
import AdminHome from './Component/Admin/AdminHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Addwallet from './Component/Admin/Addwallet';
import UserHome from './Component/User/UserHome';
import Transaction from './Component/User/Transaction';


function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route path="/file" element={<Fileupload />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/addwallet" element={<Addwallet/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/user" element={<UserHome/>} />
          <Route path="/trans" element={<Transaction/>} />
          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
