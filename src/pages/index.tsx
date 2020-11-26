import { Heading, Text, Box } from '@chakra-ui/react'
import { Layout } from 'components/Layout'

const IndexPage = () => (
  <Layout>
    <Box textAlign="center">
      <Heading fontSize="lg">Next, Typescript with ChakraUI</Heading>
      <Text color="gray.400">
        Edit <code>./src/index.tsx</code>
      </Text>
    </Box>
  </Layout>
)

export default IndexPage
