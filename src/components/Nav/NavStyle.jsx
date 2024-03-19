import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        height:50,
    },
    general:{
        flexDirection:"row",
        flex:1,
        padding:5,
        margin:0,
        backgroundColor:"yellow",
    },
    logo:{
        flex:6,
        width:100,
    },
    note:{
        flex:1,
        width:100,
    },
    imgMesaj:{
       flex:1,
       width:100,
       height:100,
       resizeMode:"contain",
        
    }
})

export default styles