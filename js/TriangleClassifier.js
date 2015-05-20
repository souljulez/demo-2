var TriangleClassifier = function() {

  this.classify = function(a,b,c) {
    if (a==b && a==c){
    	return "equilateral";
    }
    else if (a==b || b==c || a==c){
    	return "isosceles";
    }else{
    	return "scalene";
    }    
  };
};
