import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
  requestHomeJson: ['home'],
  receiveHomeJson: ['homeData'],
});

export { Creators, Types };
