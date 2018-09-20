export default {
  getTvShow: query =>
    fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
      .then(response => response.json())
      .then(response => response.map(item => item.show)),
};

