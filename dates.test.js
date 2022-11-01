const { objDate, format } = require("./dates");

test("format date", () => {
  jest.useFakeTimers().setSystemTime(new Date("2022-01-01"));
  expect(format("1/1/2022", "MMM-DD/YYYY/HH/mm/ss")).toBe(
    "Sat Jan 01 22 12:00:00 AM GMT+0200 (Eastern European Standard Time)"
  );
});

test("format date", () => {
  jest.useFakeTimers().setSystemTime(new Date("2022-01-01"));
  expect(objDate(new Date(), "MMMM/DD/YYYY/HH/mm/ss/a/z")).toBe(
    "January-01/2022 02:00:00 am GMT+0200 (Eastern European Standard Time)"
  );
});
