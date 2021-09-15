import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner';
import { DragDropContext, Droppable, resetServerContext } from 'react-beautiful-dnd';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import NoteItem from './NoteItem/NoteItem';
import { styles } from './styles';
import './index.css';

const NoteList = ({
  style,
  notes,
  baseNotes,
  onSelect,
  activeNote,
  onChangedOrder,
}) => {
  const [loadedNotes, setLoadedNotes] = useState([]);
  const [hasMore, setHasMore] = useState(notes.length ? true : false);
  const [page, setPage] = useState(1);

  const PAGE_SIZE = 4;
  const SERVER_RESPONSE_TIME_EMULATION = 200;

  useEffect(() => {
    if (page === 1) {
      setTimeout(() => {
        loadNotes(page);
        console.log('notes loaded');
        if (notes.length > page * PAGE_SIZE) {
          setHasMore(true);
        }
      }, SERVER_RESPONSE_TIME_EMULATION);
    } else {
      setPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notes]);

  useEffect(() => {
    console.log('page initial');
    if (!hasMore) {
      setHasMore(page * PAGE_SIZE < notes.length);
    }

    setTimeout(() => {
      loadNotes(page);
      if (page * PAGE_SIZE >= notes.length) {
        setHasMore(false);
      }
    }, SERVER_RESPONSE_TIME_EMULATION);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const loadNotes = (page) => setLoadedNotes(notes.slice(0, PAGE_SIZE * page));

  const handleLoadMore = () => setPage(page + 1);

  const swapNotes = (src, dst) => {
    const realSrc = getIndex(baseNotes, loadedNotes[src].id);
    const realDst = getIndex(baseNotes, loadedNotes[dst].id);
    const result = Array.from(baseNotes);

    console.log(src, dst);
    console.log(realSrc, realDst);

    const [extracted] = result.splice(realSrc, 1);
    result.splice(realDst, 0, extracted);

    return result;
  };

  const changeNotesOrder = (result) => {
    if (result.destination) {
      const sourceIndex = result.source.index;
      const destinIndex = result.destination.index;

      //swap
      const newOrderNotes = swapNotes(sourceIndex, destinIndex);

      onChangedOrder(newOrderNotes);
    }
  };

  const getIndex = (notes, id) => {
    let res = -1;

    notes.forEach((note, index) => {
      if (note.id === id) {
        res = index;
      }
    });

    return res;
  }; // move it to utils?

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
  baseNotes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
