module.exports = {
 


 first : function ( array, n ) {

 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice     
  if (n !== undefined) {
    
    var result = array.slice(0, n);

    return result;
   
  } else {

    return array[0];

  }
},



max : function ( array )  {

  var result = Math.max.apply(null, array);

  if (result !== Infinity){

  return result;

  } else {

    return array[0];
  }
},




min : function ( array )  {


  var result = Math.min.apply(null, array);

  if (result !== Infinity){

  return result;

  } else {

    return array[0];
  }

},



intersection : function ( a, b, c )  {

var difference = {};
var results = [];
    for (var k = 0; k < c.length; k++) {
        difference[c[k]] = true;
}
    for (var i = 0; i < b.length; i++) {
        difference[b[i]] = true;
    }
    for (var j = 0; j < a.length; j++) {
        if (difference[a[j]]) 
            results.push(a[j]);
    }
    return results;

},



difference : function ( a, b )  {

var c = [], diff=[];

  for(var i=0;i<a.length;i++)
    c[a[i]]=true;
  
  for(var j=0;j<b.length;j++){
    if(c[b[j]]) delete c[b[j]];
  else c[b[j]]=true;
  }

  for(var k in c)
    diff.push(Number(k));
  return diff;
    
  

},



unique : function ( array )  {

var c = [], diff=[];
  
  for(var j=0;j<array.length;j++){
    if(c[array[j]]) delete c[array[j]];
    c[array[j]]=true;

  }

  for(var k in c)
    diff.push(Number(k));


  return diff;

},



contains : function ( array, target )  {

    var i = array.length;
    while (i--) {
       if (array[i] === target) {
           return true;
       }
    }
    return false;


},

};
//ends module export 






