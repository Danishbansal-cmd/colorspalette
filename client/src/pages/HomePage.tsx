import NavBar from "@/components/frontend-user-view/NavBar";
import SideBar from "@/components/frontend-user-view/SideBar";




function HomePage() {
  return (
    <div className="min-w-full">
        <NavBar />

        <div className="flex">
          <SideBar />
          <div className="w-full">ad</div>
        </div>
    </div>
  );
}

export default HomePage;