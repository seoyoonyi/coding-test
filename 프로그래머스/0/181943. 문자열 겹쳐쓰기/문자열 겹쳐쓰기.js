function solution(my_string, overwrite_string, s) {
    let answer = '';
    const myStr = [...my_string]
    myStr.splice(s, overwrite_string.length, overwrite_string)
    answer = myStr.join("")
    return answer;
}