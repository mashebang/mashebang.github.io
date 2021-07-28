document.addEventListener('DOMContentLoaded', () => {
  fetch('https://api.github.com/gists/67e8de23bfe66f19c185491db3b7aef7')
    .then(response => response.json())
    .then((results) => {
      console.log(results)
      let [prefix, sufix] = (new URLSearchParams(location.search)).get('title').split(']')
      const postKey = prefix + ']' + sufix.replaceAll('-', ' ');
      const postTitle = postKey.split(']')[1];
      console.log(postKey)
      const titleEl = document.getElementById('post-title');
      titleEl.innerHTML = postTitle;
      const post = results.files[postKey];
      const md = new markdownit();
      document.getElementById('post').innerHTML = md.render(post.content)
  })
})
