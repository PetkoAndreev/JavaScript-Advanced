function speed_check(speed, area) {
    let speed_data = {'motorway': 130, 'interstate': 90, 'city': 50, 'residential': 20}
    speed = Number(speed)
    let high_speed = speed - speed_data[area]
    if (area in speed_data) {
        if (speed <= speed_data[area]) {
            console.log(`Driving ${speed} km/h in a ${speed_data[area]} zone`)
        }
        else if (high_speed <= 20) {
            console.log(`The speed is ${high_speed} km/h faster than the allowed speed of ${speed_data[area]} - speeding`)
        }
        else if (high_speed <= 40) {
            console.log(`The speed is ${high_speed} km/h faster than the allowed speed of ${speed_data[area]} - excessive speeding`)
        }
        else {
            console.log(`The speed is ${high_speed} km/h faster than the allowed speed of ${speed_data[area]} - reckless driving`)
        }
    }
}

speed_check(40, 'city')
speed_check(21, 'residential')
speed_check(120, 'interstate')
speed_check(200, 'motorway')