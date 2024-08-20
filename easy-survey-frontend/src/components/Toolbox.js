import React from 'react';
import { useDrag } from 'react-dnd';

const Toolbox = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'LABEL', // or 'INPUT_TEXT', etc.
    item: { type: 'label' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ width: 200, opacity: isDragging ? 0.5 : 1 }}>
      <div>Label</div>
    </div>
  );
};

export default Toolbox;
