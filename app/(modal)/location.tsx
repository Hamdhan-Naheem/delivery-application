import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { useNavigation } from 'expo-router';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// process.env.EXPO_PUBLIC_GOOGLE_API_KEY

const LocationSearch = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState({
    latitude: 7.4666648,
    longitude: 80.6166642,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });
  return (
    <View className="flex-1">
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: '',
          language: 'en',
        }}
      />
      <MapView showsUserLocation region={location} className="flex-1" />

      <View className="absolute bottom-5 w-full">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="bg-primaryy p-4 items-center m-4 rounded-sm"
        >
          <Text className="text-white font-bold text-sm">Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationSearch;
