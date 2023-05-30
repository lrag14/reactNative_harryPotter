import { Text, View, Image } from 'react-native';

export default function CharacterScreen({ route }) {
   console.log(route.params.infoCharacter);
   const { actor, house, image, name, patronus } = route.params.infoCharacter;
   return (
      <View className="flex-1 items-left bg-black">
         <Image
            style={{
               width: 320,
               height: 320,
               resizeMode: 'contain',
               marginVertical: 5,
            }}
            source={{ uri: image }}
         />
      </View>
   );
}
