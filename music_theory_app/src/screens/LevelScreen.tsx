import { View, FlatList, Text, TextInput } from "react-native"
import Level from "../models/Level"
import TitleCell from "../components/TitleCell"
import PageGreeting from "../components/Greeting"


const levels: Level[] = [
  {
    title: 'Level One Review',
    concepts: [],
    image: "https://yt3.googleusercontent.com/ytc/AGIKgqPKW39_T9HR-37_mLfl_rGv9vOir0BeAu7-rp4b8A=s176-c-k-c0x00ffffff-no-rj",
    description: 'In this level we will review...'
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
      <PageGreeting greeting={"Welcome to my Music Theory App!"} description={"This was something I wanted to put together for my students"} hasLogo={"https://t4.ftcdn.net/jpg/02/90/67/89/240_F_290678974_AObFgMRPhgffKaXDxykn1y4IXTGB8n68.jpg"} />
      <View>
        <FlatList
          data={levels}
          renderItem={({ item }) => <TitleCell title={item.title} image={item.image} description={item.description} />} />
      </View>
    </View>
  )
}

export default LevelScreen