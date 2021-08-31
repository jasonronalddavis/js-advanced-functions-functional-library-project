




let myEach = (collection, iteratee)=> {
    const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

    for (let i = 0; i < newCollection.length; i++)
      iteratee(newCollection[i])
    
    return collection 
  }

  let myMap = function(collection, iteratee) {
    if (!(collection instanceof Array))
      collection = Object.values(collection)

    const newArr = [ ]

    for (let i = 0; i < collection.length; i++)
      newArr.push(iteratee(collection[i]))

    return newArr 

  }



  let myReduce = function(array, callback, acc) {
    let values = (array instanceof Array) ? array.slice() : Object.values(array)

    if (!acc) {
      acc = values[0]
      values =values.slice(1)
    }
    for (let i = 0; i < values.length; i++){
      acc = callback(acc, values[i], array)
    }
    return acc  
  }   


let myFind = function(collection, predicate){
    if (!(collection instanceof Array))
    collection = Object.values(collection)

    for (let idx = 0; idx < collection.length; idx++)
      if (predicate(collection[idx])) return collection[idx]

    return undefined
  }

  let myFilter = function(collection, predicate){
    if (!(collection instanceof Array))
      collection = Object.values(collection)

    const newArr = []

    for (let idx = 0; idx < collection.length; idx++)
      if (predicate(collection[idx])) newArr.push(collection[idx])

    return newArr 
  }

  let mySize = function(collection) {
    return (collection instanceof Array) ? collection.length : Object.keys(collection).length
  }


  let myFirst = function(collection, stop=false){
    return (stop) ? collection.slice(0, stop) : collection[0]
  }

let myLast = function(collection, start=false){
    return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
  }

let myCompact = function(collection){
    const badBad = new Set([false, null, 0, "", undefined, NaN])
    return collection.filter(el => !badBad.has(el))
  }

let myKeys = function(obj){
    const keys = []
    for (let key in obj){
      keys.push(key)
    }
    return keys
  }


  let myValues = function(obj){
    const values = []
    for (let key in obj){
      values.push(obj[key])
    }
    return values
  }








  
  