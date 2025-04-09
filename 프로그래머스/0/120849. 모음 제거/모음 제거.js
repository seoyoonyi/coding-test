function solution(my_string) {
    let answer = '';
    const alphabet = ['a', 'e', 'i', 'o', 'u']
   
   
    for(let char of my_string){
        if(!alphabet.includes(char)){
        answer += char
        }
    }
    
    
    return answer;
}