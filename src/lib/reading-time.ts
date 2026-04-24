import readingTime from "reading-time";

export function getReadingTime(source: string) {
  return readingTime(source).text;
}
