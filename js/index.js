const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const arr3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const arr4 = ['!', '@', '#', '$', '%', '&', '*']

const slider = document.getElementById("slider-line")
const num = document.getElementById('num')

const generateBtn = document.querySelector('.btn-generate')

generateBtn.addEventListener('click', () => {
  let emptyArr = []

  if (document.getElementById('check-1').checked) {
    emptyArr = emptyArr.concat(arr1)
  }
  if (document.getElementById('check-2').checked) {
    emptyArr = emptyArr.concat(arr3)
  }
  if (document.getElementById('check-3').checked) {
    emptyArr = emptyArr.concat(arr2)
  }
  if (document.getElementById('check-4').checked) {
    emptyArr = emptyArr.concat(arr4)
  }
  emptyArr.sort(shuffle)
  document.getElementById('out').innerHTML = ''
  for (let k = 0; k < 6; k++) {
    let pass = ''
    for (let i = 0; i < slider.value; i++) {
      pass += emptyArr[randomInteger(0, emptyArr.length - 1)]
    }
    // shuffle(emptyArr)
    // console.log(shuffle(emptyArr));
    document.getElementById('out').innerHTML += '<p>' + pass + '</p>'
  }
})
slider.oninput = function () {
  num.textContent = slider.value;
}

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }
function shuffle(a, b) {
  return Math.random() - 0.5;
}

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}