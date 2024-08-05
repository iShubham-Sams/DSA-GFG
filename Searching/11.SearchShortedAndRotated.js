// const array = [100, 200, 400, 1000, 10, 20]

// const findShortedAndRotated = (arr, n, find) => {
//     let start = 0
//     let end = n
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2)
//         if (arr[mid] == find) {
//             return mid
//         }
//         if (arr[start] <= arr[mid]) {
//             if (find >= arr[start] && find < arr[mid]) {
//                 end = mid - 1
//             } else {
//                 start = mid + 1
//             }
//         } else {
//             if (find > arr[mid] && find <= arr[end]) {
//                 start = mid + 1
//             } else {
//                 end = mid - 1
//             }
//         }
//     }
// }
// console.log(findShortedAndRotated(array, 6, 10));