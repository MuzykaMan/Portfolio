import { TextInput, View } from "react-native";
import Text from "../components/Text";

function Home(){
  //
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text greeting="Hello Robert"></Text>
          <Text greeting="Goodbye Robert" color="green" fontSize={40}></Text>
        </View>
      );
}

export default Home