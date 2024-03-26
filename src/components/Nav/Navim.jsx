import React from "react";
import { Image, SafeAreaView,Text,View } from "react-native";
import styles from "./NavStyle"

const Navim =()=>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.general}>
                <View style={styles.logoC}>
                    <Text style={styles.logoText}>PaperBag</Text>
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
 
