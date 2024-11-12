document.getElementById('year').textContent = new Date().getFullYear()

const body = document.getElementById('body')

function toggleTheme() {
  if (body.classList.contains('bg-netflix')) {
    body.classList.remove('bg-netflix')
    body.classList.add('bg-light')
    localStorage.setItem('theme', 'dark')
  } else {
    body.classList.add('bg-netflix')
    body.classList.remove('bg-light')
    localStorage.setItem('theme', 'light')
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    body.classList.add('bg-netflix')
    body.classList.remove('bg-light')
  } else {
    body.classList.add('bg-light')
    body.classList.remove('bg-netflix')
  }
}

mode.addEventListener('click', toggleTheme)

loadTheme()
