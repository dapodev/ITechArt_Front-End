import 'jsdom-global/register';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Snackbar from './../../components/Snackbar/Snackbar';

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() });
});

test('Snackbar: passing & displaying message', () => {
  const testMessage = "Hello, I'm an error";

  const wrapper = shallow(
    <Snackbar
      isSnackOpened={true}
      alertType={'error'}
      handleClose={() => {}}
      message={testMessage}
    />
  );

  expect(wrapper.contains(testMessage)).toBeTruthy();
});