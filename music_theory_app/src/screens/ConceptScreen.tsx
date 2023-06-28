import { FlatList, View } from "react-native"
import Concept from "../models/Concept"
import PageGreeting from "../components/Greeting"
import TitleCell from "../components/TitleCell"

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

function ConceptScreen() {
    //1. get param which level id was selected
    //2. grab based on level id the concepts array that belongs to that level
    //3. update useState to modify array that needs to be displayed
    return (
        <View>
            <PageGreeting greeting={"Welcome to my Music Theory App!"} description={"This was something I wanted to put together for my students"} hasLogo={"https://t4.ftcdn.net/jpg/02/90/67/89/240_F_290678974_AObFgMRPhgffKaXDxykn1y4IXTGB8n68.jpg"} />
            <View>
                <FlatList
                    data={concepts}
                    renderItem={({ item }) => <TitleCell title={item.title} description={item.content}/>}/>
            </View>
        </View>
    )
}

export default ConceptScreen