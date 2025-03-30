import { ReactNode } from "react"
import { Text, View } from "react-native"
import { Icons } from "./PressableIcons"


type Props = {
    title: string,
    subtitle?: string
    ballance: string,
    children?: ReactNode
}

export const Ballance = ({ title, ballance, children, subtitle }: Props) => {
    return (
        <View className="flex-row px-8 py-8 justify-between w-full">
            <View>
                <Text className="text-2xl font-medium mb-4">{title}</Text>
                {subtitle && <Text className="text-xl text-gray-600 mb-4">{subtitle}</Text>}
                <Text className="text-3xl font-semibold">R$ {ballance}</Text>
                {children}
            </View>
            <View>
                <Icons color="gray" size={22} name="angle-right" />
            </View>
        </View>
    )
}