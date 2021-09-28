function addRemoveEl(array) {
    result = [];
    for (i = 0; i < array.length; i++) {
        command = array[i]
        if (command=== 'add') {
            result.push(i + 1);
        }
        else if (command == 'remove') {
            result.pop();
        }
    }

    if (result.length < 1) {
        console.log('Empty');
    }
    else {
        console.log(result.join('\n'));
    }
}

addRemoveEl(['add', 
'add', 
'add', 
'add']
);
addRemoveEl(['add', 
'add', 
'remove', 
'add', 
'add']
);
addRemoveEl(['remove', 
'remove', 
'remove']
);