import { motion } from 'framer-motion';

const Reveal = ({ children, direction = 'left-to-right' }) => {
  const variants = {
    initial: {
      opacity: 0,
      y: direction === 'down-to-up' ? 30 : direction === 'up-to-down' ? -30 : 0,
      x:
        direction === 'left-to-right'
          ? -30
          : direction === 'right-to-left'
          ? 30
          : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial='initial'
      whileInView={'visible'}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
