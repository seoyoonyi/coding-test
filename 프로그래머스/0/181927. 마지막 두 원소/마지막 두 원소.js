function solution(num_list) {
    const lastNum = num_list[num_list.length-1];
    const lastTwoNum = num_list[num_list.length-2];

    if (lastNum > lastTwoNum) {
        num_list.push(lastNum - lastTwoNum);
    } else {
        num_list.push(lastNum * 2);
    }
    
    return num_list;
}