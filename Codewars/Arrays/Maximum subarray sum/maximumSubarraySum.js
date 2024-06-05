var maxSequence = function(arr){
    let addNewTerm = 0;
    let maximum = 0;
    
    for (let i = 0; i <= arr.length; i++){
      addNewTerm += arr[i];
      
      if (addNewTerm < 0){
        addNewTerm = 0; 
      };
      
      if (addNewTerm > maximum){
        maximum = addNewTerm;
      };
    }
    return maximum;
  }