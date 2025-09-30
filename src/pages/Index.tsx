import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SwipeCard } from "@/components/SwipeCard";
import { profiles, Profile } from "@/data/profiles";
import { Heart } from "lucide-react";

const Index = () => {
  const [currentProfiles, setCurrentProfiles] = useState<Profile[]>(profiles);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= currentProfiles.length) return;

    const timer = setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, currentProfiles.length]);

  const handleSwipe = (direction: "left" | "right") => {
    if (currentIndex >= currentProfiles.length) return;
    setCurrentIndex(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-bg flex flex-col items-center justify-center p-4">
      <header className="absolute top-0 left-0 right-0 p-6 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-3">
          <Heart className="h-8 w-8 text-primary fill-primary animate-pulse" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Cartas de Amor
          </h1>
          <Heart className="h-8 w-8 text-primary fill-primary animate-pulse" />
        </div>
        <div className="flex gap-2">
          {profiles.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 rounded-full transition-all duration-500 ${
                index < currentIndex
                  ? 'w-8 bg-primary'
                  : index === currentIndex
                  ? 'w-12 bg-primary animate-pulse'
                  : 'w-8 bg-muted'
              }`}
            />
          ))}
        </div>
      </header>

      <main className="w-full max-w-md mx-auto mt-32">
        <div className="relative h-[600px] mb-8">
          <AnimatePresence mode="wait">
            {currentIndex >= currentProfiles.length ? (
              <motion.div
                key="complete"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center p-8 bg-card/80 backdrop-blur-sm rounded-3xl shadow-card border border-primary/20">
                  <Heart className="h-16 w-16 text-primary fill-primary mx-auto mb-4 animate-pulse" />
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    ¡Has leído todas las cartas! 💝
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Cada mensaje fue escrito con amor especialmente para ti
                  </p>
                  <button
                    onClick={() => setCurrentIndex(0)}
                    className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
                  >
                    💕 Leer de nuevo 💕
                  </button>
                </div>
              </motion.div>
            ) : (
              <SwipeCard
                key={currentProfiles[currentIndex]?.id}
                profile={currentProfiles[currentIndex]}
                onSwipe={handleSwipe}
              />
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col items-center gap-4">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center"
          >
            <p className="text-muted-foreground text-sm">
              {currentIndex < currentProfiles.length ? (
                <>Desliza o espera para ver la siguiente carta 💌</>
              ) : (
                <>Todas las cartas leídas con amor 💝</>
              )}
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Index;
