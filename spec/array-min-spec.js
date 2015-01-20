var arrayfun = require ('../arrayfun'); 



describe("arrayfun", function() {
  
  it("Must have a function named min()", function() {
    
    expect( arrayfun.min ).toBeDefined();
 

 }); 

  it("Retrieves the minimum value of a collection. If the collection is empty or falsey -Infinity is returned.", function() {

    var test_array = [ 1, 2, 3, 4, 5];

    var result = arrayfun.min(test_array);

    expect( result ).toBe( 1 );


  });

});