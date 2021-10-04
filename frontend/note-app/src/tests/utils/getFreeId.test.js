import getFreeId from '../../utils/getFreeId';

const ID_LIST = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 5,
  },
  {
    id: 3,
  },
];

test('getFreeId test', () => {
  expect(getFreeId(ID_LIST)).toBe(4);
});
