import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getDishById } from '@/assets/data/restaurant';
import Animated, { FadeInLeft } from 'react-native-reanimated';

const Dish = () => {
    const {id} = useLocalSearchParams();
    const item = getDishById(Number(id))
  return (
    <SafeAreaView className='flex-1 bg-white' edges={['bottom']}>
    <View className='flex-1 bg-white'>
        <Animated.Image entering={FadeInLeft.duration(500).delay(400)} source={item?.img} className='h-72 w-full'/>
        <View className='p-5'>
            <Text className='font-bold text-3xl pb-2'>{item?.name}</Text>
            <Text className='text-gray-500 text-base'>{item?.info}</Text>
        </View>

        <View className='absolute w-full bottom-0 p-4'>
            <TouchableOpacity className='bg-primaryy items-center p-4'>
                <Text className='text-white text-base font-semibold'>ADD FOR Rs{item?.price}</Text>
            </TouchableOpacity>
        </View>
    </View>
    </SafeAreaView>
  )
}

export default Dish