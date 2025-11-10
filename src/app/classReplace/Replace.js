import clsx from "clsx";
import { twMerge } from "tailwind-merge";
export let classReplace = (...input) => twMerge(clsx(...input))