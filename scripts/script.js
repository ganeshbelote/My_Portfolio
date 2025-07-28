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
const contactFormInputs = document.querySelector('.contact-form form')
const submitBtn = document.querySelector('.contact-form form button[type="submit"]')

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
    window.open('./assets/Ganesh_Belote_MERN_Resume_updated.pdf', '_blank')
  })
}
handleResumeDownload()

const handleEmailService = () => {
  contactFormInputs.addEventListener('submit', e => {
    e.preventDefault()
    if (!contactFormInputs.email.value || !contactFormInputs.subject.value || !contactFormInputs.message.value) {
      Toastify({
        text: 'Please fill in all fields.',
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
          background: '#dc3545'
        }
      }).showToast()
      return
    }
    const formData = new FormData(contactFormInputs)
    const data = Object.fromEntries(formData.entries())
    submitBtn.classList.add('dull')
    submitBtn.textContent = 'Sending...'
    fetch('/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          Toastify({
            text: 'Message sent successfully!',
            duration: 3000,
            gravity: 'top',
            position: 'right',
            style: {
              background: '#28a745'
            }
          }).showToast()
          contactFormInputs.reset()
          contactForm.style.display = 'none'
        } else {
          Toastify({
            text: 'There was an error sending your message.',
            duration: 3000,
            gravity: 'top',
            position: 'right',
            style: {
              background: '#dc3545'
            }
          }).showToast()
        }
      })
      .finally(() => {
        submitBtn.classList.remove('dull')
        submitBtn.textContent = 'Send Message'
      })
      .catch(error => {
        console.error('Error:', error)
        Toastify({
          text: 'Something went wrong!',
          duration: 3000,
          gravity: 'top',
          position: 'right',
          style: {
            background: '#dc3545'
          }
        }).showToast()
      })
  })
}
handleEmailService()
