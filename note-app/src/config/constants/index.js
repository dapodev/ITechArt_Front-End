export const MAX_DESCRIPTION_LENGTH = 20;

export const NOTES = [
  {
    id: 1,
    title: 'Finish task 1 React',
    description:
      'React is sooooooooooooooooooooooooooooo cooooooooooooooooooool!!!',
    creation: new Date('July 7, 2021 15:45:00').toDateString(),
  },
  {
    id: 2,
    title: 'Have a lunch',
    description: 'Some meat balls are waiting for me..',
    creation: new Date('July 7, 2021 16:00:00').toDateString(),
  },
  {
    id: 3,
    title: 'Just an empty note',
    description: 'Almost empty',
    creation: new Date().toDateString(),
  },
];

export const STORAGE_NOTES_CELL = 'noteList';
