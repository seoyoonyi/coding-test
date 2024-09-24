function solution(a, b) {
    const abAdd = Number(a.toString() + b.toString());
    const abMultiplyBy2 = 2 * a * b;
    
    if (abAdd === abMultiplyBy2) {
        return abAdd;
    }
    return abAdd > abMultiplyBy2 ? abAdd : abMultiplyBy2;
}