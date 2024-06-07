function reverseInGroups(arr, n, k) {
    // code here
    const groupS = Math.floor(n / k)
    for (let i = 0; i <= groupS; i++) {
        let low = i * k
        let hei = (i * k) + (k - 1)
        if (!(hei < n)) {
            hei = n - 1
        }
        while (hei >= low) {
            let temp = arr[low]
            arr[low] = arr[hei]
            arr[hei] = temp
            hei--
            low++
        }
    }
}