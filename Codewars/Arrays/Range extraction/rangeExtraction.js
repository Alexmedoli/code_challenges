function solution(list) {
    let result = '';
    let start = list[0];
    let end = list[0];
    
    for (let i = 1; i < list.length; i++) {
      if (list[i] === end + 1) {
        end = list[i];
      } else {
        if (end === start) {
          result += start + ",";
        } else if (end === start + 1) {
          result += start + "," + end + ",";
        } else {
          result += start + "-" + end + ",";
        }
        start = list[i];
        end = list[i];
      }
    }
    
    // Handle the last sequence
    if (end === start) {
      result += start;
    } else if (end === start + 1) {
      result += start + "," + end;
    } else {
      result += start + "-" + end;
    }
    
    return result;
  }