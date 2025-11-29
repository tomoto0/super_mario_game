import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-600 via-red-700 to-red-900 p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          Super Mario Adventure
        </h1>
        <p className="text-xl md:text-2xl text-yellow-300 mb-8 font-semibold drop-shadow-md">
          A Classic Platformer Game
        </p>
        <p className="text-white text-lg mb-12 drop-shadow-md">
          Jump, collect coins, defeat enemies, and rescue the Princess! 
          Experience the classic platformer adventure with 3 unique worlds and epic boss battles.
        </p>
        
        <div className="flex flex-col gap-4 items-center">
          <Link href="/game">
            <Button 
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              🎮 Play Game
            </Button>
          </Link>
        </div>

        <div className="mt-16 text-white text-sm space-y-2">
          <h2 className="text-xl font-bold mb-4">Game Features:</h2>
          <ul className="text-left inline-block">
            <li>✓ 3 Unique Worlds (Overworld, Underground, Castle)</li>
            <li>✓ Multiple Enemies (Goombas, Koopas, Bowser)</li>
            <li>✓ Power-ups (Mushroom, Fire Flower, Star, 1-UP)</li>
            <li>✓ Classic Platformer Gameplay</li>
            <li>✓ Epic Boss Battle with Bowser</li>
            <li>✓ Retro Sound Effects</li>
          </ul>
        </div>

        <div className="mt-12 text-white text-sm">
          <h3 className="text-lg font-bold mb-3">Controls:</h3>
          <p className="mb-2">
            <span className="bg-gray-800 px-2 py-1 rounded">←→</span> Move | 
            <span className="bg-gray-800 px-2 py-1 rounded ml-2">SPACE</span> Jump | 
            <span className="bg-gray-800 px-2 py-1 rounded ml-2">CTRL</span> Run
          </p>
          <p className="text-xs text-gray-300">Touch controls available on mobile devices</p>
        </div>
      </div>
    </div>
  );
}
