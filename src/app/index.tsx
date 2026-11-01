import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/icon.png")} style={styles.logo} />
      <Text style={styles.title}>Campus Spots</Text>
      <Text style={styles.subtitle}>Edited for Task 1</Text>
      <View style={styles.card}>
        <Text style={styles.name}>Isaac González</Text>
        <Text style={styles.description}>I come from León, Spain and I study Computer Science</Text>
      <Text style={styles.description}>My favourite place in my home town is the park called "Parque San Isidro" where I go to disconnect</Text>
      </View>
      <View style={styles.squares}>
        <View style={styles.square1}></View>
        <View style={styles.square2}></View>
        <View style={styles.square3}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3d0049",
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#ffffff",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    color: "#cdcedf",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#690283",
    borderRadius: 12,
    padding: 10,
    marginTop: 24,
    marginHorizontal: 20,
  }, 
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#00fa36",
  },
  description: {
    fontSize: 14,
    color: "#569c5a",
    textAlign: "center",
  },
  squares: {
    backgroundColor: "#fffeff",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    
  },
  square1: {
    width: 50,
    height: 50,
    backgroundColor: "#ff0000",
  }, 
  square2: {
    width: 50,
    height: 50,
    backgroundColor: "#00b7ff",
    flex: 1,
  },
  square3: {
    width: 50,
    height: 50,
    backgroundColor: "#d0ff00",
  }
});