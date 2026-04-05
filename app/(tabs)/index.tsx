
import "../../global.css"
import { Text, View } from "react-native";
import { Link } from "expo-router";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" asChild>
        <Text className="mt-4 rounded bg-blue-500 text-white p-4">
          Go to Onboarding
        </Text>
      </Link>
      <Link href="/(auth)/sign-in" asChild>
        <Text className="mt-4 rounded bg-blue-500 text-white p-4">
          Go to Sign In
        </Text>
      </Link>
      <Link href="/(auth)/sign-up" asChild>
        <Text className="mt-4 rounded bg-blue-500 text-white p-4">
          Go to Sign Up
        </Text>
      </Link>

      <Link
        href={{
          pathname: "/subscriptions/[id]" as any,
          params: { id: "spotify" },
        }}
        asChild
      >
        <Text className="mt-4 rounded bg-blue-500 text-white p-4">
          Spotify Subscription
        </Text>
      </Link>
      <Link href={
        {
          pathname: "/subscriptions/[id]" as any,
          params: {id: "claude"}
        }
      }>
        Claude Max Subscription 
      </Link>
    </View>
  );
}