const leftBtn = document.querySelector('.left-btn')
const rightBtn = document.querySelector('.right-btn')
const slider = document.querySelector('.slider')
const contactForm = document.querySelector('.contact-form-container')
const contactBtn = document.querySelector('.contact')
const cancleBtn = document.querySelector('#cancle')
const certificateSection = document.querySelector('.certificates')
const projectBtn = document.querySelector('#project-btn')
const certificateBtn = document.querySelector('#certificate-btn')
const certificatesLinks = document.querySelectorAll('.styled-wrapper')
const resumeBtn = document.querySelector('#resume')

const Links = ['https://lnkd.in/dHNUZgdG', 'https://lnkd.in/d3Jzc8tE']

const handleSlider = () => {
  leftBtn.addEventListener('click', () => {
    slider.style.transform = 'translateX(0%)'
  })

  rightBtn.addEventListener('click', () => {
    slider.style.transform = 'translateX(-100%)'
  })
}
handleSlider()

const handleContactForm = () => {
  let show = false
  contactBtn.addEventListener('click', () => {
    if (!show) {
      contactForm.style.display = 'flex'
    } else {
      contactForm.style.display = 'none'
    }
    show = !show
  })
  cancleBtn.addEventListener('click', () => {
    contactForm.style.display = 'none'
    show = false
  })
}
handleContactForm()

const handleCertificateSection = () => {
  certificateBtn.addEventListener('click', () => {
    certificateSection.style.display = 'flex'
    certificateBtn.classList.add('active')
    projectBtn.classList.remove('active')
  })
  projectBtn.addEventListener('click', () => {
    certificateSection.style.display = 'none'
    projectBtn.classList.add('active')
    certificateBtn.classList.remove('active')
  })
  certificatesLinks.forEach((el, ind) =>
    el.addEventListener('click', () => {
      window.location.href = Links[ind]
    })
  )
}
handleCertificateSection()

const handleResumeDownload = () => {
  resumeBtn.addEventListener('click', () => {
    resumeBtn.addEventListener('click', () => {
      window.open('./assets/Ganesh_Belote_MERN_Resume_updated.pdf', '_blank') 
    })
  })
}
handleResumeDownload()
