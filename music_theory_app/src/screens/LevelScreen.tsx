import { View, FlatList, Text, TextInput, Pressable } from "react-native"
import Level from "../models/Level"
import TitleCell from "../components/TitleCell"
import PageGreeting from "../components/Greeting"
import { useEffect, useState } from "react"
import { RootStackParamList } from "../../App"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

type Props = NativeStackScreenProps<RootStackParamList, 'Level'>

const levels: Level[] = [
  {
    id: 1,
    title: 'Level One Review',
    concepts: [
      {
        title: 'First Concept',
        content: 'Something about the first concept'
      },
      {
        title: 'Second Concept',
        content: 'Something about the second concept'
      }

    ],
    image: "https://yt3.googleusercontent.com/ytc/AGIKgqPKW39_T9HR-37_mLfl_rGv9vOir0BeAu7-rp4b8A=s176-c-k-c0x00ffffff-no-rj",
    description: 'In this level we will review words words words words words words words'
  },
  {
    id: 2,
    title: 'Level 2',
    concepts: [
      {
        title: 'First Concept',
        content: 'Something about the first concept'
      },
      {
        title: 'Second Concept',
        content: 'Something about the second concept'
      }

    ]
  },
  {
    id: 3,
    title: 'Level 3',
    concepts: []
  },
  {
    id: 4,
    title: 'Level 4',
    concepts: []
  },
  {
    id: 5,
    title: 'Level 5',
    concepts: []
  },
  {
    id: 6,
    title: 'Level 6',
    concepts: []
  },
  {
    id: 7,
    title: 'Level 7',
    concepts: []
  },
  {
    id: 8,
    title: 'Level 8',
    concepts: []
  },
  {
    id: 9,
    title: 'Level 9',
    concepts: []
  },
  {
    id: 10,
    title: 'Level 10',
    concepts: []
  }

]

function LevelScreen(props: Props) {

  const [levelId, setLevelId] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (levelId) {
      setLevelId(undefined)
      props.navigation.navigate('Concept', { levelId: levelId ?? 0 });
    }
  }, [levelId])
  return (
    <View>
      <PageGreeting greeting={"Welcome to my Music Theory App!"} description={"This was something I wanted to put together for my students"} hasLogo={"https://t4.ftcdn.net/jpg/02/90/67/89/240_F_290678974_AObFgMRPhgffKaXDxykn1y4IXTGB8n68.jpg"} />
      <View>
        <FlatList
          data={levels}
          renderItem={({ item }) => {
            return (
              <TitleCell title={item.title}
                image={item.image}
                description={item.description}
                onPress={() => {
                  setLevelId(item.id)
                }} />
            )
          }} />
      </View>
    </View>
  )
}

export default LevelScreen