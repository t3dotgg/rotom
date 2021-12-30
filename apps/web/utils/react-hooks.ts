import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "rotom-server";

export const trpc = createReactQueryHooks<AppRouter>();
