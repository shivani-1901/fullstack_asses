import React from 'react';
import { useDrag } from 'react-dnd';

const SurveyItem = ({ component }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COMPONENT',  // Ensure this matches the type used in Survey.js
    item: { ...component },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        position: 'absolute',
        left: component.left,
        top: component.top,
        border: '1px solid black',
        padding: '8px',
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: 'white',
      }}
    >
      {component.type}
    </div>
  );
};

export default SurveyItem;
