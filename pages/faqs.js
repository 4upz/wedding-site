import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from '@chakra-ui/react'
import PageWrapper from '../components/pageWrapper'

function faqItem({ question, answer }) {}

export default function Faqs() {
  return (
    <PageWrapper>
      <Heading as="h1">Frequently Asked Questions</Heading>
      <Accordion w="100%">
        <AccordionItem>
          <Heading as="h2" size="md">
            <AccordionButton>
              <Box flex="1" textAlign="center">
                How do I get started?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </PageWrapper>
  )
}
