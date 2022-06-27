import { Heading, Box, Image } from '@chakra-ui/react'
import PageWrapper from '../components/pageWrapper'
import { getGalleryImages } from '../lib/gallery'

export const getStaticProps = async () => {
  return {
    props: {
      imagePaths: getGalleryImages(),
    },
  }
}

// TODO: Add all desired images to gallery, then tweak styling/gap accordingly
export default function Gallery({ imagePaths }) {
  return (
    <PageWrapper>
      <Heading as="h1">Gallery</Heading>
      <Box
        padding={4}
        w="100%"
        maxW="1200px"
        sx={{ columnCount: [1, 2, 3], columnGap: '8px' }}
      >
        {imagePaths.map((image) => (
          <Image
            key={image.alt}
            w="100%"
            mb={2}
            d="inline-block"
            src={image.src}
            alt={image.alt}
          />
        ))}
      </Box>
    </PageWrapper>
  )
}
