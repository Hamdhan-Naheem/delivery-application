import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { restaurant } from '@/assets/data/Home';
import { Link } from 'expo-router';

const Restaurants = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 15 }}
    >
      {restaurant.map((restaurant, index) => (
        <Link href={'/details'} key={index} asChild>
          <TouchableOpacity>
            <View className="w-72 h-56 bg-white mx-1 shadow-black shadow-md">
              <Image
                className="h-36 w-full rounded-sm"
                source={restaurant.img}
              />
              <View className="p-2">
                <Text className="font-bold text-sm">{restaurant.name}</Text>
                <Text className="text-neutral-400">
                  {restaurant.rating} {restaurant.ratings}
                </Text>
                <Text className="text-neutral-400">{restaurant.distance}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
};

export default Restaurants;
