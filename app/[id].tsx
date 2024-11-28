import { View, Text, Image } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import events from '../assets/events.json';
import dayjs from 'dayjs';

export default function EventPage() {
  const { id } = useLocalSearchParams();

  const event = events.find((e) => e.id === id);

  return (
    <>
      <View className="px-4 pt-3">
        <Image source={{ uri: event?.image }} className="aspect-video rounded-xl pt-1" />
        <View className="gap-3 bg-slate-200 pt-3">
          <Text className="text-3xl font-bold text-black" numberOfLines={2}>
            {event?.title}
          </Text>
          <View className="flex-row items-center gap-3">
            <Feather name="calendar" size={20} color="gray" />
            <Text className="text-lg font-semibold uppercase text-amber-700">
              {dayjs(event?.datetime).format('dddd, D MMMM ')}•
              {dayjs(event?.datetime).format(' hh:mm A')}
            </Text>
          </View>
          <View className="flex-row gap-3 bg-red-200">
            <Octicons name="location" size={20} color="gray" />
            <Text className="text-lg font-semibold" numberOfLines={1}>
              ssssssssssssss{event?.location}
            </Text>
          </View>
          <Text className="text-lg">{event?.description}</Text>
        </View>
      </View>
    </>
  );
}
