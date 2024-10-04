function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        let minVal = Infinity;
        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < minVal) {
                minVal = arr[i];
            }
        }
        return minVal === Infinity ? -1 : minVal;
    });
}
