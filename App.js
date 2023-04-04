import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import TodoList from './src/components/TodoList';
import { SafeAreaView } from 'react-native';

const HomeScreen = () => (
  <Layout style={{flex: 1}}>
    <SafeAreaView>
      <TodoList/>
    </SafeAreaView>
  </Layout>
);

export default () => (
  <>
  <IconRegistry icons={EvaIconsPack} />
  <ApplicationProvider {...eva} theme={eva.light}>
  <HomeScreen />
  </ApplicationProvider>
  </>

);