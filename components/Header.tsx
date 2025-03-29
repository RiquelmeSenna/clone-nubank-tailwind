import { SafeAreaView, Text, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6'
import { Icons } from "./PressableIcons"

export const Header = () => {
    return (
        <SafeAreaView className="bg-nubank w-full px-6 py-8">
            <View className="flex-row mb-8 items-center justify-between">
                <View className="w-16 h-16 bg-white/30 rounded-full justify-center items-center">
                    <Icon name="user" size={24} color="white" />
                </View>
                <View className="flex-row gap-8">
                    <Icons color="white" name="eye" size={24} />
                    <Icons color="white" name="circle-question" size={24} />
                    <Icons color="white" name="message" size={24} />
                </View>
            </View>
            <View>
                <Text className="text-white text-2xl font-medium">Olá, Riquelme</Text>
            </View>
        </SafeAreaView>
    )
}