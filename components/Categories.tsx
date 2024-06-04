import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { categories } from '@/assets/data/Home';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 15 }}
    >
      {categories.map((category, index) => (
        <View
          className="w-32 h-32 bg-white me-2 justify-center items-center shadow-black shadow-md"
          key={index}
        >
          <Image className="rounded-md" source={category.img} />
          <Text className="p-2 text-xs font-bold">{category.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Categories;
