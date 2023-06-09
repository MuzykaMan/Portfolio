import { View, FlatList, Text, TextInput } from "react-native"
import Level from "../models/Level"
import TitleCell from "../components/TitleCell"
import PageGreeting from "../components/Greeting"


const levels: Level[] = [
  {
    title: 'Level 1',
    concepts: []
  },
  {
    title: 'Level 2',
    concepts: []
  },
  {
    title: 'Level 3',
    concepts: []
  },
  {
    title: 'Level 4',
    concepts: []
  },
  {
    title: 'Level 5',
    concepts: []
  },
  {
    title: 'Level 6',
    concepts: []
  },
  {
    title: 'Level 7',
    concepts: []
  },
  {
    title: 'Level 8',
    concepts: []
  },
  {
    title: 'Level 9',
    concepts: []
  },
  {
    title: 'Level 10',
    concepts: []
  },
  {
    title: 'Level 11',
    concepts: []
  },
  {
    title: 'Level 12',
    concepts: []
  },

]

function LevelScreen() {

  return (
    <View>
      <PageGreeting greeting={"Welcome to my Music Theory App!"} />
      <FlatList
        data={levels}
        renderItem={({ item }) => <TitleCell title={item.title} />} />
    </View>
  )
}

export default LevelScreen