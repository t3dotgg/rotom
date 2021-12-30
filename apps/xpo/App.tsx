import React from "react";
import Constants from "expo-constants";

import { QueryClient, QueryClientProvider } from "react-query";

import superjson from "superjson";
import { trpc } from "./utils/react-hooks";
import Info from "./core";
import { SafeAreaView } from "react-native";

const { manifest } = Constants;

const localhost = `http://${manifest?.debuggerHost?.split(":").shift()}:3002`;

const Wrapper = () => {
  const [queryClient] = React.useState(() => new QueryClient());
  const [trpcClient] = React.useState(() =>
    trpc.createClient({
      url: `${localhost}/api/trpc`,
      transformer: superjson,
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView>
          <Info />
        </SafeAreaView>
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default function App() {
  return <Wrapper />;
}
