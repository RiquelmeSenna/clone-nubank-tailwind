import { Pressable } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6'

type Props = {
    name: string,
    size: number
    color: string
}

export const Icons = ({ name, size, color }: Props) => {
    return (
        <Pressable>
            <Icon name={name} size={size} color={color} />
        </Pressable>
    )
}