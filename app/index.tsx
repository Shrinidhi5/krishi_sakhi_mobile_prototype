import LangBlock from "@/components/LangBlock";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Index() {
  return (
    <SafeAreaView style={styles.body}>
      <View>
        <Text>Select Language</Text>
        <View style={styles.containerRow}>
          <View style={styles.containerCol}>
            <LangBlock symbol={"ക"} name={"Malayam"} />
            <LangBlock symbol={"अ"} name={"Hindi"} />
          </View>
          <View style={styles.containerCol}>
            <LangBlock symbol={"क"} name={"Marathi"} />
            <LangBlock symbol={"A"} name={"English"} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 32,
    paddingTop: 32,
    backgroundColor: '#F4F1EA',
  },

  containerRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },

  containerCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  }
})
