import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

type Props = {
  isLoading: boolean;
};

export function SearchLoading({ isLoading }: Props) {
  return (
    <AnimatePresence>
      <motion.div className="h-16 flex justify-center items-center">
        <AiOutlineLoading3Quarters className="animate-spin h-6 w-6" />
      </motion.div>
    </AnimatePresence>
  );
}
