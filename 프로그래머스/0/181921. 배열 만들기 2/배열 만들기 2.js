function solution(l, r) {
    let answer = [];
    let queue = ['5'];
    
    while (queue.length > 0) {
        let current = queue.shift();
        let num = parseInt(current);
        
        if(num > r) continue;
        
        if(num >= l) answer.push(num)
        
        let nextNum0 = current + '0';
        let nextNum5 = current + '5';
        
        if(parseInt(nextNum0) <= r) queue.push(nextNum0)
        if(parseInt(nextNum5) <= r) queue.push(nextNum5)        
    }
     return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}