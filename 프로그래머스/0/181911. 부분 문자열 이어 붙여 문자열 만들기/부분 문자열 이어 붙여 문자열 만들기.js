function solution(my_strings, parts) {
    let answer = '';
    for (let i = 0; i < my_strings.length; i++) {
        let [s, e] = parts[i]; 
        const part = my_strings[i].slice(s, e + 1);  
        answer += part; 
    }
    return answer;
}
