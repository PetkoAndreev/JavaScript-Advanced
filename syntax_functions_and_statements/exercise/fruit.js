function calculate_fruit_price(fruit, grams, price_per_kilogram) {
    let weight = grams / 1000
    let money = price_per_kilogram * weight
    console.log(`I need \$${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}

calculate_fruit_price('orange', 2500, 1.80)
calculate_fruit_price('apple', 1563, 2.35)