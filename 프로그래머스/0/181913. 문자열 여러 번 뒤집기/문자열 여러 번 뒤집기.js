function solution(my_string, queries) {
    let answer = '';
    let strArray = my_string.split('');
    
    queries.forEach(([s,e]) => {
        const reversedPart = strArray.slice(s, e + 1).reverse()
        strArray.splice(s, e-s+1, ...reversedPart)
    })
    
    return answer=strArray.join('');
}