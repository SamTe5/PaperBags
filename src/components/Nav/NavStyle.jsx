import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        height:50,
    },
    logoImg:{
        flex:1,
        width:50,
        height:"auto",      
        resizeMode:"contain",
        backgroundColor:"black",
        
    },
    general:{
        flexDirection:"row",
        flex:1,
        padding:5,
        margin:0,
        backgroundColor:"yellow",
        
    },
    logoC:{
        flex:6,
        justifyContent:"center",       
        
    },
    logoText:{
        fontSize:20,        
    },
    note:{
        flex:1,
        width:100,
    },
    imgContainer:{
        flex:1,
    },
    imgMesaj:{ 
        flex:1,
        width:"auto",
        height:"auto",      
        resizeMode:"contain",   
    }
})

export default styles