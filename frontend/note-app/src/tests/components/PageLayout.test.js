import 'jsdom-global/register';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import PageLayout from '../../components/common/PageLayout/PageLayout';
import { authorizeReducer } from '../../utils/reducers';
import { NOTES } from '../../config/constants';

let storePlug;

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() });

  const initialStoreState = {
    loggedInUser: {
      email: 'apolo@gmail.com',
    },
    isLoggedIn: true,
    sharedNotes: NOTES,
    setSharedNotes: (notes) => (this.sharedNotes = notes),
  };

  storePlug = createStore(authorizeReducer, initialStoreState);
});

const expectedPageContent = <div>Some content provided</div>;

test('PageLayout children test', () => {
  const wrapper = mount(
    <Provider store={storePlug}>
      <Router>
        <PageLayout>{expectedPageContent}</PageLayout>
      </Router>
    </Provider>
  );

  const layout = wrapper.find('PageLayout');

  expect(layout.props().children).toStrictEqual(expectedPageContent);
});