import React from "react";
import List from "./List";
import { ListContainer, ListItem } from "./dragDropStyles";
import { DragDropContext, Draggable, Droppable, } from 'react-beautiful-dnd';
import { DragHandle } from "./DragHandle";

const DragDropList = () => {
  const list = List.getList();
  return (
    <div className="App">
      <DragDropContext onDragEnd={(...props) => {
        console.log(props);
      }}>
        <ListContainer>
          <h1>The List</h1>
          <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {list.map((item, i) => (
                  <Draggable key={item.id} draggableId={"draggable-" + item.id} index={i}>
                    {(provided, snapshot) => (
                      <ListItem ref={provided.innerRef} {...provided.draggableProps}
                      >
                        <DragHandle  {...provided.dragHandleProps} />
                        <span>{item.title}</span>
                      </ListItem>
                    )}

                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </ListContainer>
      </DragDropContext>
    </div>
  );
};

export default DragDropList;