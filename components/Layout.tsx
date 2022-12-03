import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar style="auto" />
      {children}
    </View>
  );
}
