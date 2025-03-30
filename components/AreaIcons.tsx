import { Pressable, Text, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6'
import { ReactNode } from "react"

type Props = {
    name: string,
    icon: string,
    children?: ReactNode
}

export const Area = ({ icon, name, children }: Props) => {
    return (
        <Pressable className="items-center max-w-28 pb-2" >
            <View className="h-20 w-20 bg-gray-200/80 rounded-full justify-center items-center mx-10 mb-3">
                <Icon name={icon} size={28} color="black" />
            </View>
            <View>
                {children}
            </View>
            <Text className="font-medium text-base text-center">{name}</Text>
        </Pressable>
    )
}