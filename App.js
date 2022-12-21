import React, {useState} from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import styles from './style';
import { firstRow,secondRow,thirdRow,fourthRow } from './Arr';
import * as math from 'mathjs';

const App = () => {
  const [title,setTitle] = useState('');
  const [ans,setAns] = useState(null);

  const handleClick = (txt) => {
    console.log()
    if(txt === '=') {
      setAns(math.evaluate(title));
      setTitle(ans);
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
    else if(txt ==='*') {
      setTitle(title + txt);
    }
    else if(txt ==='/') {
      setTitle(title + txt);
    }
    else{
      setTitle(title + txt)
    }
  }



  return (
    <View style={styles.container}>
      <View style={styles.resultRow}>
        <Text style={styles.text} >{title}</Text>
      </View>
      <View style={styles.resultRow}>
        <Text style={styles.text} >{ans}</Text>  
      </View>

      <View style={styles.row}>
        {firstRow.map((btn => {
          return(
            <TouchableOpacity onPress={() => handleClick(btn.txt)} style={styles.btn}>
            <Text style={styles.text}>{btn.txt}</Text>
          </TouchableOpacity>
          )
        }))}
      </View>
      <View style={styles.row}>
        {secondRow.map((btn => {
          return(
            <TouchableOpacity onPress={() => handleClick(btn.txt)} style={styles.btn}>
            <Text style={styles.text}>{btn.txt}</Text>
          </TouchableOpacity>
          )
        }))}
      </View>
      <View style={styles.row}>
        {thirdRow.map((btn => {
          return(
            <TouchableOpacity onPress={() => handleClick(btn.txt)} style={styles.btn}>
            <Text style={styles.text}>{btn.txt}</Text>
          </TouchableOpacity>
          )
        }))}
      </View>
      <View style={styles.row}>
        {fourthRow.map((btn => {
          return(
            <TouchableOpacity onPress={() => handleClick(btn.txt)} style={styles.btn}>
            <Text style={styles.text}>{btn.txt}</Text>
          </TouchableOpacity>
          )
        }))}
      </View>

    </View>
  )
}

export default App;