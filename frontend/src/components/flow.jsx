import React, { useCallback, useEffect, useState } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import "@xyflow/react/dist/base.css";
import CustomNode from "./customnode";

const initialEdges = [
  {
    source: "3",
    sourceHandle: "top-left-source",
    target: "1",
    targetHandle: "top-right-target",
    id: "xy-edge__3top-left-source-1top-right-target",
  },
];
import CustomResizerNode from "./customResizerNode";
import { useSelector } from "react-redux";
const nodeTypes = {
  CustomResizerNode,
};

export default function Flow({ Nodes, Edges }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [nodetype, setnodetype] = useState(false);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const datanodes = useSelector((state) => state.datareducer.data);
  const typenodes = useSelector((state) => state.typereducer.type);

  useEffect(() => {
      console.log(nodes);
    setNodes([...nodes, ...datanodes]);
  }, [datanodes,]);

  function updateNodeTypes(nodes, bool) {
    
    if (bool) {
      return nodes.map((node) => ({
        ...node, // Copy all existing properties
        type: "CustomResizerNode", // Update the type property
      }));
    }

    return nodes.map((node) => ({
      ...node, // Copy all existing properties
      type: "custom", // Update the type property
    }));
  }

  useEffect(() => {
    if(nodes.length == 0){
        setnodetype(typenodes);
        return;
    }
    const retunarr = updateNodeTypes(nodes,typenodes)
    setNodes(retunarr)
    setnodetype(typenodes);
  }, [typenodes,]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        // onNodeClick={changenodetype}
        nodeTypes={nodetype ? nodeTypes : { custom: CustomNode }}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
