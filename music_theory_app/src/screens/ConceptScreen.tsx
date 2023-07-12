import { FlatList, Pressable, View } from "react-native"
import Concept from "../models/Concept"
import PageGreeting from "../components/Greeting"
import TitleCell from "../components/TitleCell"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../App"
import { useEffect, useState } from "react"

const concepts: Concept[] = [
    {
        title: 'First Concept',
        content: 'Something about the first concept'
    },
    {
        title: 'Second Concept',
        content: 'Something about the second concept'
    }

]

type Props = NativeStackScreenProps<RootStackParamList, 'Concept'>;

function ConceptScreen(props: Props) {
    //1. get param which level id was selected
    //2. grab based on level id the concepts array that belongs to that level
    //3. update useState to modify array that needs to be displayed
    const [conceptContent, setConceptContent] = useState<string | undefined>(undefined)
    useEffect(() => {
        if (conceptContent) {
            setConceptContent(undefined)
            props.navigation.navigate("Content", { content: conceptContent })
        }
    }, [conceptContent])
    return (
        <View>
            <PageGreeting greeting={"Welcome to my Music Theory App!"} description={"This was something I wanted to put together for my students"} hasLogo={"https://t4.ftcdn.net/jpg/02/90/67/89/240_F_290678974_AObFgMRPhgffKaXDxykn1y4IXTGB8n68.jpg"} />
            <View>
                <FlatList
                    data={concepts}
                    renderItem={({ item }) => {
                        return (
                            <TitleCell title={item.title}
                                description={item.content}
                                onPress={() => {
                                    setConceptContent(item.content)
                                }} />
                        )
                    }
                    } />
            </View>
        </View>
    )
}

export default ConceptScreen