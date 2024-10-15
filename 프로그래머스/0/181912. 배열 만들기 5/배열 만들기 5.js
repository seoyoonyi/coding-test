function solution(intStrs, k, s, l) {
    let answer = [];

    intStrs.forEach(str => {
        const substring = str.substring(s, s + l);
        const number = parseInt(substring, 10);

        if (number > k) {
            answer.push(number);
        }
    });
    
    return answer;
}