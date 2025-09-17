import axios from 'axios';

axios({
  params: {
    _limit: 10,
    _page: 3,
  },
})
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  });
function createMarkup(arr) {
  return arr.map(
    ({ previewURL, tags }) =>
      `<li>
            <img src = "${previewURL}> 
         </li>`
  );
}
