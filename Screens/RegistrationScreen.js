import { useState } from "react";
import { StyleSheet, ImageBackground, TextInput, View, Text, Dimensions } from "react-native";
import BGImage from "./../Images/bg.png"
import { Button} from "react-native-elements";

export const RegistrationScreen = ()=>{
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const screenHeight = Dimensions.get("window").height;


    return(
        <View style={{ flex: 1, height: "100%"}}>
            <ImageBackground source={require("../Images/bg.png")} style={styles.image}/>
            <View style={styles.layout}>
                <Text style={styles.title}>
                    Реєстрація
                </Text>
                <TextInput placeholder="Логін" value={login} onChangeText={setLogin} style={styles.input}/>
                <TextInput placeholder="Адреса електронної пошти" value={email} onChangeText={setEmail} style={styles.input}/>
                <TextInput placeholder="Пароль" value={password} onChangeText={setPassword} style={styles.input}/>
                <Button title="Показати" onPress={()=>console.log("Показати")}/>
                <Button title="Зареєстуватися" onPress={()=>console.log("Зареєстуватися")} buttonStyle={styles.btnSubmit}/>
                <Button title="Вже є акаунт? Увійти" onPress={()=>console.log("Вже є акаунт? Увійти")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    // justifyContent: 'center',
    // height: "100%",
    // width: "100%",
    height: 1200,
    backgroundColor: "#8C651E",
  },
  layout: {
    zIndex:10,
    height: 'auto',
    marginTop: 200, 
    backgroundColor: "#fff", 
    borderTopLeftRadius: 25, 
    borderTopRightRadius: 25, 
    padding: 16
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.3,
    marginBottom: 33,
    marginTop:92
  },
  input:{
    height: 50,
    backgroundColor:"#F6F6F6",
    color: "#212121",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  btnSubmit: {
    display: "flex",
    paddingHorizontal:16,
    paddingVertical: 32,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  }
});