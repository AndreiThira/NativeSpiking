import { Button, StatusBar, Text, View } from "react-native";
import styles from "./styling";
import { useState, useContext, useEffect } from "react";
import { TokenContext } from "./Token";
import axios from "axios";

export default function HomePage({navigation}) {
    const [isClicked, setIsClicked] = useState(false)
    const [authMessage, setAuthMessage] = useState("")

    const {token} = useContext(TokenContext)

    useEffect(() => {
      const configuration = {
        method: "get",
        url: "http://192.168.1.226:3000/auth-endpoint",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      axios(configuration).then(({data} ) => {
        setAuthMessage(data.message)
      }).catch((err) => setAuthMessage(err))
    }, [])

    return (
      <>
      <View style={styles.container}>
        <Text>{authMessage}</Text>
        <Text>This is our Home page</Text>
        <StatusBar style="auto" />
        <Button  onPress= {()=>{setIsClicked(true)}} disabled={isClicked} title={!isClicked ? "Click this button" : "Thanks for clicking me"}/>
        <Button title="Click here for Counter" onPress={()=>{navigation.navigate("ClickCount")}}/>
      </View>
      </>
    );
  }
  
