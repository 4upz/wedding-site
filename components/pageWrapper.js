import { Flex } from '@chakra-ui/react'

export default function PageWrapper({ children, customStyles }) {
  let wrapperStyles = { ...styles.container }
  if (customStyles) {
    wrapperStyles = { ...wrapperStyles, ...customStyles }
  }
  return <Flex {...wrapperStyles}>{children}</Flex>
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
