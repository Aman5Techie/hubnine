import React, { useEffect, useState, useRef } from 'react';
import {
  Handle,
  Position,
  useUpdateNodeInternals,
  NodeResizer,
} from '@xyflow/react';
import { drag } from 'd3-drag';
import { select } from 'd3-selection';

// import styles from './style.module.css';

export default function ResizeRotateNode({
  id,
  sourcePosition = Position.Left,
  targetPosition = Position.Right,
  data,
}) {
  const rotateControlRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();
  const [rotation, setRotation] = useState(0);
  const [resizable, setResizable] = useState(!!data.resizable);

  useEffect(() => {
    if (!rotateControlRef.current) {
      return;
    }

    const selection = select(rotateControlRef.current);
    const dragHandler = drag().on('drag', (evt) => {
      const dx = evt.x - 100;
      const dy = evt.y - 100;
      const rad = Math.atan2(dx, dy);
      const deg = rad * (180 / Math.PI);
      setRotation(180 - deg);
      updateNodeInternals(id);
    });

    selection.call(dragHandler);
  }, [id, updateNodeInternals]);

  return (
    <>
      <div
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
        className="w-full h-full rounded-[15px] border border-black bg-white p-5 box-border"
      >
        <NodeResizer isVisible={resizable} minWidth={180} minHeight={100} />
        <div
          ref={rotateControlRef}
    
        />
        <div>
          {data?.label}
        </div>
        <Handle
          style={{ opacity: 0 }}
          position={sourcePosition}
          type="source"
        />
        <Handle
          style={{ opacity: 0 }}
          position={targetPosition}
          type="target"
        />
      </div>
    </>
  );
}
