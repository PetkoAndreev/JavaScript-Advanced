function time_to_university(steps, footprint, kmph) {
    
    function format_number(number) {
        if (number < 10) {
            return '0' + number.toString()
        } else {
            return number
        }
    }

    let distance = steps * footprint
    let mph = kmph * 1000
    let minutesRestBreak = Math.floor(distance / 500) / 60
    let travelTime = (distance / mph) + minutesRestBreak
    let hours = Math.floor(travelTime)
    let minutes = Math.floor(travelTime * 60)
    let seconds = Math.round(((travelTime * 60) - minutes) * 60)

    console.log(`${format_number(hours)}:${format_number(minutes)}:${format_number(seconds)}`);

}

time_to_university(4000, 0.60, 5)
time_to_university(2564, 0.70, 5.5)