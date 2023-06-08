
import * as React from 'react';

//pages 
import TodoList from './src/components/TodoList';
import NewScreen from './Screen/newScreen';
//react native
import { View, Text, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//ui kitten
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry  } from '@ui-kitten/components';
import { ThemeContext } from './src/Context/theme-context';

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

  const themeContext = React.useContext(ThemeContext);
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Pagina 2 </Text>
      <Button title="Go to newScreen" onPress={() => navigation.navigate('newScreen')} />
      <Button title="Go to TodoList" onPress={() => navigation.navigate('TodoList')} />
      <Button onPress={themeContext.toggleTheme}>TOGGLE THEME</Button>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <>
<IconRegistry icons={EvaIconsPack} />
<ThemeContext.Provider value={{ theme, toggleTheme }}>
<ApplicationProvider {...eva} theme={eva.light}>
  <NavigationContainer>
      <Stack.Navigator initialRouteName="TodoList">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="newScreen" component={NewScreen} />
      <Stack.Screen name="TodoList" component={TodoList} options={{ title: 'Todo list' }} />
    </Stack.Navigator>
  </NavigationContainer>
</ApplicationProvider>
</ThemeContext.Provider>
    </>

  );
}

export default App;