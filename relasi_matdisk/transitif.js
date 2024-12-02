class Relation {
    constructor() {}
   
    checkTransitive(R) {
      // Property 1
      if (R.size === 0) {
        return true;
      }
   
      // Create a dictionary to store tuple as key value
      // pair
      const tup = new Map();
   
      // Creating dictionary of relation where (a) is key
      // and (b) is value
      for (const i of R) {
        if (!tup.has(i[0])) {
          const temp = new Set();
          temp.add(i[1]);
          tup.set(i[0], temp);
        } else {
          tup.get(i[0]).add(i[1]);
        }
      }
   
      for (const a of tup) {
        // Set of all b's related with a
        const all_b_in_aRb = tup.get(a[0]);
   
        // Taking all c's from each b one by one
        for (const b of all_b_in_aRb) {
          if (tup.has(b) && a[0] !== b) {
            // Set of all c's related with b
            const all_c_in_bRc = tup.get(b);
   
            // All c's related with each b must be
            // subset of all b's related with a
            for (const c of all_c_in_bRc) {
              if (!all_b_in_aRb.has(c)) {
                return false;
              }
            }
          }
        }
      }
   
      // For all aRb and bRc there exist aRc in relation R
      return true;
    }
  }
   
  function main() {
    const R = new Set();
   
    // Inserting tuples in relation R
    R.add([1, 1]);
    R.add([1, 2]);
    R.add([2, 1]);
    R.add([2, 2]);
    R.add([1, 3]);
    R.add([2, 3]);
    R.add([3, 4]);
    R.add([1, 4]);
    R.add([2, 4])
   
    const obj = new Relation();
   
    // R is not transitive as (2, 4) tuple is not present
    if (obj.checkTransitive(R)) {
      console.log("Transitive Relation");
    } else {
      console.log("Not a Transitive Relation");
    }
  }
   
  main();