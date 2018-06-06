import axios from 'axios'

const getData = (json, store, set) => {
  axios.get(json)
  .then(response => {
    // JSON responses are automatically parsed.
    store.commit(set, response.data);
  })
  .catch(error => {
    console.log(error);
  })
};
export { getData };
