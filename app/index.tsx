import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Text from "@/components/Text";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components/Button";
import { useRouter } from "expo-router";
import { Link } from "expo-router";

type Props = {};

const WelcomePage = (props: Props) => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container]}>
        <Image
          style={{ width: 75, height: 75 }}
          source={require("@/assets/images/logo.png")}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <View
        style={[
          styles.container,
          { justifyContent: "space-between", paddingTop: 56 },
        ]}
      >
        <Button
          label="Continue"
          onPress={() => {
            alert("Hello World");
          }}
          variant="filled"
        ></Button>
        <Text style={styles.title}>Bronix Starter</Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
});
