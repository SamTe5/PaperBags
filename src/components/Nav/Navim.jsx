import React from "react";
import { Image, SafeAreaView,Text,View } from "react-native";
import styles from "./NavStyle"

const Navim =()=>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.general}>
                <View style={styles.logo}>
                    <Image style={styles.logoImg} source={require("../../../Image/logo.png")}/>
                </View>
                <View style={styles.note}>
    
                </View>
                <View style={styles.imgContainer}>
                    <Image style={styles.imgMesaj} source={require("../../../Image/secret.png")}/>
                </View>
            </View>
            
            
                
                      
        </SafeAreaView>
    )
}


export default Navim;
 
