
import React, { useState } from 'react';
import {
  SafeAreaView,
 StatusBar,
 View,
 StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';





function App(): React.JSX.Element {

  const [Background, setBackground]=useState("pink");

  const changeBackgroundColor=()=>{

    const HexValues="0123456789ABCDEF"
    let color="#"
    for (let i = 0; i < 6; i++) {
     const randomIndex=Math.floor(Math.random()*16);
     color+= HexValues[randomIndex];
      
    }
    return setBackground(color)
  }

  return (
    <>
    <Text style={styles.HeadingText}>Color Changer App</Text>
 <View style={{backgroundColor:Background, flex:1, justifyContent:"center", alignItems:"center"}}>
    
    <View >
   <View>
    <TouchableOpacity  onPress={changeBackgroundColor}>
    <View style={styles.Btn}>
      <Text style={styles.BtnText}>Press to change the color</Text>
      </View>
    </TouchableOpacity>
    </View>
   
    {Background &&
    <View>
    <Text style={{ color:"#000", fontWeight:"bold"}}>
      Hex Code of Background: {Background}
    </Text>
    </View>
    
}
<View ></View>
</View>

   </View>
   </>
  );
}

const styles= StyleSheet.create({
  HeadingText:{
    fontSize:16,
    fontWeight:"bold",
  textAlign:"center"

  },
 
  Btn:{
    width:200,
    height:50,
    backgroundColor:"#000",
    borderRadius:5,
    padding:5,
    margin:5,
    justifyContent:"center",
    alignItems:"center"
   
  },
  BtnText:{
    color:"#FFF",
   
  },
});


export default App;
