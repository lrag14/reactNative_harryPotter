import { Text, View, Image, TouchableOpacity } from 'react-native';

export default function CharacterScreen({ route, navigation }) {
   console.log(route.params.infoCharacter);
   const { actor, house, image, name, ancestry } = route.params.infoCharacter;
   return (
      <View className="flex-1 items-left bg-black">
         <Text className="text-slate-100 p-4 text-2xl text-center">
            Name : {name}
         </Text>
         <Image
            style={{
               width: 320,
               height: 320,
               resizeMode: 'contain',
               marginVertical: 5,
            }}
            source={{ uri: image }}
         />
         <TouchableOpacity
            onPress={() => {
               navigation.navigate('House', {
                  house: house,
               });
            }}>
            <Text className="text-slate-100 p-4 text-2xl text-center">
               House : {house}
            </Text>
         </TouchableOpacity>
         <Text className="text-slate-100 p-2 text-1xl text-center">
            Actor : {actor}
         </Text>
         <Text className="text-slate-100 p-2 text-1xl text-center">
            Ancestry : {ancestry}
         </Text>
      </View>
   );
}
