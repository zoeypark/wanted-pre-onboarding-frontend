import { Route, Routes } from "react-router-dom";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Todo from "../pages/Todo";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/todo" element={<Todo/>}></Route>
      </Routes>
    </>
  )
}

export default Router;