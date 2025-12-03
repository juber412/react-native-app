import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const index = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl font-pregular">React Native App</Text>
      <Link href="/home">
        <Text className="font-psemibold">Go To Home</Text>
      </Link>
    </View>
  )
}

export default index