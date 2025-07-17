import Signup from "./components/Signup";
import Home from "./home/Home";
import Premiums from "./premiums/Premiums";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
//import { useAuth } from "./context/AuthProvider";
import { useAuth } from "./context/AuthProvider";
import { Navigate} from "react-router-dom";
function App() {
  // eslint-disable-next-line no-unused-vars
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/premium" element={authUser ?<Premiums /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Toaster/>
      </div>
    </>
  );
}

export default App;
