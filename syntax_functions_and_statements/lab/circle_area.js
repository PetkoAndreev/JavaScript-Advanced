function circle_area(r) {
    let area = r ** 2 * Math.PI
    if (typeof(r) == 'number') {
        console.log(area.toFixed(2))
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(r)}.`)
    }
}

circle_area(5)
circle_area('name')