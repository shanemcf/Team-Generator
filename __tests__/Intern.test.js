const Intern = require("../lib/Intern");

test("constructor for school", () => {
    const testValue = "UTA";
    const e = new Intern("Shane", 1, "shane@test.com", testValue);
    expect(e.school).toBe(testValue);
  });
  
  test("Function for getRole", () => {
    const testValue = "Intern";
    const e = new Intern("Shane", 1, "shane@test.com", "UCLA");
    expect(e.getRole()).toBe(testValue);
  });
  
  test(" getSchool Function", () => {
    const testValue = "UTA";
    const e = new Intern("Shane", 1, "shane@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });