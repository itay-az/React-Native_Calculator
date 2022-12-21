import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:30,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
      },
      row:{
        display:"flex",
        flexDirection:"row",
        width:'100%',
        height:'20%',
        justifyContent:'space-evenly',
        paddingTop:20

      },

      text:{
        color:'#fff',
        fontSize:24,
        justifyContent:'center',
        alignItems:'center'
      },
      resultRow:{
        display:'flex',
        width:'100%',
        height:'10%',
        flexDirection:'column',
      },
      textRes:{
        color:'#fff',
        display:'flex',
        alignItems:'flex-end'
      },
      btn:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'25%',
        height:'100%',
      }


});

export default styles;