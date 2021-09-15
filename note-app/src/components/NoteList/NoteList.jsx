import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import NoteItem from './NoteItem/NoteItem';
import { styles } from './styles';
import './index.css';

const NoteList = ({ style, notes, onSelect, activeNote, onChangedOrder }) => {
  const [loadedNotes, setLoadedNotes] = useState([]);
  const [hasMore, setHasMore] = useState(notes.length ? true : false);
  const [page, setPage] = useState(1);

  const PAGE_SIZE = 4;

  // maybe should think about another algorithm
  useEffect(() => {
    if (!hasMore) {
      setHasMore(page * PAGE_SIZE < notes.length);
      setLoadedNotes([]);
    }

    setTimeout(() => {
      setLoadedNotes(notes.slice(0, PAGE_SIZE * page));
      if (page * PAGE_SIZE >= notes.length) setHasMore(false);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, notes]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const changeNotesOrder = (result) => {
    const sourceIndex = result.source.index;
    const destinIndex = result.destination?.index || sourceIndex;

    //swap
    const temp = notes[sourceIndex];
    notes[sourceIndex] = notes[destinIndex];
    notes[destinIndex] = temp;

    console.log(sourceIndex, ' -> ', destinIndex);

    onChangedOrder(notes);
  };

  return (
    <div style={style} className="noteList" id="scrollParent">
      <InfiniteScroll
        dataLength={loadedNotes.length}
        next={handleLoadMore}
        hasMore={hasMore}
        loader={
          <div style={styles.loaderContainer}>
            <Loader type="ThreeDots" color="#609BEB" height={50} width={50} />
          </div>
        }
        scrollableTarget="scrollParent"
      >
        <DragDropContext onDragEnd={changeNotesOrder}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {loadedNotes.map((note, index) => (
                  <NoteItem
                    note={note}
                    key={index}
                    onSelect={onSelect}
                    isActive={activeNote?.id === note.id}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </InfiniteScroll>
    </div>
  );
};

NoteList.propTypes = {
  style: PropTypes.object,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
  activeNote: PropTypes.object,
};

export default NoteList;
