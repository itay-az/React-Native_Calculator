import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal:10,
        paddingTop:20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      row:{
        display:"flex",
        flexDirection:"row",
        width:'100%',
        height:'15%',
        justifyContent:'space-evenly',
        paddingTop:20,

      },

      text:{
        color:'#000',
        fontSize:24,
        justifyContent:'center',
        alignItems:'center',

      },
      resultRow:{
        display:'flex',
        width:'100%',
        height:'30%',
        flexDirection:'column',
        backgroundColor:'#fff'
      },
      textRes:{
        color:'#000',
        display:'flex',
        alignItems:'flex-end',
        fontSize:48
      },
      button:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'25%',
        height:'60%',
        borderRadius:30,
        backgroundColor:'#E5E4E2'
      },
      buttonGreen:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'25%',
        height:'60%',
        borderRadius:30,
        backgroundColor:'#68B984'
      },
      textRed:{
        color:'#fa1e3c',
        fontSize:24,
        justifyContent:'center',
        alignItems:'center',
      },
      textGreen:{
        color:'#68B984',
        fontSize:30,
        justifyContent:'center',
        alignItems:'center',
      },
      textWhite:{
        color:'#fff',
        fontSize:30,
        justifyContent:'center',
        alignItems:'center',
      }



});


const colors= {
  green:'#68B984',
  white:'#fff',
  red:'#fa1e3c'
}

export default styles;