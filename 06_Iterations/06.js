// const coding = ["js", "ruby", "cpp", "python", "java"]

// const values = coding.forEach((items)=>{
//     //console.log(items);
//     return items
// })

// console.log(values);
// it printed the values but returned nothing, but undefined.
// if you want to return something then you need to manually return it.
// but again undefined sent by it. now its clear that it will not return anything.

//filter.......................................................................................
const mynums = [1,2,3,4,5,6,7,8,9]

//const newnums = mynums.filter((num)=> {
  //   num > 4// sent empty array.
//})// it will return the values. Because we have started the scope so in scope we have to write return explicitly.
// const newnums = mynums.filter((num)=> {
//     return num > 4// done.
// })

// const newnums = []

// mynums.forEach((num)=> {
//     if (num > 4) {
//         newnums.push(num)
//     }
// })

// console.log(newnums); //[ 5, 6, 7, 8, 9 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbooks = books.filter((bk)=> bk.genre ===  'History')

   userbooks = books.filter((bk)=> {
    return bk.publish >= 2000
    }
    )

    userbooks = books.filter((bk)=> bk.title ==='Book Nine')

    userbooks = books.filter((bk)=> bk.genre === "History" && bk.publish >= 1995)

  console.log(userbooks);
  
