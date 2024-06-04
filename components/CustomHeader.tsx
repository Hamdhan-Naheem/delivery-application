import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, { useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import BottomSheet from './BottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchBar = () => {
  return (
    <View className="h-16 bg-white">
      <View className="flex-1 flex-row px-4 items-center gap-4">
        <View className="flex-1 flex-row items-center bg-gray-800 rounded-md">
          <Ionicons
            className="pr-2"
            name="search-sharp"
            size={20}
            color={Colors.medium}
          />
          <TextInput className="p-2 text-white" placeholder="Serach" />
        </View>
        <Link href={'/(modal)/filter'} asChild>
          <TouchableOpacity className="p-3 rounded-md items-center">
            <Ionicons
              name="options-outline"
              size={20}
              color={Colors.primaryy}
            />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const openModel = () => {
    bottomSheetRef.current?.present();
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <BottomSheet ref={bottomSheetRef} />
      <View className="h-16 flex-row gap-5 bg-white items-center justify-between px-5">
        <TouchableOpacity onPress={openModel}>
          <Image
            className="object-cover h-10 w-10"
            source={require('@/assets/images/bike.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={openModel} className={`flex-1`}>
          <Text className="text-medium">Delivery . Now</Text>
          <View className="flex-row">
            <Text className="text-lg font-bold">Colombon</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.medium} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="bg-lightGrey p-2 rounded-full">
          <Ionicons name="person-outline" size={20} color={Colors.primaryy} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

export default CustomHeader;
