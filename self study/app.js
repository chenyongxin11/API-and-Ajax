// Promise

function getdata(name) {
  if (name == 'kris') {
    return new Promise((resovle, reject) => {
      setTimeout(() => {
        resovle({ name: name, age: Math.floor(Math.random() * 30) })
      }, 2000)
    })
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Fault name'))
      }, 2000)
    })
  }
}

function getmovies(age) {
  if (age >= 18) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ text: 'adult movies' })
      }, 2000)
    })
  } else if (age < 18) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ text: 'teen movies' })
      }, 2000)
    })
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Fault'))
      }, 2000)
    })
  }
}

// then and catch
// getdata('kris')
//   .then((data) => {
//     console.log(data.age)
//     return getmovies(data.age)
//   })
//   .then((d) => {
//     console.log(d.text)
//   })
//   .catch((e) => {
//     console.log(e)
//   })

// async await try catch
async function Movies(name) {
  try {
    const data = await getdata(name)
    const meg = await getmovies(data.age)
    console.log(meg.text)
  } catch (e) {
    console.log(e)
  }
}

Movies('kris')
