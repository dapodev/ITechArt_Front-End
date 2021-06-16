Array.prototype.map = function(callback) {
    if(this == null) {
        throw new TypeError('context null or not defined')
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    let newArray = new Array();

    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }

    return newArray;
}

Array.prototype.filter = function(callback) {
    if(this == null) {
        throw new TypeError('context null or not defined')
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    
    let newArray = new Array();

    for(let i = 0; i < this.length; i++) {
        if(callback(this[i]) === true) {
            newArray.push(this[i])
        }
    }

    return newArray;
}

Array.prototype.reduce = function(callback, initialValue) {
    if(this == null) {
        throw new TypeError('context null or not defined')
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    
    let result = initialValue === undefined ? this[0] : initialValue
    let startIndex = initialValue === undefined ? 1 : 0

    for(let i = startIndex; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }

    return result;
}

const notes = [
    {
    id: 1,
    title: 'Recipe',
    description: 'Ingredients include 2 eggs...',
    pagesCount: 2,
    isMarked: false,
    access: []
    },
    {
    id: 2,
    title: 'Workouts',
    description: '3 sets of squats...',
    pagesCount: 1,
    isMarked: true,
    access: []
    },
    {
    id: 3,
    title: 'Passwords',
    description: 'VISA ...',
    pagesCount: 6,
    isMarked: true,
    access: []
    },
    {
    id: 4,
    title: 'To Do 2021',
    description: '1. Learn JS...',
    pagesCount: 3,
    isMarked: false,
    access: []
    }]

// === T E S T I N G ===

// map testing 

console.log(notes)

const modifiedNotes = notes.map(el => {
    return {
        id : el.id,
        title : el.title
    }
});

console.log(modifiedNotes)

// filter testing

const markedNotes = notes.filter(el => el.isMarked)

console.log(markedNotes)

// reduce testing

const pagesCount = notes.reduce((prev, el) => prev + el.pagesCount, 0)

console.log(pagesCount)

// uniqueElement

function uniqueElement(arr) {
    let unique = []

    arr.map(
        (el, index, thisArray) => thisArray.filter(subEl => subEl === el).length === 1 ? unique.push(el) : null
    )

    return unique.length === 1 ? unique[0] : undefined
}

const testArray = [1,1,3,3,2,2,2,2,6];

console.log(uniqueElement(testArray))