import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
  Link,
} from '@chakra-ui/react'
import PageWrapper from '../components/pageWrapper'
import data from '../data/faq.json'

export const getStaticProps = async () => {
  return {
    props: {
      faqData: data,
    },
  }
}

function FaqItem({ question, answer, link }) {
  return (
    <AccordionItem>
      <Heading as="h2">
        <AccordionButton _expanded={{ bg: '#E6DACE', fontWeight: 'bold' }}>
          <Box flex="1" textAlign="center">
            {question}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel pb={4} textAlign="center" bg="blackAlpha.50">
        {answer}{' '}
        {link && (
          <Container>
            <Link href={link} color="#C3A786" fontWeight="bold">
              Learn More
            </Link>
          </Container>
        )}
      </AccordionPanel>
    </AccordionItem>
  )
}

export default function Faqs({ faqData }) {
  return (
    <PageWrapper>
      <Heading as="h1" textAlign="center">
        Frequently Asked Questions
      </Heading>
      <Accordion w="100%">
        {faqData.map((item) => (
          <FaqItem key={item.question} {...item} />
        ))}
      </Accordion>
    </PageWrapper>
  )
}
