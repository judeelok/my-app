import { Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

export default function Screen2() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab Two' }} />
      <View>
        <Text>Tab Two Screen</Text>
      </View>
    </>
  );
}
