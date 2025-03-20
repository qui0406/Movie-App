import { View, Text, StyleSheet } from 'react-native';
import {Link} from 'expo-router';

export default function Index() {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-5xl font-bold text-dark-200">Welcome home hehe</Text>
      <Link href="/movie/avangers">Avangers movie</Link>

    </View>
  );
}

const myStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    flex: 1,
  },
  text: {
    color: 'red', 
  }
});
