import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const Main = lazy(() => import("./pages/Main.tsx"));
const Login = lazy(() => import("./pages/Login.tsx"));
const Register = lazy(() => import("./pages/Register.tsx"));
const Error = lazy(() => import("./pages/Error.tsx"));
const Phone = lazy(() => import("./pages/Phone.tsx"));
const Forgot = lazy(() => import("./pages/Forgot.tsx"));
const Home = lazy(() => import("./pages/Home.tsx"));
// const Sidebar = lazy(() => import("./components/sidebar.tsx"));

// import Sidebar from "./components/sidebar.tsx";
// import RightBar from "./components/RightBar.tsx";
import Loading from "./pages/Loading.tsx";
import Podcast from "./pages/Podcast.tsx";
import Offline from "./pages/Offline.tsx";
import Playlist from "./pages/Playlist.tsx";
import LikedSongs from "./pages/LikedSongs.tsx";
import CreatePlaylist from "./pages/CreatePlaylist.tsx";
import Radio from "./pages/Radio.tsx";
import LoopOriginals from "./pages/LoopOriginals.tsx";
import NewReleases from "./pages/NewReleases.tsx";
import Music from "./pages/Music.tsx";
import Explore from "./pages/Explore.tsx";
import Settings from "./pages/Settings.tsx";
// import Footer from "./components/Footer.tsx";
// import Navbar from "./components/Navbar.tsx";

const App = () => {
  return (
    <>
      <div className="flex">
        <Suspense fallback={<Loading />}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<Error />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/phone" element={<Phone />} />
              <Route path="/forgot-password" element={<Forgot />} />
              <Route path="/podcast" element={<Podcast />} />
              <Route path="/local-music" element={<Offline />} />
              <Route path="/create-playlist" element={<CreatePlaylist />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/liked-songs" element={<LikedSongs />} />
              <Route path="/radio" element={<Radio />} />
              <Route path="/new-releases" element={<NewReleases />} />
              <Route path="/loop-originals" element={<LoopOriginals />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Router>
        </Suspense>
      </div>
    </>
  );
};

export default App;
