import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, Pressable, Text, View } from "react-native";
import { RootStackParamList } from "../../App";
import { useEffect, useState } from "react";
import PageGreeting from "../components/Greeting";
import Content from "../components/Content";
import TitleCell from "../components/TitleCell";
import DisplayContent from "../components/Content";

const contents = [
    {
        title: 'Something interesting and helpful about music theory',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
            <FlatList
                data={contents}
                renderItem={({ item }) => {
                    return (
                        <DisplayContent title={item.title} content={item.content} />
                    )
                }} />
        </View>
    )
}

export default ContentScreen