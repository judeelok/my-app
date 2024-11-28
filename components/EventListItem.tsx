import { Text, View, Image } from 'react-native';
import * as dayjs from 'dayjs';

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
    <View className="gap-3 p-3">
      <View className="flex-row gap-4">
        <View className="flex-1 gap-2">
          <Text className="text-lg font-semibold uppercase text-amber-700" numberOfLines={1}>
            {event.datetime}
          </Text>
          <Text className="text-xl font-bold" numberOfLines={1}>
            {event.title}
          </Text>
          <Text className="text-gray-700" numberOfLines={2}>
            {event.description}
          </Text>
        </View>

        {/* Event image */}
        <Image
          source={{
            uri: event.image,
          }}
          className="aspect-video w-2/5 rounded-xl"
        />
      </View>
      {/* Footer */}
      <View className="flex-row">
        <Text className="mr-auto text-gray-700">16 Participants</Text>
        <View className="flex-row gap-2">
          <Feather name="share" size={20} color="gray" />
          <Feather name="bookmark" size={20} color="gray" />
        </View>
      </View>
    </View>
  );
}
