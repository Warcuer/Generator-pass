const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const arr3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const arr4 = ['!', '@', '#', '$', '%', '&', '*']


const slider = document.getElementById("slider-line")
const num = document.getElementById('num')

const number = document.getElementById('check-1')
const lowerCaseLetters = document.getElementById('check-2')
const upperCaseLetters = document.getElementById('check-3')
const specialCharacters = document.getElementById('check-4')

const generateBtn = document.querySelector('.btn-generate')

let amountPass = 6

const elemnts = [
  {
    checkbox: number,
    data: arr1
  },
  {
    checkbox: lowerCaseLetters,
    data: arr2
  },
  {
    checkbox: upperCaseLetters,
    data: arr3
  },
  {
    checkbox: specialCharacters,
    data: arr4
  }
]
generateBtn.addEventListener('click', () => {
  let emptyArr = []

  elemnts.forEach(element => {
    if (element.checkbox.checked) {
      emptyArr = emptyArr.concat(element.data)
    }
  })

  document.getElementById('out').innerHTML = ''
  for (let k = 0; k < amountPass; k++) {
    let pass = ''
    for (let i = 0; i < slider.value; i++) {
      pass += emptyArr[randomInteger(0, emptyArr.length - 1)]
    }

    document.getElementById('out').innerHTML += '<p>' + pass + '</p>'
  }
})
slider.oninput = function () {
  num.textContent = slider.value;
}

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}