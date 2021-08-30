




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


  const testArr = [1, 2, 3, 4];
  const unmodifiedTestObj = { one: 1, two: 2, three: 3, four: 4 };
  const testObj = Object.assign({}, unmodifiedTestObj);


 
  
  