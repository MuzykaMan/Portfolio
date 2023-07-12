import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, Pressable, Text, View } from "react-native";
import { RootStackParamList } from "../../App";
import { useEffect, useState } from "react";
import PageGreeting from "../components/Greeting";
import Content from "../models/Content";
import TitleCell from "../components/TitleCell";

const contents: Content[] = [
    {
        information: 'Something interesting and helpful about music theory',
        testLink: 'click here for test'
    },
    {
        information: 'Something else interesting and helpful about music theory',
        testLink: 'click here for test'
    }
]

type Props = NativeStackScreenProps<RootStackParamList, 'Content'>

function ContentScreen(props: Props) {
    const [contentTest, setContentTest] = useState<string | undefined>(undefined)
    useEffect(() => {
        if (contentTest) {
            setContentTest(undefined)
            props.navigation.navigate("Test", { contentTest: contentTest })
        }
    }, [contentTest])
    return (
        <View>
            <PageGreeting greeting={"Welcome to my Music Theory App!"} description={"This was something I wanted to put together for my students"} hasLogo={"https://t4.ftcdn.net/jpg/02/90/67/89/240_F_290678974_AObFgMRPhgffKaXDxykn1y4IXTGB8n68.jpg"} />
            <View>
                {/* <FlatList
                    data={contents}
                    renderItem={({ item }) => {
                        return (
                            <TitleCell title={item.information}
                                description={item.testLink}
                                onPress={() => {
                                    setContentTest(item.testLink)
                                }} />
                        )
                    }} /> */}
            </View>
        </View>
    )
}

export default ContentScreen