document.addEventListener('DOMContentLoaded', () => {
  fetch('https://api.github.com/users/mashebang/repos')
    .then(response => response.json())
    .then((results) => {
      const posts = results.map(i => {
        return `
          <div class="terminal-card">
            <header>${i.name}</header>
            <div>${i.description}</div>
            <a target='_blank' href="${i.html_url}">see more</a>
          </div>
        `
      });

      const projectsContainer = document.getElementById('github-projects')

      projectsContainer.innerHTML = posts.join('')
  })
})
