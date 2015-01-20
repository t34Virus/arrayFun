var arrayfun = require ('../arrayfun'); 



describe("arrayfun", function() {
  
  it("Must have a function named difference()", function() {
    
    expect( arrayfun.difference ).toBeDefined();
 

 }); 

  it("Retrieves the differing value of a collection. If the collection is empty or falsey -Infinity is returned.", function() {

    var test_array1  = [ 1, 2, 3, 4, 5];
    var test_array2 = [ 5, 2, 10];

    var result = arrayfun.difference(test_array1, test_array2);

    expect( result ).toEqual( [ 1, 3, 4, 10] );


  });

});