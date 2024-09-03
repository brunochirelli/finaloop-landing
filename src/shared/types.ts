import { StaticImageData } from "next/image";

export type Author = {
  name: string;
  description: string;
  image: StaticImageData | string;
};
