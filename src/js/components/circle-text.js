document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.circle-text').forEach(el => {
    if (el) {
      el.innerHTML = "сообщество любителей самокатов".split('')
      .map((e,i) => `<span style="--rot:${i*11.8}deg">${e}</span>`).join('');
    }
  })
})
