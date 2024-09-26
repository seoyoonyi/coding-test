function solution(num_list) {
    let answer = 0;
    const odd = []
    const even = []
    
    num_list.map((item)=>{
        item%2 === 0 ? even.push(item) : odd.push(item);
    })
    
    const oddResult = odd.map(String).join('')
    const evenResult = even.map(String).join('')
    
    return answer = Number(oddResult) + Number(evenResult);
}