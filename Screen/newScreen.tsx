import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function NewScreen() {
    return (
      <View style={styles.container}>
        <Text>Hola este es new Screen</Text>
      </View>
    );
  };

  export default NewScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  