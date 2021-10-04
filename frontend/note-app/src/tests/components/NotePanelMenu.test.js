import 'jsdom-global/register';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import NotePanelMenu from './../../components/NotePanelMenu/NotePanelMenu';

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() });
});

test('NotePanelMenu: AddNotePanel open button click', () => {
  const wrapper = shallow(
    <NotePanelMenu notes={[]} displayNotes={() => {}} refreshNotes={() => {}} />
  );

  const button = wrapper.find('[test-data="addNoteButton"]');

  let panel = wrapper.find('[test-data="addNotePanel"]');

  expect(panel.prop('shown')).toBe(false);

  button.simulate('click');
  panel = wrapper.find('[test-data="addNotePanel"]');

  expect(panel.prop('shown')).toBe(true);
});

test('NotePanelMenu: FilterByDatePanel open button click', () => {
  const wrapper = shallow(
    <NotePanelMenu notes={[]} displayNotes={() => {}} refreshNotes={() => {}} />
  );

  const button = wrapper.find('[test-data="dateFilterButton"]');

  let panel = wrapper.find('[test-data="filterByDatePanel"]');

  expect(panel.prop('shown')).toBe(false);

  button.simulate('click');
  panel = wrapper.find('[test-data="filterByDatePanel"]');

  expect(panel.prop('shown')).toBe(true);
});

test('NotePanelMenu: FilterByNamePanel open button click', () => {
  const wrapper = shallow(
    <NotePanelMenu notes={[]} displayNotes={() => {}} refreshNotes={() => {}} />
  );

  const button = wrapper.find('[test-data="nameFilterButton"]');

  let panel = wrapper.find('[test-data="filterByNamePanel"]');

  expect(panel.prop('shown')).toBe(false);

  button.simulate('click');
  panel = wrapper.find('[test-data="filterByNamePanel"]');

  expect(panel.prop('shown')).toBe(true);
});
