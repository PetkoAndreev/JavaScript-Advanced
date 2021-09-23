function is_same_numbers(num) {
    num_to_check = num.toString()[0]
    str_nums = num.toString().split('').map(Number)
    let result = 0
    let is_all_same = true
    for (let i=0; i < str_nums.length; i++) {
        if (str_nums[i] != num_to_check) {
            is_all_same = false
        }
        result += str_nums[i]
        
    }
    console.log(is_all_same)
    console.log(result)
}

is_same_numbers('2222222')
is_same_numbers(112222344)
