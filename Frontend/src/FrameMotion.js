import useState from 'react-hook-use-state';
import { motion } from 'framer-motion';
import '../src/styles/framer.css';
import { PoweroffOutlined } from '@ant-design/icons';

function Framer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="framer">
      <motion.div onClick={() => setIsOpen(!isOpen)} className="card">
        <PoweroffOutlined className="icons" />
        {isOpen && (
          <motion.div>
            <p>
              Its simple yet powerful, allowing you to express complex user
              interactions with robust, semantic markup. The core of the library
              is the motion component. Think of it as a plain HTML or SVG
              element, supercharged with animation capabilities
            </p>
            <br />
            <p>click again to close framer</p>
          </motion.div>
        )}
        <h3 onClick={() => setIsOpen(!isOpen)}>Framer Motion</h3>
      </motion.div>
      <p>
        Framer Motion is a production-ready motion library for React from Framer
      </p>
    </div>
  );
}

export default Framer;
