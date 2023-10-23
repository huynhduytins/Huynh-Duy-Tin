// time complexity: O(n)
var sum_to_n_a = function (n) {
  if (n === 1) return 1
  return n + sum_to_n_a(n - 1)
}

// time complexity: O(1)
var sum_to_n_b = function (n) {
  return (n * (n + 1)) / 2
}

// time complexity: O(n)
var sum_to_n_c = function (n) {
  var sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}
