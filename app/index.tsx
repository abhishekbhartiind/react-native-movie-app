import { Link } from 'expo-router'
import { View, Text } from 'react-native'

const Home = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-5xl text-dark-200 font-bold'>Home</Text>
      <Link href='/onboarding' className='text-accent font-bold'>Onboarding</Link>
    </View>
  )
}

export default Home