import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import ListItems from "../components/ListItems";

const Music = () => {
  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div className="bg-gradient-to-b my-2 mr-2 from-purple-800/30 to-neutral-950 rounded-lg w-full overflow-hidden">
          <Header />
          <div className="h-[80vh] pb-20 overflow-y-auto">
            <ListItems />
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
