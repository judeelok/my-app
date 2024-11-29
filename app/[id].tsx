import { View, Text, Image } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, Stack } from 'expo-router';
import events from '../assets/events.json';
import dayjs from 'dayjs';

export default function EventPage() {
  const { id } = useLocalSearchParams();

  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Event not found.</Text>
      </View>
    );
  }

  return (
    <>
      <View className="flex-1 px-4 pt-3">
        <Stack.Screen
          options={{
            title: 'Event',
            headerBackButtonDisplayMode: 'minimal',
            headerTintColor: 'black',
          }}
        />
        <Image source={{ uri: event?.image }} className="aspect-video rounded-xl pt-1" />
        <View className="gap-3 pt-3">
          <Text className="text-3xl font-bold text-black" numberOfLines={2}>
            {event?.title}
          </Text>
          <View className="flex-row items-center gap-3">
            <Feather name="calendar" size={20} color="gray" />
            <Text className="flex-1 text-lg font-semibold uppercase text-amber-700">
              {dayjs(event?.datetime).format('dddd, D MMMM ')}•
              {dayjs(event?.datetime).format(' hh:mm A')}
            </Text>
          </View>
          <View className="flex-row items-center gap-3">
            <Octicons name="location" size={20} color="gray" />
            <Text className="flex-1 text-lg font-semibold" numberOfLines={2}>
              {event?.location}
            </Text>
          </View>
          <Text className="text-lg">{event?.description}</Text>
        </View>
      </View>
    </>
  );
}
