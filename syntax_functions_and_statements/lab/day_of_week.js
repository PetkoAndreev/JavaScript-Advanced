function get_day_of_week(day) {
    let days = {'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6, 'Sunday': 7}
    if (day in days) {
        console.log(days[day])
    }
    else {
        console.log('error')
    }
}

get_day_of_week('Monday')
get_day_of_week('Friday')
get_day_of_week('Some str')