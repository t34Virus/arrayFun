var arrayfun = require ('../arrayfun'); 



describe("arrayfun", function() {
  
  it("Must have a function named max()", function() {
    
    expect( arrayfun.max ).toBeDefined();
 

 }); 

  it("Retrieves the maximum value of a collection. If the collection is empty or falsey -Infinity is returned.", function() {

    var test_array = [ 1, 2, 3, 4, 5];

    var result = arrayfun.max(test_array);

    expect( result ).toBe( 5 );


  });

});