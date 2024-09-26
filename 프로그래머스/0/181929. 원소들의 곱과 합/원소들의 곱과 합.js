function solution(num_list) {
    const mutiply = num_list.reduce((acc, num) => acc*num)
    const add = num_list.reduce((acc, num) => acc+num)
    
    return mutiply < add**2? 1 : 0;
}