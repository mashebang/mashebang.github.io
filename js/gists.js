document.addEventListener('DOMContentLoaded', () => {
  fetch('https://api.github.com/gists/67e8de23bfe66f19c185491db3b7aef7')
    .then(response => response.json())
    .then((results) => {
      const posts = Object.keys(results.files).map(title => {
        return `
          <h1>
            <a target='_blank' href="/post.html?title=${title.replaceAll(' ', '-')}">${title.split(']')[1]}</a>
          </h1>
        `
      }).sort((a, b) => {
        const dateA = a.split(']')[0].substring(1);
        const dateB = b.split(']')[0].substring(1);
        return dateA < dateB ? -1 : 1;
      });

      const projectsContainer = document.getElementById('gists')

      projectsContainer.innerHTML = posts.join('')
  })
})
