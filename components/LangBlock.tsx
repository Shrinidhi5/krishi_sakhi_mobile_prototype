import { StyleSheet, Text, View } from "react-native";

export default function LangBlock(props: any) {
  return (
    <View style={styles.container}>
      <Text>{props.symbol}</Text>
      <Text>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,

    width: 100,
    height: 100,
    padding: 16,
    borderColor: '#6ABE4E',
    borderWidth: 4,
    borderRadius: 8
  }
})
