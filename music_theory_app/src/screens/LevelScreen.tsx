import { View, FlatList, Text } from "react-native"
import Level from "../models/Level"

const levels: Level[] = [
    {
      title: 'Level 1',
      concepts: []
    },
    {
      title: 'Level 2',
      concepts: []
    }
  ]
  
  function LevelScreen() {
  
    return (
    <View>
      <FlatList 
      data={levels}
      renderItem={({item}) => <Text>{item.title}</Text>}  />
    </View>
    )
  }

  export default LevelScreen