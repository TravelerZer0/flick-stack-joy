import { motion, useMotionValue, useTransform } from "framer-motion";
import { Heart, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SwipeCardProps {
  profile: {
    id: number;
    name: string;
    age: number;
    bio: string;
    image: string;
    distance: number;
  };
  onSwipe: (direction: "left" | "right") => void;
  style?: React.CSSProperties;
}

export const SwipeCard = ({ profile, onSwipe, style }: SwipeCardProps) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = () => {
    const threshold = 100;
    const currentX = x.get();

    if (Math.abs(currentX) > threshold) {
      const direction = currentX > 0 ? "right" : "left";
      onSwipe(direction);
    }
  };

  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);

  return (
    <motion.div
      style={{
        x,
        rotate,
        opacity,
        ...style,
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      className="absolute w-full h-full cursor-grab active:cursor-grabbing"
    >
      <div className="relative w-full h-full bg-gradient-card rounded-3xl overflow-hidden shadow-card">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover"
          draggable={false}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />

        {/* Like indicator */}
        <motion.div
          style={{ opacity: likeOpacity }}
          className="absolute top-8 right-8 border-4 border-like rounded-2xl px-6 py-3 rotate-12"
        >
          <span className="text-4xl font-bold text-like">LIKE</span>
        </motion.div>

        {/* Nope indicator */}
        <motion.div
          style={{ opacity: nopeOpacity }}
          className="absolute top-8 left-8 border-4 border-nope rounded-2xl px-6 py-3 -rotate-12"
        >
          <span className="text-4xl font-bold text-nope">NOPE</span>
        </motion.div>

        {/* Profile info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/95 to-transparent p-6 max-h-[50%]">
          <ScrollArea className="h-full pr-4">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {profile.name}
              </h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart className="h-4 w-4 fill-primary text-primary" />
                <p className="text-sm font-medium">
                  Mes {profile.age} - {profile.distance} días juntos
                </p>
              </div>
              <div className="pt-2 border-t border-primary/20">
                <p className="text-base text-foreground/90 leading-relaxed font-light">
                  {profile.bio}
                </p>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.div>
  );
};
