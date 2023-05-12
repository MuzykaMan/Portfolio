import { Text as RNText } from 'react-native'

interface TextProps{
    greeting: string
    color?: string
    fontSize?: number
}

function Text(props: TextProps){
    return <RNText style={{ fontSize:props.fontSize, color:props.color}}>{props.greeting}</RNText>
}

export default Text