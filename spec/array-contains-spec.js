var arrayfun = require ('../arrayfun'); 



describe("arrayfun", function() {
  
  it("Must have a function named contains()", function() {
    
    expect( arrayfun.contains ).toBeDefined();
 

 }); 

  it("Retrieves the contains values of a collection. If the collection is empty or falsey -Infinity is returned.", function() {

    var test_array1  = ([ 1, 2, 3], 1);

    var result = arrayfun.contains(test_array1);

    expect( result ).toEqual( false );


  });

});