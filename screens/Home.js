
import React,{ useState } from "react";
import axios from "axios";
import { View,Text, TouchableOpacity,Button,StyleSheet,FlatList, ScrollView } from "react-native"



const Home =({navigation})=>{

    const url1 = 'https://api.netbet.com/development/randomFeed?website=casino&lang=eu&device=desktop&source=list1'
    const url2 = 'https://api.netbet.com/development/randomFeed?website=casino&lang=eu&device=desktop&source=list2'
    const url3 = 'https://api.netbet.com/development/randomFeed?website=casino&lang=eu&device=desktop&source=list3'

    const [data, setData] = useState()


  const getAPiValue= async()=>{

    const requestOne =   await axios.get(url1);
    const requestTwo =   await axios.get(url2);
    const requestThree = await axios.get(url3);
    let AllValue=[];  
      await axios
      .all([requestOne, requestTwo, requestThree])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          const responesThree = responses[2];
 
        AllValue.push(...responseOne.data.data.items, ...responseTwo.data.data.items,...responesThree.data.data.items);
        // console.log(AllValue)
        setData(AllValue)
      })
    )
    .catch(errors => {
      console.error(errors);
    });
    
  }

    return( 
        <ScrollView>  
            <View style={styles.container}>
                <View style={styles.button} >
                    <Button
                        onPress={()=>
                          getAPiValue()
                        }
                        title="Get"
                        color="green"
                        accessibilityLabel="Learn more about this purple button"
                    
                        />
                </View>
                <View style={styles.button} >
                        <Button
                        onPress={()=>{
                           setData([])
                        }}
                        title="Delete"
                        color="red"
                        accessibilityLabel="Learn more about this purple button"
                        /> 
                </View>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) =>  
          <View style={styles.box}>
              <TouchableOpacity
                onPress={()=>{
                  navigation.navigate('Info',{
                    artist:item.artist,
                    title:item.title,
                    year:item.year,
                    label:item.label
                  })
              }}
              >
                  <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>   
          </View>
      }    
      />         
        </ScrollView>   
    )
}
export default Home 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    button: {
      width: '40%',
      height: 65
    },
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
    }

  });