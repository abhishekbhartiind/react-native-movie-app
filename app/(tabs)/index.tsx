import { StyleSheet, Text, View, Image, ScrollView } from "react-native"
import React from 'react'
import { images } from '@/constants/images'
import { icons } from "@/constants/icons"
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router"

const Index = () => {
    const router = useRouter()

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10, minHeight: "100%" }}
      >
          <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
          <View className='flex-1 px-5'>
              <SearchBar placeholder={"Search for a movie"} onPress={() => router.push("/search")} />
          </View>
      </ScrollView>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})