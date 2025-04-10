function solution(s1, s2) {
    let count = 0
    
    s1.map(i => {
        s2.map(v => {
            if (i === v) count += 1;
        })
    })
    
    
    return count
}