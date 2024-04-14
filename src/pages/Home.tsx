import Header from "../components/Header";
import ListItems from "../components/ListItems";
import RightBar from "../components/RightBar";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="h-screen flex-1 overflow-y-auto py-2 ">
        <div className="bg-gradient-to-b from-neutral-800 to-neutral-950 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
          <Header>
            <div className="mb-2">
              <h1 className="text-white text-3xl font-semibold">
                Welcome back, Username
              </h1>
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4"> */}
              <ListItems />
              {/* </div> */}
            </div>
          </Header>
        </div>
      </div>
      <RightBar />
      {/* <MusicPlayer musicFile={} /> */}
    </>
  );
}
