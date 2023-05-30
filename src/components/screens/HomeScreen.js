import React, { useEffect, useState } from 'react';
import {
   View,
   Text,
   StyleSheet,
   ImageBackground,
   FlatList,
   Image,
   TouchableOpacity,
   SafeAreaView,
} from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(
               'https://hp-api.onrender.com/api/characters',
            );
            setData(response.data);
            setIsLoading(false);
         } catch (error) {
            console.log(error.response);
         }
      };
      fetchData();
   }, []);

   return (
      <SafeAreaView style={styles.container}>
         <ImageBackground
            source={require('../../../assets/bgRound.png')}
            style={styles.backgroundImage}>
            <FlatList
               data={data.slice(0, 9)}
               renderItem={({ item }) => (
                  <TouchableOpacity
                     style={styles.characterContainer}
                     onPress={() => {
                        navigation.navigate('Character', {
                           infoCharacter: item,
                        });
                     }}>
                     <Text style={styles.characterName}>{item.name}</Text>
                     <Image
                        style={styles.characterImage}
                        source={{ uri: item.image }}
                     />
                  </TouchableOpacity>
               )}
               keyExtractor={(item) => item.id}
            />
         </ImageBackground>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      backgroundColor: 'black',
   },
   characterContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
   },
   characterName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 5,
   },
   characterImage: {
      width: 280,
      height: 280,
      resizeMode: 'contain',
   },
});
