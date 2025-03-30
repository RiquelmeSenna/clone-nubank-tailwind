import { ScrollView, Text, View } from "react-native";
import { Header } from "../components/Header";
import { Ballance } from "../components/BallanceLayout";
import { Area } from "../components/AreaIcons";
import { Icons } from "../components/PressableIcons";
import { Info } from "../components/infoViews";

export default function App() {
    return (
        <ScrollView className="size-full">
            <Header />
            <Ballance ballance="13.356,98" title="Conta" />
            <ScrollView className="py-2" horizontal showsHorizontalScrollIndicator={false}>
                <Area icon="pix" name="Pix" />
                <Area icon="barcode" name="Pagar" />
                <Area icon="hand-holding-dollar" name="Pegar emprestado"
                    children={
                        <View className="bg-nubank h-8 w-20 items-center justify-center rounded-md -mt-7">
                            <Text className="text-white text-base">R$ 12.300</Text>
                        </View>}
                />
                <Area icon="money-bill-transfer" name="Transferir" />
                <Area icon="sim-card" name="Recarga de celular" />
            </ScrollView>
            <View className="flex-row bg-gray-200/80 py-5 px-6 items-center mt-5 mx-6 rounded-xl">
                <Icons color="black" name="credit-card" size={24} />
                <Text className="ml-6 font-semibold text-lg">Meus cartões</Text>
            </View>
            <ScrollView className="mt-10 mx-6" horizontal showsHorizontalScrollIndicator={false}>
                <Info children={
                    <>
                        <View className="flex-row ">
                            <Text className="mr-2 text-lg">Você tem</Text>
                            <Text className="font-semibold mr-2 text-xl">R$12.300,00</Text>
                        </View>
                        <View>
                            <Text className="text-lg">disponiveis para empréstimo.</Text>
                        </View>
                    </>
                }
                />
                <Info children={
                    <>
                        <Text className="font-semibold mr-2 text-xl text-nubank">Guarde seu dinheiro facil</Text>
                        <View>
                            <Text className="text-xl">Toque aqui.</Text>
                        </View>
                    </>
                }
                />
            </ScrollView>
            <View className="h-1 mt-10 bg-gray-200/80"></View>

            <Ballance ballance="2.776,56" title="Cartão de crédito" subtitle="Fatura Atual" children={
                <Text className="mt-2  text-gray-600">Limite disponivel de R$ 5.56</Text>
            } />
        </ScrollView>
    )
}