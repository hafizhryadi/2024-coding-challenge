class Relation {
    constructor() {}
   
    checkSymmetric(R) {
      // Property 1
      if (R.size === 0) {
        return true;
      }
   
      for (const i of R) {
        // Making a mirror tuple
        const temp = [i[1], i[0]];
        const check = Array.from(R).some(tuple => tuple[0] === temp[0] && tuple[1] === temp[1])
   
        if (!check) {
          // If bRa tuple does not exists in relation
          // R
          return false;
        }
      }
   
      // bRa tuples exists for all aRb in relation R
      return true;
    }
  }
   
  // Driver code
  function main() {
    // Creating relation R
    const R = new Set();
   
    // Inserting tuples in relation R
    R.add([1, 1]);
    R.add([1, 2]);
    R.add([2, 1]);
    R.add([2, 3]);
    R.add([3, 2]);
    R.add([3, 4]);
    R.add([4, 3])
    
    console.log(R)
   
    const obj = new Relation();
   
    // R is not symmetric as (4, 3) tuple is not present
    if (obj.checkSymmetric(R)) {
      console.log("Symmetric Relation");
    } else {
      console.log("Not a Symmetric Relation");
    }
  }
   
  main();