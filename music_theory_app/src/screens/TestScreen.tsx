import { FlatList, Pressable, Text, View } from "react-native";
import TitleCell from "../components/TitleCell";
import Test from "../models/Test";

const test: Test[] = [
    {
        questions: 'Is this thing true',
        answers: false,
    },
    {
        questions: 'Is this thing true',
        answers: true
    }
]

function TestScreen() {
    return (
        <View>
            <FlatList
                data={test}
                renderItem={({ item }) => {
                    return (
                        <TitleCell title={item.questions} description={item.answers.toString()} />
                    )
                }} />
        </View>
    )
}

export default TestScreen