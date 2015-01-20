var arrayfun = require ('../arrayfun'); 



describe("arrayfun", function() {
  
  it("Must have a function named intersection()", function() {
    
    expect( arrayfun.intersection ).toBeDefined();
 

 }); 

  it("Retrieves the intersecting value of a collection. If the collection is empty or falsey -Infinity is returned.", function() {

    var test_array  = [ 1, 2, 3];
    var test_array2 = [ 5, 2, 1, 4];
    var test_array3 = [ 2, 1];

    var result = arrayfun.intersection(test_array, test_array2, test_array3);

    expect( result ).toEqual( [1, 2] );


  });

});