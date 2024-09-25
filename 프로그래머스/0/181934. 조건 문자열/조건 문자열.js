function solution(ineq, eq, n, m) {
    let answer = 0
   
    const operators = {
        '>=': (a, b) => a >= b,
        '>!': (a, b) => a > b,
        '<=': (a, b) => a <= b,
        '<!': (a, b) => a < b
    }
    const key = ineq + eq
    answer += operators[key](n, m) ? 1:0;
    
    return answer;
}