function gcd_two_numbers(x, y) {
    while(y) {
      let t = y
      y = x % y
      x = t
    }
    console.log(x)
  }

gcd_two_numbers(15, 5)
gcd_two_numbers(2154, 458)