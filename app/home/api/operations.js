import fetch from 'cross-fetch';
import Creators from './actions';

const requestHomeJsonAction = Creators.requestHomeJson;
const receiveHomeJsonAction = Creators.receiveHomeJson;

const fetchHomeJson = home => (dispatch) => {
  // Dispatching this action will toggle the 'showHomeSpinner'
  // flag in the store, so that the UI can show a loading icon.
  dispatch(requestHomeJsonAction(home));
  return fetch(`https://www.reddit.com/r/${home}.json`)
    .then(response => response.json())
    .then((json) => {
      const responseData = json;
      const data = [];

      responseData.data.children.map((child) => {
        const childData = {
          title: child.data.title,
          url: child.data.permalink,
        };

        data.push(childData);
        return null;
      });

      // Dispatching this action while passing the 'data' array
      // we created above will update the store with this data.
      // It is good practice to send only the required information
      // rather than trimming the data when and where it is used.
      // This is why we aren't sending the entire JSON response to
      // the Redux store.
      dispatch(receiveHomeJsonAction(data));
    });
};

export default {
  fetchHomeJson,
};
