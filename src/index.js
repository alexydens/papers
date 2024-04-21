const papers = [
  'wallpapers/coast.jpg',
  'wallpapers/ferns.jpg',
  'wallpapers/flower.jpg',
  'wallpapers/forest.jpg',
  'wallpapers/forest1.jpg',
  'wallpapers/mountains.jpg',
  'wallpapers/mountains1.jpg',
  'wallpapers/mountains2.jpg',
  'wallpapers/pier.jpg',
  'wallpapers/satellite.jpg',
  'wallpapers/waves.jpg',
];

const input = document.getElementById('search-input');
let query = '';
setInterval(() => {
  const old_query = query;
  query = input.value;
  if (old_query !== query) {
    //console.log(query);
    document.getElementById('results').innerHTML = '';
    let results = 0;
    for (let i = 0; i < papers.length; i++) {
      if (papers[i].includes(query.toLowerCase())) {
        //console.log('found', papers[i]);
        const image = document.createElement('img');
        image.src = papers[i];
        image.className = 'image';
        document.getElementById('results').appendChild(image);
        results++;
      }
      document.getElementById('results-count').innerHTML =
        `Recieved ${results} results for "${query}".`;
    }
  }
}, 1000);
