import { motion } from "framer-motion";
import { Heart, X, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SwipeButtonsProps {
  onNope: () => void;
  onLike: () => void;
  onUndo: () => void;
  canUndo: boolean;
}

export const SwipeButtons = ({ onNope, onLike, onUndo, canUndo }: SwipeButtonsProps) => {
  return (
    <div className="flex items-center justify-center gap-6">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={onNope}
          size="icon"
          className="h-16 w-16 rounded-full bg-background border-2 border-nope hover:bg-nope/10 shadow-lg"
        >
          <X className="h-8 w-8 text-nope" />
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={onUndo}
          size="icon"
          disabled={!canUndo}
          className="h-12 w-12 rounded-full bg-background border-2 border-muted hover:bg-muted/10 shadow-lg disabled:opacity-30"
        >
          <RotateCcw className="h-5 w-5 text-muted-foreground" />
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={onLike}
          size="icon"
          className="h-16 w-16 rounded-full bg-background border-2 border-like hover:bg-like/10 shadow-lg"
        >
          <Heart className="h-8 w-8 text-like fill-like" />
        </Button>
      </motion.div>
    </div>
  );
};
