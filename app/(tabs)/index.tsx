import { Stack } from 'expo-router';
import { Text, View, Image } from 'react-native';
import events from 'assets/events.json';
import EventListItem from '~/components/EventListItem';

export default function Events() {
  const event = events[8];

  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />

      {/* Event list item */}
      <EventListItem event={event} />
    </>
  );
}
