import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Landing from "./components/layout/Landing";
// import Auth from "./views/Auth";
// import AuthContextProvider from "./contexts/AuthContext";
// import Dashboard from "./views/Dashboard";
// import ProtectedRoute from "./components/routing/ProtectedRoute";
// import About from "./views/About";
// import PostContextProvider from "./contexts/PostContext";

function App() {
  return (
    // <Router>
    //   <AuthContextProvider>
    //     <PostContextProvider>
    //       <Switch>
    //         <Route exact path="/" component={Landing} />
    //         <Route
    //           exact
    //           path="/login"
    //           render={(props) => <Auth {...props} authRoute="login" />}
    //         />
    //         <Route
    //           exact
    //           path="/register"
    //           render={(props) => <Auth {...props} authRoute="register" />}
    //         />
    //         <ProtectedRoute exact path="/dashboard" component={Dashboard} />
    //         <ProtectedRoute exact path="/about" component={About} />
    //       </Switch>
    //     </PostContextProvider>
    //   </AuthContextProvider>
    // </Router>
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
