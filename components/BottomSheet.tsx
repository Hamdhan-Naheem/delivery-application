import { View, Text, TouchableOpacity } from 'react-native';
import React, { useMemo, forwardRef, useCallback } from 'react';
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const BottomSheet = forwardRef((props, ref) => {
  const snapPoints = useMemo(() => ['55%'], []);
  const { dismiss } = useBottomSheetModal();
  const rederBackDrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      handleIndicatorStyle={{ display: 'none' }}
      backgroundStyle={{ backgroundColor: Colors.lightGrey, borderRadius: 0 }}
      overDragResistanceFactor={1}
      ref={ref}
      snapPoints={snapPoints}
      backdropComponent={rederBackDrop}
    >
      <View className="flex-1">
        <View className="flex-row justify-center gap-2 mb-5">
          <TouchableOpacity className="bg-primaryy p-2 rounded-full px-7">
            <Text className="text-white font-bold">Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-2 px-7">
            <Text className="text-primaryy font-medium">Pickup</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-sm m-4 font-semibold">Your location</Text>
        <Link href={'/(modal)/location'} asChild>
          <TouchableOpacity>
            <View className="flex-row gap-2 items-center bg-white border-2 border-slate-200 p-4">
              <Ionicons
                name={'location-outline'}
                size={20}
                color={Colors.medium}
              />
              <Text className="flex-1">Current Location</Text>
              <Ionicons
                name={'chevron-forward'}
                size={20}
                color={Colors.primaryy}
              />
            </View>
          </TouchableOpacity>
        </Link>
        <Text className="text-sm m-4 font-semibold">Arrival Time</Text>

        <TouchableOpacity>
          <View className="flex-row gap-2 items-center bg-white border-2 border-slate-200 p-4">
            <Ionicons
              name={'stopwatch-outline'}
              size={20}
              color={Colors.medium}
            />
            <Text className="flex-1">Now</Text>
            <Ionicons
              name={'chevron-forward'}
              size={20}
              color={Colors.primaryy}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-primaryy p-4 m-4 rounded-lg items-center"
          onPress={() => dismiss()}
        >
          <Text className="text-white font-bold">Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheet;
