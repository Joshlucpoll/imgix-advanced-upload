import type { ExifData } from "./exifData";
import { writable } from "svelte/store";

interface ImageData {
  src: File;
  thumbnail: string;
  name: string;
  exif: ExifData;
}

export const images = writable<ImageData[]>([]);
export const apiKey = writable<string>("");
