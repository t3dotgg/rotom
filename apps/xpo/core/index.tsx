import { Text, View } from "react-native";
import React from "react";
import { trpc } from "../utils/react-hooks";

export default function Info() {
  const { data, isLoading } = trpc.useQuery(["post.hi"]);

  console.log("data?", data);

  if (isLoading) return <Text>Loading...</Text>;
  return (
    <View>
      <Text>{data?.message}</Text>
    </View>
  );
}
