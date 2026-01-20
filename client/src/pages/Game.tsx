import { useEffect } from "react";

export default function Game() {
  useEffect(() => {
    // Ensure the game loads properly
  }, []);

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      <div className="sr-only">
        <h1>Super Mario Adventure</h1>
        <h2>Rescue the Princess from Bowser in this classic platformer</h2>
      </div>
      <iframe
        src="/game.html"
        className="w-full h-full border-0"
        title="Super Mario Adventure Game"
        allow="fullscreen"
      />
    </div>
  );
}
