import "./App.css";
import Login from "./Component/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeDetail from "./Component/EmployeeDetail/EmployeeDetail";
import EmployeeList from "./Component/EmployeeList/EmployeeList";
import "./Component/Login/Login.css";
import "./Component/EmployeeList/EmployeeList.css";
import "./Component/EmployeeDetail/EmployeeDetail.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/EmployeeDetail" element={<EmployeeDetail />}></Route>
        <Route path="/EmployeeList" element={<EmployeeList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
