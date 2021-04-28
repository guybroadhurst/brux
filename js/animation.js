// when we scroll fade in the h2, h3, p, a.button, section img tags when they enter the frame

const animatedTags = document.querySelectorAll("h2, h3, p, a.button, section img")

// fade out on load 

animatedTags.forEach(tag => {
  tag.style.opacity = 0 
})

// fade in
const fadeIn = function() {
  // look through all the animateTags and see with getBoundingClientRect and if it's in the window

  let delay = 0.25

  animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom

    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadeIn 1s ${delay}s both`
      delay = delay + 0.25
    } else {
      tag.style.opacity = 0
      tag.style.animation = ""
    }

  })
}

// on load run fadeIn
fadeIn()

// on scroll run fadeIn
document.addEventListener("scroll", function() {
  fadeIn()
})

// on window resize run fadeIn
window.addEventListener("resize", function() {
  fadeIn()
})