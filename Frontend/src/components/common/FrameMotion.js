import useState from 'react-hook-use-state';
import { motion } from 'framer-motion';

function Framer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div onClick={() => setIsOpen(!isOpen)} className="card">
        <motion.h2>Framer Motion</motion.h2>
        <button>more info</button>
        {isOpen && (
          <motion.div>
            <p>
              Framer Motion is a production-ready motion library for React from
              Framer. Its simple yet powerful, allowing you to express complex
              user interactions with robust, semantic markup. The core of the
              library is the motion component. Think of it as a plain HTML or
              SVG element, supercharged with animation capabilities.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Framer;
