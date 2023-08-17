import React from "react";
import List from "./List";
import { ListContainer, ListItem, RouteDiabledHeading, RouteModalHeading } from "./dragDropStyles";
import { DragDropContext, Draggable, Droppable, } from 'react-beautiful-dnd';
import { DragHandle } from "./DragHandle";
import { ModalBodyConatiner } from "../../views/main/TransportModule/TransportRoute/components/AddRouteStyles";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import config from '../../config';

const DragDropList = ({orderHeading}) => {
  const [response, setRespone] = useState([]);
    
/**
 * 
 * Get Order Stops
 */
useEffect(() => {
        axios.get(config.baseUrl + 'api-transport/transportStopApiManager/showStopOrder').then((response) => {
            setRespone(response.data);
            console.log(response.data);
        }).catch((errorCatch) => {
            console.log(errorCatch);
        });
}, []);
  const list = response;
  return (
    <>
    <ModalBodyConatiner>
    <div className="App">
      <DragDropContext 
        onDragEnd={(param) => {
        const srcI = param.source.index;
        const desI = param.destination?.index;
        if (desI) {
        list.splice(desI, 0, list.splice(srcI, 1)[0]);
        // List.saveList(list);
        }
      }}>
        <ListContainer>
          <RouteModalHeading>
          <h6>Click on a head and drag it up or down to change it's order</h6>
          <RouteDiabledHeading>
            <h6>{orderHeading ? orderHeading : 'Route Name'}</h6>
          </RouteDiabledHeading>
          </RouteModalHeading>
          <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {list.map((item, i) => (
                  <Draggable 
                  key={item.id} 
                  draggableId={"draggable-" + item.id} 
                  index={i}>
                    {(provided, _) => (
                      <ListItem 
                      ref={provided.innerRef} {...provided.draggableProps}  {...provided.dragHandleProps}
                      >
                        <DragHandle  {...provided.dragHandleProps}/>
                        <span>{item.title}</span>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </ListContainer>
      </DragDropContext>
    </div>
    </ModalBodyConatiner>
    </>
  );
};

export default DragDropList;