import { useLocation } from "react-router";
import {
  Header,
  Posts,
  SideBar,
} from "../../components";
import "./home.css";

export default function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Posts />
        <Posts />
        <SideBar />
      </div>
    </>
  );
}