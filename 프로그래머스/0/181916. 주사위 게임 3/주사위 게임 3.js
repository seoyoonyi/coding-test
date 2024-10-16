function solution(a, b, c, d) {
    const counts = new Map();
    
    [a,b,c,d].forEach(num => {
        counts.set(num, (counts.get(num) || 0) + 1)
    })
    
    const nums = Array.from(counts.keys());
    const values = Array.from(counts.values());
    
    if (nums.length === 1) {
        return 1111 * nums[0]
    }
    
    if(values.includes(3)){
        const p = nums[values.indexOf(3)]
        const q = nums[values.indexOf(1)]
        
        return (10*p+q)**2
    }
    
    if(values.filter(val => val === 2).length === 2){
        const [p, q] = nums
        return (p + q)*Math.abs(p-q)
    }
    
    if(values.includes(2) && values.includes(1)){
        const p = nums[values.indexOf(2)];
        const otherNums = nums.filter(num => num !== p);
        return otherNums[0] * otherNums[1]
    }
    
    return Math.min(...nums);
}