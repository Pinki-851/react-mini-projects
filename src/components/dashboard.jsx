import { Outlet } from "react-router-dom";
import sample from "../assets/video.mp4";
export default function Dashboard() {
  return (
    <div className=" ">
      <h1>Dashboard</h1>

<video className='videoTag fixed z-[-1] w-screen object-cover h-screen top-0 bottom-0 left-0 right-0' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video>
      <Outlet />
      <>header</>
    </div>
  );
}

