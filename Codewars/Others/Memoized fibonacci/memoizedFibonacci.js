function fibonacci(n) {
    let memoFibo = [0,1];
    for (let i = 2; i<= n; i++){
        let res = memoFibo[i -1] + memoFibo[i -2];
        memoFibo.push(res);
    }
    return memoFibo[n];
  }