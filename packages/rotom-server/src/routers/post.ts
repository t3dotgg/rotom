import { createRouter } from "../createRouter";
import { z } from "zod";

export const postRouter = createRouter()
  .mutation("add", {
    input: z.object({
      id: z.string().uuid().optional(),
      title: z.string().min(1).max(32),
      text: z.string().min(1),
    }),
    async resolve({ ctx, input }) {
      console.log("new todo?", input);
      return input;
    },
  })
  .query("hi", {
    async resolve() {
      return {
        message:
          "testing fetching a typesafe message from the server with tRPC",
      };
    },
  });
