import { Href } from "expo-router";

const MAIN = "/" as const;
const RESTORE = "/restore" as const;
const LOGIN = "/login" as const;

export const routers = {
  main: MAIN,
  restore: RESTORE,
  login: LOGIN,
} as const;

type RouterKeys = keyof typeof routers;
export const typedRouters: Record<RouterKeys, Href<string>> = routers;
