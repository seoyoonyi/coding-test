function solution(n, control) {
    let answer = 0;

    
    const controlArray = [...control]
    
    controlArray.map(item => {
        switch(item) {
          case "w":
            n += 1;
            break;
          case "s":
            n -= 1;
            break;
          case "d":
            n += 10;
            break;
          case "a":
            n -= 10;
            break;
        }
    })
    
    
    
    return answer = n;
}