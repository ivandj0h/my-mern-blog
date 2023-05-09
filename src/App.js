import {TopBar} from "./components";
import {
  Home,
  Single,
  Settings,
  Write,
  Login,
  Register,
} from "./pages";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  const currentUser = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={ currentUser ? <Home/> : <Register /> } />
        <Route path="/register" element={ currentUser ? <Home /> : <Register /> } />
        <Route path="/login" element={ currentUser ? <Home /> : <Login /> } />
        <Route path="/post/:id" element={ <Single /> } />
        <Route path="/write" element={ currentUser ? <Write /> : <Login /> } />
        <Route path="/settings" element={ currentUser ? <Settings /> : <Login /> } />
      </Routes>
  </Router>
  );
}

