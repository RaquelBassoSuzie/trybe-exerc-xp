// loginValidation.test.js
const { TestWatcher } = require("jest");
const {
    greetingMessage,
    loginErrorMessage,
    verifyCredentials,
  } = require("./loginValidation.js");
  
  describe("a função verifyCredentials()", () => {
    
    it("verifyCredentials() calls the correct function depending on the user and password input", () => {
      
      const user = {
        userName: 'Bob',
        password: 123456,
      };
        
      const { userName, password } = user;
  
      expect(verifyCredentials({ userName, password })).toBe(
        "Hello, Joana! Que bom ter você de volta"
      ); 
    });
  
    it("greetingMessage() returns a message in the format: `Hello, ${user}! Que bom ter você de volta`", () => {
      expect(greetingMessage("Lucas")).toBe(
        "Hello, Lucas! Que bom ter você de volta"
      );
    });
  
    it("loginErrorMessage() returns a message in the format: `Pessoa usuária '${user}' não encontrada, tente novamente!`", () => {
      expect(loginErrorMessage("Bob")).toBe(
        "Pessoa usuária 'Bob' não encontrada, tente novamente!"
      );
    });  
  });

    TestWatcher('array and object equality', () => {
        const arr = [1, 2, 3];
        const obj = { a: 1, b: 2, c: 3};

        // expect(arr).toBe([1, 2, 3]);
        // expect(obj).toBe({ a: 1, b: 2, c: 3});
    
        expect(arr).toEqual([1, 2, 3]);
        expect(obj).toEqual({ a: 1, b: 2, c: 3});
    });
    

    
