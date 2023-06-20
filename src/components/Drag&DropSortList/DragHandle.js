import { DragIconWrapper } from "../Drag&DropSortList/dragDropStyles";
import { ReactComponent as DragHandleIcon } from "../../images/drag.svg";
import React from "react";

export function DragHandle(props) {
  return (
    <DragIconWrapper {...props}>
      <DragHandleIcon />
    </DragIconWrapper>
  );
}