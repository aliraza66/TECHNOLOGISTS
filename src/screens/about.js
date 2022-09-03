import React from "react";
import { Text,TextInput,Button } from "@react-native-material/core";
import { ScrollView,TouchableOpacity } from "react-native";

const App = () => (
  <ScrollView>
  <Text variant="h4" style={{  
    backgroundColor:'red',justifyContent:'center',color:"white",textAlign:"center",height:50,textAlignVertical:'center' }}>
    About
  </Text>
  <Text variant="h5"
  style={{color:'white',textDecorationLine:'underline',marginLeft:15,marginTop:5,marginBottom:2}}>
    Introduction:
  </Text>
  <Text
  style={{color:'white',marginLeft:20,marginRight:10}}>
  Anjman e Islaah o Falaah e Aama (AIFA) is a welfare foundation which is working in more than 20 cities of Pakistan.
  AIFA is founded on July 30 2016.
  </Text>
  <Text variant="h5"
  style={{color:'white',textDecorationLine:'underline',marginLeft:15,marginTop:5,marginBottom:2}}>
    Our Missions:
  </Text>
  <Text
  style={{color:'white',marginLeft:20,marginRight:10}}>
  1. Blood Donation in Case of Emergency.\br
2-To Engaged in Prosperity Betterment and Defence for Human Beings./br
3-Financial Aid Facilitation for Poor, Orphans and Widows.
4-To Strive for Justice & Peace for Society.
5-To Curp the Menace of Cruelty & Injustice.
(To Raise Voice Against Cruelty & Injustice)
6-To Help The People In Good Deeds & Healthy Acts.
7-To Preach For Good Deeds & Forbid from Bad Deeds.
8-To spread The Religion of Islam & Abide by its Rules & Regulations through Preaching in the Letter and Spirit.
9-To Fight Against Poverty, Inflation & Illiteracy.
  </Text>
  <Text variant="h5"
  style={{color:'white',textDecorationLine:'underline',marginLeft:15,marginTop:5,marginBottom:2}}>
    Founder & President:
  </Text>
  <Text
  variant="h6"
  style={{color:'white',marginLeft:20,marginRight:10,}}>
    Muhammad Mukarram Munir
  </Text>
  <Text style={{color:'white',marginLeft:20,marginRight:10}}>
    mmukarrammunir786@Gmail.com
    </Text>
    <Text style={{color:'white',marginLeft:20,marginRight:10,}}>
     03102555880
    </Text>
   </ScrollView>
);

export default App