import Lottie from "lottie-react";
import animationData from "../data/loading.json";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: 200, height: 200 }} // Adjust the width and height as needed
      />
    </div>
  );
}
