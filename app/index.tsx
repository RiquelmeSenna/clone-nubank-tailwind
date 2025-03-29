import { ScrollView, Text, View } from "react-native";
import { Header } from "../components/Header";
import { Ballance } from "../components/BallanceLayout";

export default function App() {
    return (
        <ScrollView className="size-full">
            <Header />
            <Ballance ballance={1356.98} title="Conta" />
        </ScrollView>
    )
}