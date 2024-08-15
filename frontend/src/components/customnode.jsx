import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import ShowTxt from './showtxt';
function CustomNode(totaldata) {
  console.log(totaldata);
  
  const {data,} = totaldata
  
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400" 
  
    >
      <div className="flex">
        {/* <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
          {data.emoji}
        </div> */}
        <div className="ml-2">
          <div className="text-md font-bold">
          {data.text.slice(0, 5)}.....
          </div>
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
        className="w-0 !bg-teal-500"
      />
      <Handle
        type="target"
        position={Position.Left}
         id="top-left-target"
        className="w-0 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="top-right-source"
        className="w-0 !bg-teal-500"
      />
      <Handle
        type="target"
        position={Position.Right}
        id="top-right-target"
        className="w-0 !bg-teal-500"
      />
    </div>
  );
}

// export default memo(CustomNode);
export default CustomNode;

// {
//   "id": "1",
//   "data": {
//       "text": "Temporary Node one 1."
//   },
//   "type": "custom",
//   "positionAbsoluteX": 50,
//   "positionAbsoluteY": 50,
//   "selectable": true,
//   "draggable": true,
//   "deletable": true,
//   "isConnectable": true,
//   "dragging": false,
//   "zIndex": 0,
//   "width": 117,
//   "height": 76
// }