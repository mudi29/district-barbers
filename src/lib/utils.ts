import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge Relume's custom type sizes, so `text-medium` isn't mistaken
// for a text colour and allowed to wipe out classes like `text-neutral-darkest`.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["h1", "h2", "h3", "h4", "h5", "h6", "large", "medium", "regular", "small", "tiny"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
