import getIndexById from './../../utils/getIndexById';

const NOTES_PLUG = [
  { id: 0 },
  { id: 2 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 20 },
  { id: 15 },
  { id: 13 },
  { id: 220 },
  { id: 1 },
];

test('getIndexById full array test', () => {
  NOTES_PLUG.forEach((note, index) => {
    expect(getIndexById(NOTES_PLUG, note.id)).toBe(index);
  });
});

test('getIndexById no result test', () => {
  expect(getIndexById(NOTES_PLUG, 500)).toBe(-1);
});
