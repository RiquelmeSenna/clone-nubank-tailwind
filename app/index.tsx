import { ScrollView, Text, View } from "react-native";
import { Header } from "../components/Header";

export default function App() {
    return (
        <ScrollView className="size-full">
            <Header />
        </ScrollView>
    )
}