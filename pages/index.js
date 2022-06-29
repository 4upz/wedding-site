import { Flex, Stack, Heading, Button, Text, Box, Fade } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

export default function Home() {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return (
    <Fade variants={variants} {...styles.animated}>
      <Flex {...styles.container}>
        <Box {...styles.imageBox}>
          <Box {...styles.triangle} />
          <Box {...styles.imageContainer}>
            <Image
              placeholder="blur"
              blurDataURL="/us2.jpeg"
              src="/us2.jpeg"
              alt="Picture of the couple"
              {...styles.image}
            />
          </Box>
        </Box>
        <Stack {...styles.stack}>
          <Heading as="h1" fontSize={{ base: '56px', lg: '108px' }}>
            Arik & Chelsey
          </Heading>
          <Text as="h4" {...styles.subtitle}>
            September <span>4th</span>, 2022
          </Text>
          <Box>
            <NextLink href="/rsvp">
              <Button
                my={6}
                size="lg"
                as="a"
                cursor="pointer"
                w={{ base: '100px', lg: '150px' }}
                h={{ base: '50px', lg: '70px' }}
                fontSize={{ base: '24px', lg: '32px' }}
              >
                RSVP
              </Button>
            </NextLink>
          </Box>
        </Stack>
      </Flex>
    </Fade>
  )
}

const styles = {
  animated: {
    initial: 'hidden',
    animate: 'enter',
    exit: 'exit',
    transition: { type: 'linear' },
  },
  subtitle: {
    fontSize: { base: '24px', md: '36px' },
    sx: {
      span: {
        fontWeight: 'bold',
        fontFamily: 'heading',
        fontSize: { base: '36px', md: '48px' },
        letterSpacing: '6px',
      },
    },
  },
  container: {
    gap: { base: 30, lg: 100 },
    margin: 'auto',
    pt: 10,
    pb: 30,
    px: { base: '1rem', lg: '2rem' },
    justify: 'center',
    alignItems: 'center',
    flexDirection: { base: 'column', lg: 'row' },
  },
  imageBox: {
    position: 'relative',
    border: 'solid 6px #E6DACE',
    width: { base: '100%', lg: '40%' },
    maxHeight: '100%',
    mr: { base: 0, lg: '50px' },
  },
  imageContainer: {
    position: 'relative',
    background: 'transparent',
    top: { base: '-25px', lg: 0 },
    left: { base: '5%', lg: 0 },
    width: { base: '90%', lg: '100%' },
    margin: { sm: 'auto', lg: 0 },
    py: { base: 0, lg: 5 },
    sx: {
      span: {
        boxShadow: '-20px 20px 20px rgba(0, 0, 0, 0.25)',
        transform: { sm: 'translate(-50%, 0)', lg: 'unset' },
        left: { sm: '45%', lg: '30%' },
        right: { sm: 'unset', lg: 0 },
      },
    },
  },
  triangle: {
    display: { base: 'none', md: 'initial' },
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translate(0, -50%)',
    width: 0,
    height: 0,
    borderTop: '80px solid transparent',
    borderBottom: '80px solid transparent',
    borderLeft: '120px solid #E6DACE',
  },
  image: {
    width: 552,
    height: 782,
  },
  stack: {
    justify: 'center',
    alignItems: 'center',
    w: { base: 'auto', lg: 600 },
    spacing: 2,
  },
}
