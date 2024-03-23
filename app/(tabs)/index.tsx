import { Button } from "@/components/Button";
import { Alert, StyleSheet, View, useColorScheme } from "react-native";
import Text from "@/components/Text";
import { supabase } from "@/lib/supabase";
import { useSession } from "@/providers/AuthProvider";
export default function TabOneScreen() {
  const session = useSession();
  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  async function signInWithEmail() {
    const {
      data: { session },
      error,
    } = await supabase.auth.signInWithPassword({
      email: "",
      password: "",
    });

    if (error) Alert.alert(error.message);
  }

  async function signUpWithEmail() {
    const { error } = await supabase.auth.signUp({
      email: "",
      password: "",
    });

    if (error) Alert.alert(error.message);
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      color: "red",
      // backgroundColor: "green",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      textDecorationColor: "red",
      color: "white",
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One123</Text>
      <View style={styles.separator} />
      <Text style={styles.title}>{session?.user.email}</Text>
      <View
        style={{
          padding: 0,
          margin: 0,
          gap: 10,
        }}
      >
        <Button
          onPress={async () => {
            signUpWithEmail();
          }}
          text="Press me to sign up
           with ekim bronix"
        />
        <Button
          onPress={async () => {
            signInWithEmail();
          }}
          text="Press me to sign in with ekim bronix"
        />
        <Button
          onPress={async () => {
            signOut();
          }}
          text="sign out"
        />
      </View>
    </View>
  );
}
