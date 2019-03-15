const baseURL = "http://api.tvmaze.com";

async function search(term) {
  const url = `${baseURL}/search/shows?q=${term}`;
  const uri = encodeURI(url);

  const response = await fetch(uri);
  const results = await response.json();

  return results.map(result => result.show);
}

async function fetchShow(id) {
  const url = `${baseURL}/shows/${id}`;
  const uri = encodeURI(url);

  const response = await fetch(uri);
  return await response.json();
}

export { search, fetchShow };
