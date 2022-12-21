import React, {useState} from 'react';
import {View,TouchableOpacity,Text,SafeAreaView} from 'react-native';
import styles from './style';
import { firstRow,secondRow,thirdRow,fourthRow } from './Arr';
import * as math from 'mathjs';
import Feather from 'react-native-vector-icons/Feather';

const App = () => {
  const [title,setTitle] = useState('');

  const handleClick = (txt) => {
    if(txt === '=') {
      setTitle(math.evaluate(title));
    } 
    else if(txt ==='DEL') {
      setTitle(title.substring(0,title.length-1));
    }
    else if(txt ==='CLR') {
      setTitle('');
    }
    else if(txt ==='+') {
      setTitle(title + txt);
    }
    else if(txt ==='-') {
      setTitle(title + txt);
    }
    else if(txt ==='X') {
      setTitle(title + '*');
    }
    else if(txt ==='/') {
      setTitle(title + txt);
    }
    else{
      setTitle(title + txt)
    }
  }



  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.resultRow}>
        <Text style={styles.textRes} >{title}</Text>
      </View>

      <View style={styles.newRow}>
        <TouchableOpacity onPress={() => handleClick("DEL")} >
          <Feather name='delete' size={30} color={'#68B984'} /> 
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {firstRow.map((btn => {
          return(
            <TouchableOpacity onPress={() => handleClick(btn.txt)} style={styles.button}>
            <Text style={btn.txt === "X" ? styles.textGreen : styles.text}>{btn.txt}</Text>
          </TouchableOpacity>
          )
        }))}
      </View>

      <View style={styles.row}>
        {secondRow.map((btn => {
          return(
            <TouchableOpacity onPress={() => handleClick(btn.txt)} style={styles.button}>
            <Text style={btn.txt === "+" ? styles.textGreen : styles.text}>{btn.txt}</Text>
          </TouchableOpacity>
          )
        }))}
      </View>

      <View style={styles.row}>
        {thirdRow.map((btn => {
          return(
            <TouchableOpacity onPress={() => handleClick(btn.txt)} style={styles.button}>
            <Text style={btn.txt === "-" ? styles.textGreen : styles.text}>{btn.txt}</Text>
          </TouchableOpacity>
          )
        }))}
      </View>

      <View style={styles.row}>
        {fourthRow.map((btn => {
          return(
            <TouchableOpacity onPress={() => handleClick(btn.txt)} style={btn.txt === "=" ? styles.buttonGreen : styles.button}>
            <Text style={btn.txt === "CLR" ? styles.textRed : btn.txt === "=" ? styles.textWhite : btn.txt === "/" ? styles.textGreen : styles.text}>{btn.txt}</Text>
          </TouchableOpacity>
          )
        }))}
      </View>

    </SafeAreaView>
  )
}

export default App;