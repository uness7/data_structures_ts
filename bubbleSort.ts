function bubble_sort(arr: number[]): void {
    let i: number = 0;
    for (; i < arr.length; i++) {
        for (let j: number = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
}
