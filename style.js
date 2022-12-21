import { StyleSheet } from "react-native";

export const colors= {
  green:'#68B984',
  white:'#fff',
  red:'#fa1e3c',
  black:'#000',
  lightGray:'#E5E4E2'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
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
        color:colors.black,
        fontSize:24,
        justifyContent:'center',
        alignItems:'center',

      },
      resultRow:{
        display:'flex',
        width:'100%',
        height:'30%',
        flexDirection:'column',
        paddingTop:25,
        backgroundColor:colors.white
      },
      textRes:{
        color:colors.black,
        display:'flex',
        alignItems:'flex-end',
        fontSize:48
      },
      button:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'18%',
        height:'60%',
        borderRadius:50,
        backgroundColor:colors.lightGray
      },
      buttonGreen:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'18%',
        height:'60%',
        borderRadius:30,
        backgroundColor:colors.green
      },
      textRed:{
        color:colors.red,
        fontSize:24,
        justifyContent:'center',
        alignItems:'center',
      },
      textGreen:{
        color:colors.green,
        fontWeight:'bold',
        fontSize:30,
        justifyContent:'center',
        alignItems:'center',
      },
      textWhite:{
        color:colors.white,
        fontSize:30,
        justifyContent:'center',
        alignItems:'center',
        fontWeight:'bold',
      },
      deleteBtn:{
          display:'flex',
          justifyContent:'flex-end',
          alignItems:'flex-end',
          borderWidth:1,
          borderColor:'#000'
      },
      newRow:{
        display:'flex',
        width:'100%',
        height:'5%',
        alignItems:'flex-end',
        paddingHorizontal:30
      }



});


export default styles;