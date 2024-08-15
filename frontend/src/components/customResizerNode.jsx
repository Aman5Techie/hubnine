import React, { memo } from 'react';
import { Handle, Position, NodeResizeControl } from '@xyflow/react';
import ShowTxt from './showtxt';

const controlStyle = {
  background: 'transparent',
  border: 'none',
};

const nodeStyle = {
  backgroundColor: '#f0f0f0', // Light background color
  borderRadius: '4px',        // Rounded corners
  padding: '10px',            // Padding inside the node
  position: 'relative',       // To position the ResizeIcon correctly
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Optional: Adds a subtle shadow
};

function CustomNode({ data }) {
  return (
    <div style={nodeStyle} className="relative">
      <NodeResizeControl style={controlStyle} minWidth={100} minHeight={50}>
        <ResizeIcon />
      </NodeResizeControl>

      <div className="px-4 py-2">
        <div className="text-md font-bold">
          {data.text.slice(0, 5)}...
          <ShowTxt text={data.text} triggerText="Read more" />
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="top-top-target"
        className="w-1 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Top}
        id="top-top-source"
        className="w-1 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="top-bottom-source"
        className="w-1 !bg-teal-500"
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="top-bottom-target"
        className="w-1 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Left}
        id="top-left-source"
        className="w-1 !bg-teal-500"
      />
      <Handle
        type="target"
        position={Position.Left}
        id="top-left-target"
        className="w-1 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="top-right-source"
        className="w-1 !bg-teal-500"
      />
      <Handle
        type="target"
        position={Position.Right}
        id="top-right-target"
        className="w-1 !bg-teal-500"
      />
    </div>
  );
}

function ResizeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#ff0071"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ position: 'absolute', right: 5, bottom: 5 }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="16 20 20 20 20 16" />
      <line x1="14" y1="14" x2="20" y2="20" />
      <polyline points="8 4 4 4 4 8" />
      <line x1="4" y1="4" x2="10" y2="10" />
    </svg>
  );
}

export default memo(CustomNode);
