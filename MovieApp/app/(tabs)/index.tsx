import { View, Text, StyleSheet } from 'react-native';
import {Link} from 'expo-router';

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-dark-200 font-bold">Welcome home</Text>
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
