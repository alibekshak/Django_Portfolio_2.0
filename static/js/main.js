//  Слайдер

let items = document.querySelectorAll('.slider__slide_link'),
  paretSlides = document.querySelector('.slider__items'),
  next = document.querySelector('.slider__right'),
  prev = document.querySelector('.slider__left')

let slides = []
for (let i = 0; i < items.length; i++) {
  slides[i] = items[i]
  items[i].remove()
}

function addSlide() {
  if (document.documentElement.clientWidth > 576) {
    let div = document.createElement('div')
    div = slides[slides.length - 2]
    div.classList.add('slider__slide_link')
    div.style.left = -1260 + 'px'
    paretSlides.appendChild(div)

    div = slides[slides.length - 1]
    div.classList.add('slider__slide_link')
    div.style.left = -630 + 'px'
    paretSlides.appendChild(div)

    div = slides[0]
    div.classList.add('slider__slide_link')
    div.style.left = 0 + 'px'
    paretSlides.appendChild(div)

    div = slides[1]
    div.classList.add('slider__slide_link')
    div.style.left = 630 + 'px'
    paretSlides.appendChild(div)

    div = slides[2]
    div.classList.add('slider__slide_link')
    div.style.left = 1260 + 'px'
    paretSlides.appendChild(div)
  } else if (
    document.documentElement.clientWidth <= 576 &&
    document.documentElement.clientWidth > 425
  ) {
    let div = document.createElement('div')
    div = slides[slides.length - 2]
    div.classList.add('slider__slide_link')
    div.style.left = -870 + 'px'
    paretSlides.appendChild(div)

    div = slides[slides.length - 1]
    div.classList.add('slider__slide_link')
    div.style.left = -435 + 'px'
    paretSlides.appendChild(div)

    div = slides[0]
    div.classList.add('slider__slide_link')
    div.style.left = 0 + 'px'
    paretSlides.appendChild(div)

    div = slides[1]
    div.classList.add('slider__slide_link')
    div.style.left = 435 + 'px'
    paretSlides.appendChild(div)

    div = slides[2]
    div.classList.add('slider__slide_link')
    div.style.left = 870 + 'px'
    paretSlides.appendChild(div)
  } else {
    let div = document.createElement('div')
    div = slides[slides.length - 2]
    div.classList.add('slider__slide_link')
    div.style.left = -640 + 'px'
    paretSlides.appendChild(div)

    div = slides[slides.length - 1]
    div.classList.add('slider__slide_link')
    div.style.left = -320 + 'px'
    paretSlides.appendChild(div)

    div = slides[0]
    div.classList.add('slider__slide_link')
    div.style.left = 0 + 'px'
    paretSlides.appendChild(div)

    div = slides[1]
    div.classList.add('slider__slide_link')
    div.style.left = 320 + 'px'
    paretSlides.appendChild(div)

    div = slides[2]
    div.classList.add('slider__slide_link')
    div.style.left = 640 + 'px'
    paretSlides.appendChild(div)
  }
}

addSlide()

function right() {
  let boxSlider = document.querySelectorAll('.slider__slide_link')

  if (document.documentElement.clientWidth > 576) {
    for (let i = 0; i < boxSlider.length; i++) {
      boxSlider[i].style.left = i * 630 - 1890 + 'px'
    }
    paretSlides.append(boxSlider[0])
    boxSlider[0].style.left = 1260 + 'px'
  } else if (
    document.documentElement.clientWidth <= 576 &&
    document.documentElement.clientWidth > 425
  ) {
    for (let i = 0; i < boxSlider.length; i++) {
      boxSlider[i].style.left = i * 435 - 1305 + 'px'
    }
    paretSlides.append(boxSlider[0])
    boxSlider[0].style.left = 870 + 'px'
  } else {
    for (let i = 0; i < boxSlider.length; i++) {
      boxSlider[i].style.left = i * 320 - 960 + 'px'
    }
    paretSlides.append(boxSlider[0])
    boxSlider[0].style.left = 640 + 'px'
  }
}

function left() {
  let boxSlider = document.querySelectorAll('.slider__slide_link')

  if (document.documentElement.clientWidth > 576) {
    for (let i = 0; i < boxSlider.length; i++) {
      boxSlider[i].style.left = i * 630 - 630 + 'px'
    }
    paretSlides.prepend(boxSlider[boxSlider.length - 1])
    boxSlider[boxSlider.length - 1].style.left = -1260 + 'px'
  } else if (
    document.documentElement.clientWidth <= 576 &&
    document.documentElement.clientWidth > 425
  ) {
    for (let i = 0; i < boxSlider.length; i++) {
      boxSlider[i].style.left = i * 435 - 435 + 'px'
    }
    paretSlides.prepend(boxSlider[boxSlider.length - 1])
    boxSlider[boxSlider.length - 1].style.left = -870 + 'px'
  } else {
    for (let i = 0; i < boxSlider.length; i++) {
      boxSlider[i].style.left = i * 320 - 320 + 'px'
    }
    paretSlides.prepend(boxSlider[boxSlider.length - 1])
    boxSlider[boxSlider.length - 1].style.left = -640 + 'px'
  }
}

next.onclick = right
prev.onclick = left

/* paretSlides.onmouseup = drugnDrop; */
let sliderRect = paretSlides.getBoundingClientRect()
let x
paretSlides.ontouchstart = function (event) {
  // захват бегунка слайдера
  let thumbRect = paretSlides.getBoundingClientRect()
  let shiftX = event.touches[0].pageX - thumbRect.x

  // функция, реализующая движение бегунка слайдера
  function onMouseMove(event) {
    x = event.touches[0].pageX - sliderRect.x - shiftX
    paretSlides.style.left = x + 'px'
    if (x < 10 && x > -10) {
      paretSlides.style.left = 0 + 'px'
    }
  }

  document.addEventListener('touchmove', onMouseMove)

  // функция, реализующая отпускание бегунка слайдера
  function onMouseUp() {
    if (x > 10) {
      left()
      paretSlides.style.left = 0 + 'px'
    } else if (x < -10) {
      right()
      paretSlides.style.left = 0 + 'px'
    }
    document.removeEventListener('touchmove', onMouseMove)
    document.removeEventListener('touchend', onMouseUp)
  }

  document.addEventListener('touchend', onMouseUp)
}
