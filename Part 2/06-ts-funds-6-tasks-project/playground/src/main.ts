import './assets/style.css'
import viteLogo from '/vite.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="/tasks">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
  </div>
`
