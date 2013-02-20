describe("saving account", function() {
	it("deposit money", function () {  
        expect(Account(100).doTransaction(12, "+")).toEqual(112);  
    });  
	
	it("withdraw money", function () {  
		expect(Account(100).doTransaction(20, "-")).toEqual(80);  
	});  

	it("throw an error if insufficient balance", function () {  
		 var testFn = function () {
			 Account(100).doTransaction(120, "-");
		 };
		expect(testFn).toThrow(new Error("insufficient balance"));  
	});  

	it("throw an error if invalid amount", function () {  
		var testFn = function () {
			Account(100).doTransaction(-20, "-");
		};
		expect(testFn).toThrow(new Error("invalid amount"));  
	});  

	it("throw an error if amount NAN", function () {  
		var testFn = function () {
			Account(100).doTransaction('A', "-");
		};
		expect(testFn).toThrow(new Error("amount NAN"));  
	});  
});