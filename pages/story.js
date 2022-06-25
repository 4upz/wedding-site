import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import StoryTab from '../components/storyTab'
import PageWrapper from '../components/pageWrapper'

export default function Story() {
  return (
    <PageWrapper>
      <Heading as="h1">As Told By</Heading>
      <Tabs align="center" isFitted>
        <TabList mb="1em">
          <Tab {...styles.tabTitle}>Arik</Tab>
          <Tab {...styles.tabTitle}>Chelsey</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <StoryTab partner="Chelsey" />
          </TabPanel>
          <TabPanel>
            <StoryTab partner="Arik" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </PageWrapper>
  )
}

const styles = {
  tabTitle: {
    fontSize: '32px',
  },
}
