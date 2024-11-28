import { Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

export default function Screen3() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab Three' }} />
      <Text>Tab Screen 3</Text>
    </>
  );
}
