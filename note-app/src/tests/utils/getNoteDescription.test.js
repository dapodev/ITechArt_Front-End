import { MAX_DESCRIPTION_LENGTH } from '../../config/constants';
import getNoteDescription from './../../utils/getNoteDescription';

const SHORT_DESCRIPTION = 'short desc';
const LONG_DESCRIPTION =
  'some really long description that should be cutted and appended with ...';
const EXPECTED_LDESCRIPTION = 'some really long des...';
const EXPECTED_MAXDESCRIPTION = LONG_DESCRIPTION.substring(
  0,
  MAX_DESCRIPTION_LENGTH
);

const note_shortDescription = {
  id: 0,
  title: 'some title',
  description: SHORT_DESCRIPTION,
  creation: new Date().toDateString(),
};

const note_longDescription = {
  id: 0,
  title: 'some title',
  description: LONG_DESCRIPTION,
  creation: new Date().toDateString(),
};

const note_maxDescription = {
  id: 0,
  title: 'some title',
  description: LONG_DESCRIPTION.substring(0, MAX_DESCRIPTION_LENGTH),
  creation: new Date().toDateString(),
};

const note_noDescription = {
  id: 0,
  title: 'some title',
  creation: new Date().toDateString(),
};

test('getNoteDescription short description test', () => {
  expect(getNoteDescription(note_shortDescription)).toStrictEqual(
    SHORT_DESCRIPTION
  );
});

test('getNoteDescription long description test', () => {
  expect(getNoteDescription(note_longDescription)).toStrictEqual(
    EXPECTED_LDESCRIPTION
  );
});

test('getNoteDescription description with MAX_DESCIPTION_LENGTH test', () => {
  expect(getNoteDescription(note_maxDescription)).toStrictEqual(
    EXPECTED_MAXDESCRIPTION
  );
});

test('getNoteDescription w/o description field test', () => {
  expect(getNoteDescription(note_noDescription)).toStrictEqual('');
});
