import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Categories from '@/components/Categories';
import Restaurants from '@/components/Restaurants';
import { SafeAreaView } from 'react-native-safe-area-context';

const Page = () => {
  return (
    <SafeAreaView className="top-20 bg-white">
      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
        <Categories />
        <Text className="text-lg font-bold px-4 mb-1 mt-3">
          Top picks in your neighbourhood
        </Text>
        <Restaurants />
        <Text className="text-lg font-bold px-4 mb-1 mt-3">
          Offers near you
        </Text>
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;
