document.addEventListener("DOMContentLoaded", () => {
  
  const form =document.querySelector('form')
  
  form.addEventListener('submit',(e) => {
    
    e.preventDefault()
    
    makeList(e.target.new_task_description.value)
    
    form.reset()
  })


  function makeList(input) {
    const p = document.createElement('p')
    
    const btn = document.createElement('button')
    
    p.textContent = `${input} `
    
    p.appendChild(btn)
    
    btn.textContent = 'X'
    
    document.querySelector('#list').appendChild(p)
    
    btn.addEventListener('click', () => {
      p.remove()
    })


  }


});