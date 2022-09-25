import { makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { login, logout, selectUser } from "./features/UserSlice";
import { auth } from "./firebase";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PayPal from "./pages/PayPal";
import Profile from "./pages/Profile";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else{
        dispatch(logout)
      }
    })
    return unsubscribe
  }, [dispatch]);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
      
          <Routes>
             <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<PayPal />} />
            <Route path="/" element={ user!= null ?<Home/>:<Login />} />
          </Routes>
      
      </Router>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#111",
    minHeight: "100vh",
  },
}));

export default App;
