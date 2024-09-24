function solution(a, b) {
    const abCalculation = a.toString() +b.toString();
    const baCalculation = b.toString() +a.toString();
    
    const answer = abCalculation > baCalculation ? abCalculation : baCalculation;
    return Number(answer);
}