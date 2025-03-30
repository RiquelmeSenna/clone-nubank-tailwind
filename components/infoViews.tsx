import { ReactNode } from "react"
import { View } from "react-native"

type Props = {
    children: ReactNode
}

export const Info = ({ children }: Props) => {
    return (
        <View className=" bg-gray-200/80 w-80 py-8 px-10 rounded-xl mr-4">
            {children}
        </View>
    )
}