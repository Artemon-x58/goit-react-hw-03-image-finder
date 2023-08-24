export const funcRequest = (tag, page) =>
  fetch(
    `https://pixabay.com/api/?q=${tag}&page=1&key=38156163-5b07cf7816d411510811c16ef&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
  ).then(res => res.json());
