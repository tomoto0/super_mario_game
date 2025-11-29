import { useEffect } from "react";

export default function Game() {
  useEffect(() => {
    // Ensure the game loads properly
    document.title = "Super Mario Adventure - Game";
  }, []);

  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      <iframe
        src="/game.html"
        className="w-full h-full border-0"
        title="Super Mario Adventure Game"
        allow="fullscreen"
      />
    </div>
  );
}
