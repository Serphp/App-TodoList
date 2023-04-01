import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import TodoList from './src/components/TodoList';
import { SafeAreaView } from 'react-native';

const HomeScreen = () => (
  <Layout style={{flex: 1}}>
    <SafeAreaView>
      <TodoList/>
    </SafeAreaView>
    {/* <Text category='h1'>HOME</Text> */}
  </Layout>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <HomeScreen />
  </ApplicationProvider>
);