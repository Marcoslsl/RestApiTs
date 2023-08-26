import { expect, test } from "vitest";
import { Video } from "../Video";

test("creat a room", () => {
  const video = new Video();
  video.title = "Titanic";
  video.url = "http://youtube.com";

  expect(video).toBeInstanceOf(Video);
  expect(video.title).toEqual("Titanic");
  expect(video.url).toEqual("http://youtube.com");
});
