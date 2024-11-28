import { Text, View, Image, Pressable } from 'react-native';
import dayjs from 'dayjs';
import { Link } from 'expo-router';

import Feather from '@expo/vector-icons/Feather';

interface EventProps {
  id: string;
  datetime: string;
  location: string; // Propriété obligatoire
  title: string;
  description?: string; // Propriété optionnelle
  image?: string; // Propriété optionnelle
}

interface Props {
  event: EventProps;
}

export default function EventListItem(props: Props) {
  const { event } = props;

  return (
    <Link href={`/${event.id}`} asChild>
      <Pressable className="m-3 gap-3 border-b border-gray-200 pb-3">
        <View className="flex-row gap-4">
          <View className="flex-1 gap-2">
            <Text className="text-md font-semibold uppercase text-amber-700" numberOfLines={1}>
              {dayjs(event.datetime).format('ddd, D MMM')}•{dayjs(event.datetime).format('hh:mm A')}
            </Text>
            <Text className="text-xl font-bold" numberOfLines={2}>
              {event.title}
            </Text>
            <Text className="text-gray-700" numberOfLines={1}>
              {event.description}
            </Text>
          </View>

          {/* Event image */}
          <Image
            source={{
              uri: event.image,
            }}
            className="aspect-video w-2/5 rounded-xl pt-1"
          />
        </View>
        {/* Footer */}
        <View className="flex-row">
          <Text className="mr-auto text-gray-700">16 Participants</Text>
          <View className="flex-row gap-4">
            <Feather name="share" size={20} color="gray" />
            <Feather name="bookmark" size={20} color="gray" />
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
