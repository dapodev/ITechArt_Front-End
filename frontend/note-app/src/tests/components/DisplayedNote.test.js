import 'jsdom-global/register';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import DisplayedNote from '../../components/DisplayedNote/DisplayedNote';

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() });
});

test('DisplayedNote: edit click test', () => {
  const setEditingMock = jest.fn();

  const wrapper = mount(
    <DisplayedNote
      notes={[]}
      activeNote={{}}
      setEditing={setEditingMock}
      isEditing={false}
      refreshNotes={() => {}}
      onSharedChanged={() => {}}
      onDeleted={() => {}}
    />
  );

  const editButton = wrapper.find('[test-data="editButton"]').first();

  editButton.simulate('click');

  expect(setEditingMock.mock.calls.length).toBe(1);

  editButton.simulate('click');

  expect(setEditingMock.mock.calls.length).toBe(2);
});

test('DisplayedNote: delete click test', () => {
  const onDeleteMock = jest.fn();

  const wrapper = mount(
    <DisplayedNote
      notes={[]}
      activeNote={{}}
      setEditing={() => {}}
      isEditing={false}
      refreshNotes={() => {}}
      onSharedChanged={() => {}}
      onDeleted={onDeleteMock}
    />
  );

  const deleteButton = wrapper.find('[test-data="deleteButton"]').first();

  deleteButton.simulate('click');

  expect(onDeleteMock.mock.calls.length).toBe(1);
});
