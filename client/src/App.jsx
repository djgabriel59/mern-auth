import { BrowserRouter, Route, Router, Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SingUp from "./pages/SignUp";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SingUp />} />
        <Route path="/profile" element={<Profile />} />
      </Router>
    </BrowserRouter>
  )
}

export default App
