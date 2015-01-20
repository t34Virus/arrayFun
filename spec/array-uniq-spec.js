var arrayfun = require ('../arrayfun'); 



describe("arrayfun", function() {
  
  it("Must have a function named unique()", function() {
    
    expect( arrayfun.unique ).toBeDefined();
 

 }); 

  it("Retrieves the unique values of a collection. If the collection is empty or falsey -Infinity is returned.", function() {

    var test_array1  = [ 1, 2, 2, 3, 3, 4, 4];

    var result = arrayfun.unique(test_array1);

    expect( result ).toEqual( [ 1, 2, 3, 4] );


  });

});