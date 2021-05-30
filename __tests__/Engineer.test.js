const Engineer = require("../lib/Engineer");

test("sets GitHub from constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Shane", 1, "shane@test.com", testValue);
    expect(e.github).toBe(testValue);
  });
  
  test("Function to getRole", () => {
    const testValue = "Engineer";
    const e = new Engineer("Shane", 1, "shane@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Gets GitHub", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Shane", 1, "shane@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });