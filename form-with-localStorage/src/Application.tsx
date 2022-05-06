import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserForm ,Home} from "./component/index";
import "./App.css"
const Application = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser/" element={<UserForm />}></Route>
        <Route path="/addUser/:userId" element={<UserForm />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
