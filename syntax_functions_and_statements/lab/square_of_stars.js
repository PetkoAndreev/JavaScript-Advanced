function print_star_square(num = 5) {
    for (let i = 1; i <= num; i++) {
        console.log('* '.repeat(num - 1) + '*')
    }
}

print_star_square(1)
print_star_square()