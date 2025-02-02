"use client"
import React, { useState, useEffect} from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Heart } from "lucide-react";
import Link from "next/link";

const App: React.FC = () => {
  const [yesSize, setYesSize] = useState(1);
  const [noSize, setNoSize] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    setIsClient(true); 
  }, []);


  const handleNoClick = () => {
    setYesSize(yesSize + 0.2);
    setNoSize(noSize - 0.1);
  };

  const handleYesClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 relative overflow-hidden">
      {/* Floating love shapes */}
      <div className="absolute w-full h-full overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute w-8 h-8 text-red-500  animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <h1 className="text-4xl font-bold text-red-600 mb-8 z-10">
        Will you be my val? {isClient}
      </h1>

      <div className="flex gap-4 z-10">
        <Button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-all"
          style={{ transform: `scale(${yesSize})` }}
          onClick={handleYesClick}
        >
          Yes
        </Button>
        <Button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-all"
          style={{ transform: `scale(${noSize})` }}
          onClick={handleNoClick}
        >
          No
        </Button>
      </div>

      {/* Modal for "Yes" response */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTitle></DialogTitle>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-2xl font-bold text-center">
            Thank you for accepting!  <span className="text-sm">follow me <Link href="https://x.com/nigmaQX" target="_blank"> <b>on Twitter(X) </b> </Link> </span>
          </DialogHeader>
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzZjODQyMzVmZDNjZDM5NTNhZDI2NTg2ZDM1ZTM5ZjM5YTM1YTM3YSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/xT1XGPy39lDKJ5Gc5W/giphy.gif"
            alt="Kissing GIF"
            className="w-full rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;