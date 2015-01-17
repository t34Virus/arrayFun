
module.exports = {
 
 first : function ( array, n ) {

 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice     
    if (n !== undefined) {
      
      var result = array.slice(0, n);

     // 
      
      return result;
    
    } else {

      return array[0];


    }

    
       



}

};