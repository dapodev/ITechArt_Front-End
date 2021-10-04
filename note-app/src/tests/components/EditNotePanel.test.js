import 'jsdom-global/register';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import EditNotePanel from './../../components/EditNotePanel/EditNotePanel';

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() });
});

test('EditNotePanel: onedited test', () => {
  const onEditedMock = jest.fn();

  const wrapper = shallow(
    <EditNotePanel onEdited={onEditedMock} onCanceled={() => {}} />
  );

  const applyButton = wrapper.find('[type="submit"]').first();

  applyButton.simulate('click');

  expect(onEditedMock.mock.calls).not.toBe(0);
});

test('EditNotePanel: oncanceled test', () => {
  const onCancelMock = jest.fn();

  const wrapper = shallow(
    <EditNotePanel onEdited={() => {}} onCanceled={onCancelMock} />
  );

  const applyButton = wrapper.find('[test-data="cancelButton"]').first();

  applyButton.simulate('click');

  expect(onCancelMock.mock.calls).not.toBe(0);
});
