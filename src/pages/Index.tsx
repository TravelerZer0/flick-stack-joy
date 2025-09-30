import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SwipeCard } from "@/components/SwipeCard";
import { SwipeButtons } from "@/components/SwipeButtons";
import { profiles, Profile } from "@/data/profiles";
import { toast } from "sonner";
import { Flame } from "lucide-react";

const Index = () => {
  const [currentProfiles, setCurrentProfiles] = useState<Profile[]>(profiles);
  const [removedProfiles, setRemovedProfiles] = useState<Profile[]>([]);

  const handleSwipe = (direction: "left" | "right") => {
    if (currentProfiles.length === 0) return;

    const swipedProfile = currentProfiles[currentProfiles.length - 1];
    
    if (direction === "right") {
      toast.success(`¡Guardaste "${swipedProfile.name}"! 💕`, {
        description: "Este recuerdo quedará en tu corazón para siempre",
      });
    } else {
      toast.info(`Siguiente carta...`, {
        description: "Cada mensaje es especial a su manera",
      });
    }

    setRemovedProfiles([swipedProfile, ...removedProfiles]);
    setCurrentProfiles(currentProfiles.slice(0, -1));
  };

  const handleUndo = () => {
    if (removedProfiles.length === 0) return;
    
    const lastRemoved = removedProfiles[0];
    setCurrentProfiles([...currentProfiles, lastRemoved]);
    setRemovedProfiles(removedProfiles.slice(1));
    toast.success("Perfil restaurado");
  };

  return (
    <div className="min-h-screen bg-gradient-bg flex flex-col items-center justify-center p-4">
      <header className="absolute top-0 left-0 right-0 p-6 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Flame className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Cartas de Amor
          </h1>
        </div>
      </header>

      <main className="w-full max-w-md mx-auto mt-20">
        <div className="relative h-[600px] mb-8">
          <AnimatePresence>
            {currentProfiles.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center p-8 bg-card rounded-3xl shadow-card">
                  <h2 className="text-2xl font-bold mb-4">¡Has leído todas las cartas! 💝</h2>
                  <p className="text-muted-foreground mb-6">
                    Cada mensaje fue escrito con amor especialmente para ti
                  </p>
                  {removedProfiles.length > 0 && (
                    <button
                      onClick={() => {
                        setCurrentProfiles([...profiles]);
                        setRemovedProfiles([]);
                      }}
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
                    >
                      Leer de nuevo
                    </button>
                  )}
                </div>
              </motion.div>
            ) : (
              currentProfiles.map((profile, index) => (
                <SwipeCard
                  key={profile.id}
                  profile={profile}
                  onSwipe={handleSwipe}
                  style={{
                    zIndex: currentProfiles.length - index,
                    transform: `scale(${1 - index * 0.05}) translateY(${index * -10}px)`,
                  }}
                />
              ))
            )}
          </AnimatePresence>
        </div>

        <SwipeButtons
          onNope={() => handleSwipe("left")}
          onLike={() => handleSwipe("right")}
          onUndo={handleUndo}
          canUndo={removedProfiles.length > 0}
        />
      </main>
    </div>
  );
};

export default Index;
