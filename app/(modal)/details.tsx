import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SectionList,
  ListRenderItem,
  ScrollView,
  StyleSheet
} from 'react-native';
import React, { useLayoutEffect, useRef, useState } from 'react';
import ParalaxScrollView from '../../components/ParalaxScrollView';
import { restaurant } from '@/assets/data/restaurant';
import { Link, useNavigation } from 'expo-router';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Animated,{ useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const details = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);

  const opacity = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const DATA = restaurant.food.map((item, index) => ({
    title: item.category,
    data: item.meals,
    index,
  }));

  const scrollRef = useRef<ScrollView>(null)
  const itemRef = useRef<TouchableOpacity[]>([])

  const selectCategory = (index: number) => {
    const selected = itemRef.current[index]
    setActiveIndex(index);

    selected.measure((x)=>{
      scrollRef.current?.scrollTo({x:x-16, y:0, animated:true})
    })
  };

  const onScroll = (event:any)=>{
    const y = event.nativeEvent.contentOffset.y;
    if(y>350){
      opacity.value= withTiming(1)
    } else{
      opacity.value=withTiming(0)
    }
  }


  const renderItem: ListRenderItem<any> = ({ item }) => (
    <Link href={{pathname:'/(modal)/dish',params:{id:item.id}}} asChild>
      <TouchableOpacity className="bg-white flex-row p-4">
        <View className="flex-1">
          <Text className="text-base font-bold">{item.name}</Text>
          <Text className="text-md text-zinc-400 font-medium">{item.info}</Text>
          <Text className="text-md text-zinc-400 font-medium py-4">
            Rs{item.price}
          </Text>
        </View>
        <Image source={item.img} className="h-20 w-20 rounded-md" />
      </TouchableOpacity>
    </Link>
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: '',
      headerTintColor: Colors.primaryy,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-white w-10 h-10 items-center justify-center rounded-full"
        >
          <Ionicons name="arrow-back" color={Colors.primaryy} size={24} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View className="flex-row gap-2 justify-center items-center">
          <TouchableOpacity className="bg-white w-10 h-10 justify-center items-center rounded-full">
            <Ionicons name="share-outline" color={Colors.primaryy} size={24} />
          </TouchableOpacity>
          <TouchableOpacity className="bg-white w-10 h-10 justify-center items-center rounded-full">
            <Ionicons name="search-outline" color={Colors.primaryy} size={24} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <>
      <ParalaxScrollView
        scrollEvent={onScroll}
        backgroundColor={'#fff'}
        style={{ flex: 1 }}
        parallaxHeaderHeight={200}
        stickyHeaderHeight={70}
        contentBackgroundColor={Colors.lightGrey}
        renderBackground={() => (
          <Image source={restaurant.img} className="w-full h-80" />
        )}
        renderStickyHeader={() => (
          <View key="sticky-header" className="white h-14 ml-16 justify-end">
            <Text className="text-lg font-extrabold">{restaurant.name}</Text>
          </View>
        )}
      >
        <View className="bg-lightGrey">
          <Text className="text-3xl m-3">{restaurant.name}</Text>
          <Text className="m-3 text-base leading-6 text-medium">
            {restaurant.delivery} .{' '}
            {restaurant.tags.map(
              (tag, index) =>
                `${tag}${index < restaurant.tags.length - 1 ? ' . ' : ''}`,
            )}
          </Text>
          <Text className="m-3 text-base leading-6 text-medium">
            {restaurant.about}
          </Text>
          <SectionList
            contentContainerStyle={{ paddingBottom: 50 }}
            keyExtractor={(item, index) => `${item.id + index}`}
            scrollEnabled={false}
            sections={DATA}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (
              <View className="mx-4 h-px bg-grey" />
            )}
            SectionSeparatorComponent={() => <View className="h-px bg-grey" />}
            renderSectionHeader={({ section: { title, index } }) => (
              <Text className="m-4 text-xl font-bold mt-10">{title}</Text>
            )}
          />
        </View>
      </ParalaxScrollView>

      <Animated.View
        style={[styles.animatedView, animatedStyles]}
      >
        <View className="justify-center w-full h-full bg-white shadow-black shadow-sm">
          <ScrollView
            ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 16,
              alignItems: 'center',
              gap: 20,
              paddingBottom: 4,
            }}
          >
            {restaurant.food.map((item, index) => (
              <TouchableOpacity
                ref={(ref)=>(itemRef.current[index]=ref!)}
                key={index}
                onPress={() => selectCategory(index)}
                className={
                  activeIndex === index
                    ? 'bg-primaryy py-1 px-4 rounded-2xl'
                    : 'py-1 px-4 rounded-2xl'
                }
              >
                <Text
                  className={
                    activeIndex === index
                      ? 'text-white font-bold text-base'
                      : 'text-primaryy text-base'
                  }
                >
                  {item.category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Animated.View>
    </>
  );
};

export default details;

const styles = StyleSheet.create({
  animatedView:{
    position:'absolute',
    left:0,
    right:0,
    top:64,
    height:48,
    backgroundColor:'#fff'
  },
})
