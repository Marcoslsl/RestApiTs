import { expect, test } from "vitest";
import { Room } from "../Room";

test("creat a room", () => {
  const room = new Room();
  room.name = "Math";
  room.description = "Analical thinking";

  expect(room).toBeInstanceOf(Room);
  expect(room.name).toEqual("Math");
  expect(room.description).toEqual("Analical thinking");
});
