import {
   FlatList,
   StyleSheet,
   ImageBackground,
   Text,
   TouchableOpacity,
   View,
   Image,
   SafeAreaView,
} from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

const houseImages = {
   Gryffindor: require('../../../assets/Gryffindor.png'),
   Slytherin: require('../../../assets/Slytherin.png'),
   Ravenclaw: require('../../../assets/Ravenclaw.png'),
   Hufflepuff: require('../../../assets/Hufflepuff.png'),
};

export default function HouseScreen({ route, navigation }) {
   const [data, setData] = useState(null);
   const { house } = route.params;

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(
               `https://hp-api.onrender.com/api/characters/house/${house}`,
            );
            setData(response.data);
         } catch (error) {
            console.log(error.response);
         }
      };
      fetchData();
   }, []);

   return data ? (
      <SafeAreaView style={styles.container}>
         <ImageBackground
            source={houseImages[house]}
            style={styles.backgroundImage}>
            <View style={styles.headerContainer}>
               <Text style={styles.headerText}>{route.params.house}</Text>
            </View>
            <FlatList
               data={data}
               renderItem={({ item }) => (
                  <TouchableOpacity
                     style={styles.characterContainer}
                     onPress={() => {
                        navigation.navigate('Home', {
                           infoCharacter: item,
                        });
                     }}>
                     <View style={styles.characterItem}>
                        <Text style={styles.characterName}>{item.name}</Text>
                        <Image
                           style={styles.characterImage}
                           source={{ uri: item.image }}
                        />
                     </View>
                  </TouchableOpacity>
               )}
               keyExtractor={(item, index) => item.id}
               contentContainerStyle={styles.characterRowContainer}
            />
         </ImageBackground>
      </SafeAreaView>
   ) : (
      <Text>No House</Text>
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
   headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
   },
   headerText: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
   },
   characterRowContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
   },
   characterContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
   },
   characterItem: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   characterName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 5,
   },
   characterImage: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
   },
});
