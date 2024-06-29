import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { UserProvider } from "./context/UserContext.tsx";
import { MusicPlayerProvider } from "./context/MusicPlayerContext.tsx";
import MusicPlayer from "./components/MusicPlayer.tsx";
import { SongListProvider } from "./context/SongListContext.tsx";
import { CommunityProvider } from "./context/Community.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster reverseOrder={false} position="top-center" />
    <UserProvider>
      <CommunityProvider>
        <MusicPlayerProvider>
          <SongListProvider>
            <App />
            <MusicPlayer />
          </SongListProvider>
        </MusicPlayerProvider>
      </CommunityProvider>
    </UserProvider>
  </React.StrictMode>
);
