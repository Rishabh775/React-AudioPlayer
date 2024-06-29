import { useState } from "react";
import Header from "../components/Header";
import ListItems from "../components/ListItems";
import Sidebar from "../components/sidebar";
import ReminderModal from "../components/ReminderModal";
import { useAuth } from "../context/UserContext";
import RightBar from "../components/RightBar";
import { useCommunity } from "../context/Community";
// import HeroCarousel from "../components/HeroCarousel";
// import Explore from "../components/Music/Explore";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { userLogged }: any = useAuth();
  const { showCommunity }: any = useCommunity();

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <ReminderModal isOpen={isOpen} close={close} />
      <Sidebar />
      <div className="w-full overflow-hidden rounded-xl my-2 mr-2 bg-gradient-to-b from-purple-800/30 to-neutral-950">
        <Header />
        <div className="h-[80vh] overflow-y-auto pb-20">
          {/* <HeroCarousel /> */}
          {userLogged ? (
            <div className="px-3">
              {/* <h1 className="text-white text-2xl font-semibold">
                Welcome back
              </h1> */}
              <ListItems title="Latest Music" />
              {/* <div>
                  <h4 className="py-4 text-3xl font-semibold">AI Music</h4>
                  <div className="flex md:gap-6 sm:gap-4 gap-2 justify-around">
                    {data?.length > 0
                      ? data.map((item) => (
                          <div key={item.id}>
                            <img
                              src={item.poster}
                              alt=""
                              className="xl:h-[200px] lg:h-[300px] md:h-[220px] sm:h-[200px] h-[100px] xl:w-[80px] lg:w-[200px] md:w-[180px] sm:w-[160px] w-[100px]  rounded-lg object-cover"
                            />
                          </div>
                        ))
                      : ""}
                  </div>
                </div> */}
            </div>
          ) : (
            <div className="mb-2 rounded-lg" onClick={open}>
              {/* <h1 className="text-white text-2xl font-semibold">
                Welcome back
              </h1> */}
              <ListItems />
            </div>
          )}
        </div>
      </div>
      {showCommunity && <RightBar />}
    </>
  );
}
