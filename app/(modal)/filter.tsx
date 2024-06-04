import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
  StyleSheet,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import category from '../../assets/data/filterData.json';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import BouncyCheckBox from 'react-native-bouncy-checkbox';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

interface Category {
  name: string;
  count: number;
  checked?: boolean;
}

const ItemBox = () => (
  <>
    <View className="bg-white p-2 mb-4 rounded-md">
      <TouchableOpacity className="flex-row gap-2 items-center bg-white py-3 border-gray-500 border-b">
        <Ionicons name="arrow-down-outline" size={20} color={Colors.medium} />
        <Text className="flex-1">Sort</Text>
        <Ionicons name="chevron-forward" size={22} color={Colors.primaryy} />
      </TouchableOpacity>
      <TouchableOpacity className="flex-row gap-2 items-center bg-white py-3 border-gray-500 border-b">
        <Ionicons name="fast-food-outline" size={20} color={Colors.medium} />
        <Text className="flex-1">Hygiene Rating</Text>
        <Ionicons name="chevron-forward" size={22} color={Colors.primaryy} />
      </TouchableOpacity>
      <TouchableOpacity className="flex-row gap-2 items-center bg-white py-3 border-gray-500 border-b">
        <Ionicons name="pricetag-outline" size={20} color={Colors.medium} />
        <Text className="flex-1">Offers</Text>
        <Ionicons name="chevron-forward" size={22} color={Colors.primaryy} />
      </TouchableOpacity>
      <TouchableOpacity className="flex-row gap-2 items-center bg-white py-3 border-gray-500 border-b">
        <Ionicons name="nutrition-outline" size={20} color={Colors.medium} />
        <Text className="flex-1">Dietary</Text>
        <Ionicons name="chevron-forward" size={22} color={Colors.primaryy} />
      </TouchableOpacity>
    </View>
    <Text className="text-lg font-bold mb-4">Categories</Text>
  </>
);

const Filter = () => {
  const navigation = useNavigation();
  const [items, setItem] = useState<Category[]>(category);
  const [selected, setSelected] = useState<Category[]>([]);
  const flexWidth = useSharedValue(0);

  useEffect(() => {
    const hasSelected = selected.length > 0;
    const selectedItems = items.filter((item) => item.checked);
    const newSelectedItem = selectedItems.length > 0;

    if (hasSelected !== newSelectedItem) {
      flexWidth.value = withTiming(newSelectedItem ? 150 : 0);
    }

    setSelected(selectedItems);
  }, [items]);

  const handleClearAll = () => {
    const updatedValues = items.map((item) => {
      item.checked = false;
      return item;
    });
    setItem(updatedValues);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: flexWidth.value,
      opacity: flexWidth.value > 0 ? 1 : 0,
    };
  });

  const renderItem: ListRenderItem<Category> = ({ item, index }) => (
    <View className="flex-row items-center p-2 bg-white">
      <Text className="flex-1">
        {item.name} ({item.count})
      </Text>
      <BouncyCheckBox
        isChecked={items[index].checked}
        fillColor={Colors.primaryy}
        unFillColor="white"
        iconStyle={{ borderColor: Colors.primaryy, borderRadius: 4 }}
        innerIconStyle={{
          borderColor: Colors.primaryy,
          borderRadius: 4,
          borderWidth: 2,
        }}
        onPress={() => {
          const isChecked = items[index].checked;

          const updatedItem = items.map((item) => {
            if (item.name === items[index].name) {
              item.checked = !isChecked;
            }

            return item;
          });

          setItem(updatedItem);
        }}
      />
    </View>
  );

  return (
    <View className="flex-1 p-6 bg-lightGrey">
      <FlatList
        data={items}
        renderItem={renderItem}
        ListHeaderComponent={<ItemBox />}
      />
      <View className="h-20" />
      <View className="absolute left-0 right-0 bottom-0 h-24 bg-white shadow-black shadow-2xl p-3">
        <View className="flex-row justify-center gap-3">
          <Animated.View style={[animatedStyle, styles.btn]}>
            <TouchableOpacity onPress={handleClearAll}>
              <Text className="text-primaryy font-bold text-base">
                Clear all
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="flex-1 bg-primaryy items-center justify-center p-4 rounded-lg h-14"
          >
            <Text className="text-white font-bold">Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  btn: {
    borderColor: Colors.primaryy,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 56,
  },
});
