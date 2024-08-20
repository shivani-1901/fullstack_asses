import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import SurveyItem from './SurveyItem';

const Survey = () => {
  const [components, setComponents] = useState([]);

  const [, drop] = useDrop(() => ({
    accept: 'COMPONENT',  // Ensure this matches the type used in SurveyItem.js
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const component = {
        id: components.length + 1,
        type: item.type,
        left: offset.x - 250, // Adjust based on your layout
        top: offset.y - 100,  // Adjust based on your layout
      };
      setComponents((prevComponents) => [...prevComponents, component]);
    },
  }));

  return (
    <div
      ref={drop}
      style={{
        width: '100%',
        height: '800px',
        border: '1px solid black',
        position: 'relative',
        backgroundColor: '#f5f5f5',
      }}
    >
      {components.map((component) => (
        <SurveyItem key={component.id} component={component} />
      ))}
    </div>
  );
};

export default Survey;
