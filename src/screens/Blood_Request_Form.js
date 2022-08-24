import React from 'react';
import {FlatList, SafeAreaView, Text, TextInput,Button } from 'react-native';
import styled from 'styled-components';

const App = () => {

  const data = [
    {name: 'Blood Group'},
    {name: 'Hospital'},
    {name: 'City'},
    {name: 'Case/'},
    {name: 'Hemoglobin Level'},
    {name: 'Blood Request Date'},
    {name: 'Blood Request Time'},
    {name: 'Attendent Name'},
    {name: 'Attendent Contact Number'},
  ];

  const renderData = ({ item }) => {
    const { name } = item;
    console.log(name);
    
    return (
      <TitleWrapper onPress = { onPressTitle }>
       { name }
  </TitleWrapper>
  // <TxtInput>
  // <TextInput
  //   onChangeText={ (value) => onChangeNumber(value)}
  //   value={number}
  //   placeholder="useless placeholder"
  // />
  // </TxtInput>
  )
  }
   
  const number = 10;
  const onChangeNumber = (value) => console.log(value);

  const onPressTitle = () => console.log('Title is Presses');
  
  return (
    <SafeAreaView>
      <ScrollTitleWrapper>

      <Header>
        <TitleWrapper>
          Blood Request Form
        </TitleWrapper>
        <DetailWrapper>
          Please enter detail below
        </DetailWrapper>
      </Header>
      <TitleWrapper onPress = { onPressTitle }>
          Blood Group
      </TitleWrapper>
      <TxtInput>
      <TextInput
        onChangeText={ (value) => onChangeNumber(value)}
        value={number}
        color='black'
        placeholder="useless placeholder"
      />
      </TxtInput>
      <TitleWrapper onPress = { onPressTitle }>
          Hospital
      </TitleWrapper>
      <TxtInput>
      <TextInput
        onChangeText={ (value) => onChangeNumber(value)}
        value={number}
        color='black'
        placeholder="useless placeholder"
      />
      </TxtInput>
      <TitleWrapper onPress = { onPressTitle }>
          City
      </TitleWrapper>
      <TxtInput>
      <TextInput
        onChangeText={ (value) => onChangeNumber(value)}
        value={number}
        color='black'
        placeholder="useless placeholder"
      />
      </TxtInput>
      <TitleWrapper onPress = { onPressTitle }>
          Case/
      </TitleWrapper>
      <TxtInput>
      <TextInput
        onChangeText={ (value) => onChangeNumber(value)}
        value={number}
        color='black'
        placeholder="useless placeholder"
      />
      </TxtInput>
      <TitleWrapper onPress = { onPressTitle }>
          Hemoglobin Level
      </TitleWrapper>
      <TxtInput>
      <TextInput
        onChangeText={ (value) => onChangeNumber(value)}
        value={number}
        color='black'
        placeholder="useless placeholder"
      />
      </TxtInput>
      <TitleWrapper onPress = { onPressTitle }>
          Blood Request Date
      </TitleWrapper>
      <TxtInput>
      <TextInput
        onChangeText={ (value) => onChangeNumber(value)}
        value={number}
        color='black'
        placeholder="useless placeholder"
      />
      </TxtInput>
      <TitleWrapper onPress = { onPressTitle }>
          Blood Group
      </TitleWrapper>
      <TxtInput>
      <TextInput
        onChangeText={ (value) => onChangeNumber(value)}
        value={number}
        color='black'
        placeholder="useless placeholder"
      />
      </TxtInput>
      <TitleWrapper onPress = { onPressTitle }>
          Blood Request Time
      </TitleWrapper>
      <TxtInput>
      <TextInput
        onChangeText={ (value) => onChangeNumber(value)}
        value={number}
        color='black'
        placeholder="useless placeholder"
      />
      </TxtInput>
      <TitleWrapper onPress = { onPressTitle }>
          Attendant Name
      </TitleWrapper>
      <TxtInput>
      <TextInput
        onChangeText={ (value) => onChangeNumber(value)}
        value={number}
        color='black'
        placeholder="useless placeholder"
      />
      </TxtInput>
      <TitleWrapper onPress = { onPressTitle }>
          Attendant Phone Number
      </TitleWrapper>
      <TxtInput>
      <TextInput
        onChangeText={ (value) => onChangeNumber(value)}
        value={number}
        color='black'
        placeholder="useless placeholder"
      />
      </TxtInput>
      
      <Button 
      title='Submit'
      
        color= 'blue'
        display= 'flex'
        justify_content= 'center'
        border-radius= '20'
        margin= '40'
        padding= '20'
        align_items= 'center'
      ></Button>
      

      </ScrollTitleWrapper>
     </SafeAreaView>
  );
};

export default App;

const Header = styled.View`
  background-color: red;
  display: flex;
  justify-content: center;
  // border-radius: 20px;
  margin-bottom: 40px;
  padding: 20px;
  align-items: center;
`;

const TitleWrapper = styled.Text`
  font-size: 25px
  margin:20px;
`;
// const Button = styled.Button`
//   background-color: red;
//   display: flex;
//   justify-content: center;
//   border-radius: 20px;
//   margin: 20px;
//   padding: 5px;
//   align-items: center;
// `;
const DetailWrapper = styled.Text`
  font-size: 20px
`;

const ScrollTitleWrapper = styled.ScrollView`
`;
const TxtInput = styled.View`
  background-color: white;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  margin: 20px;
  padding: 5px;
  align-items: center;
`;
