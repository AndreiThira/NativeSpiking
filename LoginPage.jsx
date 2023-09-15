import { StatusBar } from "expo-status-bar";
import { Button, Text, View, TextInput } from "react-native";
import styles from "./styling";
import { useState, useContext } from "react";
import axios from "axios";
import { TokenContext } from "./Token";

export default function LoginPage({ navigation }) {
  const [username, onChangeUsername] = useState("");
  const [password, onChangePassword] = useState("");
  const { setToken } = useContext(TokenContext);

  const handleSubmit = (e) => {
    const configuration = {
      method: "post",
      //most be COMPUTER'S ip address, not just localhost:3000
      url: "http://192.168.1.226:3000/login",
      data: {
        username: username,
        password: password,
      },
    };
    axios(configuration)
      .then(({ data }) => {
        setToken(data.token);
        navigation.navigate("HomePage");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <View style={styles.container}>
        <Text>This is our log-in page</Text>
        <StatusBar style="auto" />
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          onChangeText={onChangeUsername}
          value={username}
          placeholder="enter username"
        />
        <TextInput
          autoCapitalize="none"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="enter password"
        />
        <Button title="Log in" onPress={handleSubmit} />
      </View>
    </>
  );
}
