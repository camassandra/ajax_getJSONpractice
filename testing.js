var list = [1, 2, 4, 5, 6, 100];
var listNr = [1, 2, 'f', 100];
var listFalse = [1, 4, 2, 0, 6, 100];
var emptyarray = [];


function Lessthan(numbers) {
	for (var n = 0; n < numbers.length; n++ ){
		if (numbers[n]	 < numbers[n-1]){ // on first instance, if statement conditions are false and does not trigger
			console.log('false')
			return false
		}
	}
	console.log('true')
	return true
};

function test(methodToTest, numbers){
	console.log('function test is called')
	//this is the moment when I test the code
	for(var i = 0; i <numbers.length; i++ ) {
		if (typeof numbers[i] !== 'number'){
			console.log('false: test failed')
			return
		}
	}
	
	if (methodToTest(numbers) === true){
		console.log('test passed');
	}

	else {
		console.log('test failed')
	}
};

test(    Lessthan, list   ); //true; test passed
test( Lessthan, listNr); //true; test passed or , when typeof parameter is added, 'false: test failed'
test(Lessthan, listFalse);//false, test failed
test(Lessthan, emptyarray); //true, test passed


/*  testing    install mocha library for node.js express - 
// describe(it('what should happen is described', function{})) 
or .expect('what should happen is described', done)   */


// unit testing: test a unit of code to behave as it is supposed, feature testing is the testing of the whole app
//     acceptance = browser compatibility
// vs integration test =whether it is compatble with 

//check mvc app 




