
import React from "react";
import { View,Text,StyleSheet} from "react-native"

const Info =({ route })=>{
    const { artist,label,title,year } = route.params;
    return(  
        <View style={styles.box}>  
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.p}>{label}</Text>
            <Text style={styles.p}>{artist}</Text>
            <Text style={styles.p}>{year}</Text>
        </View>   
    )
}

export default Info ;

const styles = StyleSheet.create({
    box:{
    padding: 24,
    backgroundColor: "#eaeaea",
    margin:15,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    },
    title: {
      color: "#20232a",
      textAlign: "center",
      fontSize: 24,
      fontWeight: "bold"
    },
    p:{
    textAlign:'center',
    fontSize: 17,
   
    }
  });