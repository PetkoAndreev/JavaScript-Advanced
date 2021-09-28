function getPie(array, startEl, endEl) {
    startIndex = array.indexOf(startEl)
    endIndex = array.indexOf(endEl) + 1
    pie = array.slice(startIndex, endIndex)
    return pie;
}

console.log(getPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));

console.log(getPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));