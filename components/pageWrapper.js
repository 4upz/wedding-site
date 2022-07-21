import { Fade, Flex } from '@chakra-ui/react'

export default function PageWrapper({ children, customStyles }) {
  let wrapperStyles = { ...styles.container }
  if (customStyles) {
    wrapperStyles = { ...wrapperStyles, ...customStyles }
  }

  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return (
    <Fade
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'linear' }} // Set the transition to linear
    >
      <Flex {...wrapperStyles}>{children}</Flex>
    </Fade>
  )
}

const styles = {
  container: {
    margin: 'auto',
    pt: 10,
    pb: 30,
    px: { base: '1rem', lg: '2rem' },
    justify: 'center',
    alignItems: 'center',
    flexDir: 'column',
    gap: 10,
  },
}
