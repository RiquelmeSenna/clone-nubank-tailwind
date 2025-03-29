import { ReactNode } from "react"
import { Text, View } from "react-native"
import { Icons } from "./PressableIcons"


type Props = {
    title: string,
    ballance: number,
    children?: ReactNode
}

export const Ballance = ({ title, ballance, children }: Props) => {
    return (
        <View className="flex-row px-8 py-8 justify-between">
            <View>
                <Text className="text-2xl font-medium mb-6">{title}</Text>
                <Text className="text-3xl font-semibold">R$ {ballance}</Text>
                {children}
            </View>
            <View>
                <Icons color="gray" size={22} name="angle-right" />
            </View>
        </View>
    )
}