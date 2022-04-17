//styles
import "./Home.css";
//components
import SideBar from "../../components/SideBar/SideBar";
import Main from "../../components/Main/Main";
import TimeLine from "../../components/TimeLine/TimeLine";

export default function Home() {
  return (
    <div className="home-container">
      <SideBar />
      <Main />
      <TimeLine />
    </div>
  );
}
