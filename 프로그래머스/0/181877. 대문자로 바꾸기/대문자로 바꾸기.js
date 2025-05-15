function solution(myString) {
    return [...myString].map(i => {
        return i.toUpperCase();
    }).join('')
}
