import { trpc } from "../utils/react-hooks";

export default function Web() {
  const { data, isLoading } = trpc.useQuery(["post.hi"]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data?.message}</h1>
    </div>
  );
}
