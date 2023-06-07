
import * as React from 'react';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import TodoList from './src/components/TodoList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewScreen from './Screen/newScreen';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Pagina 2 </Text>
      <Button title="Go to newScreen" onPress={() => navigation.navigate('newScreen')} />
      <Button title="Go to TodoList" onPress={() => navigation.navigate('TodoList')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
<IconRegistry icons={EvaIconsPack} />
<ApplicationProvider {...eva} theme={eva.light}>
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="newScreen" component={NewScreen} />
      <Stack.Screen name="TodoList" component={TodoList} />
    </Stack.Navigator>
  </NavigationContainer>
</ApplicationProvider>
    </>

  );
}

export default App;