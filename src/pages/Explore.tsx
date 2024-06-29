import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import ListItems from "../components/ListItems";

const Explore = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-full mt-2 mr-2 bg-gradient-to-b from-purple-800/30 to-neutral-950 rounded-lg">
        <Header />
        <div className="h-[87vh] overflow-y-auto">
          <ListItems start={0} end={5} title="Trends" />
          <ListItems start={5} end={10} title="Romantic Tales" />
          <ListItems start={10} title="Soulful" />
          <ListItems start={0} end={5} title="Party songs" />
          <ListItems start={5} end={10} title="Energetic" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
