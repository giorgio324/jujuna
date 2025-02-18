import { motion } from 'framer-motion';

const Stagger = ({
  index,
  children,
  delay,
  className,
  directionX = 'left-to-right',
}) => {
  const variants = {
    initial: {
      opacity: 0,
      translateX: directionX === 'left-to-right' ? -50 : 50,
    },
    visible: {
      opacity: 1,
      translateX: 0,
    },
  };
  return (
    <motion.div
      variants={variants}
      initial={'initial'}
      transition={{ duration: 0.3, delay: (index + 1) * delay }}
      className={className}
      whileInView={'visible'}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
export default Stagger;
