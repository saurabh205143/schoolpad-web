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
  const [visibleStops, setVisibleStops] = useState([]);
  const [loadedCount, setLoadedCount] = useState(20);
    
/**
 * 
 * Get Order Stops
 */
useEffect(() => {
        axios.get(config.baseUrl + 'api-transport/transportStopApiManager/showStopOrder').then((response) => {
            setRespone(response.data);
            // console.log(response.data);
            setVisibleStops(response.data.slice(0, loadedCount));
        }).catch((errorCatch) => {
            console.log(errorCatch);
        });
}, []);
  
  useEffect(() => {
    setVisibleStops(response.slice(0, loadedCount));
  }, [loadedCount, response]);

  const list = visibleStops;
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
          localStorage.setItem("theList", JSON.stringify(list));
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
                  <div ref={(el) => {
                    provided.innerRef(el); el?.addEventListener('scroll', () => {
                      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 100 && loadedCount < response.length) {
                        setLoadedCount(prevLoadedCount => prevLoadedCount + 20);
                      }
                    }); }} style={{ overflowY: 'auto', maxHeight: '300px' }} {...provided.droppableProps}>
                {visibleStops.map((item, i) => (
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