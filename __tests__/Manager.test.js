const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Constructor for officeNUmber", () => {
  const testValue = 100;
  const e = new Manager("Shane", 1, "shane@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("Function for getRole", () => {
  const testValue = "Manager";
  const e = new Manager("Shane", 1, "shane@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Function for getOffice", () => {
  const testValue = 100;
  const e = new Manager("Shane", 1, "shane@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});