import { expect, test } from "vitest";
import { Subject } from "../Subject";

test("creat a room", () => {
  const subject = new Subject();
  subject.name = "Math";

  expect(subject).toBeInstanceOf(Subject);
  expect(subject.name).toEqual("Math");
});
