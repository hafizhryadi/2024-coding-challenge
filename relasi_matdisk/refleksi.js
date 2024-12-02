function checkReflexive(A, R)
{
	let cnt = 0;
	// Property 1
	if (A.size > 0 && R.size == 0) {
		return false;
	}
	// Property 2
	else if (A.size == 0) {
		return true;
	}

	A.forEach(i => {
		
		// Making a tuple of same element
		let temp = [i, i];

		if (!Array.from(R).some(tuple => tuple[0] == temp[0] && tuple[1] == temp[1])) {

			// If aRa tuple not exists in relation R
			cnt++;
		}

	});


	// All aRa tuples exists in relation R
	if(cnt==0)
		return true;
	else
		return false;
}


// Driver code
// Creating a set A
let A = new Set([ 1, 2, 3, 4 ]);

// Creating relation R
let R = new Set();

// Inserting tuples in relation R
R.add([1,1]);
// R.add([1,2]);
R.add([2,2]);
// R.add([2,3]);
// R.add([3,2]);
R.add([3,3]);
R.add([4,3]);

console.log(A)
console.log(R)

// R in not reflexive as (4, 4) tuple is not present
if (checkReflexive(A, R)) {
	console.log("Reflexive Relation");
}
else {
	console.log("Not a Reflexive Relation");
}
