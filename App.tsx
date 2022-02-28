import { StatusBar } from 'expo-status-bar'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client'
import { AxieURI } from '@utils/constants'

const client = new ApolloClient({
  uri: AxieURI,
  cache: new InMemoryCache(),
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text> Hello World! </Text>
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
  )
}

AppRegistry.registerComponent('axie-client', () => App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
