import React, { Component } from 'react';
import { GojsDiagram } from 'react-gojs';
import * as go from 'gojs';

import './fitDiagram.scss';
import '../../styles/common.scss';

export class FitDiagram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: {
        nodeDataArray: [{ key: 'Good shape', label: 'Good shape', color: 'lightblue' }],
        linkDataArray: []
      }
    };
  }

  createDiagram = diagramId => {
    const $ = go.GraphObject.make;

    const myDiagram = $(go.Diagram, diagramId, {
      initialContentAlignment: go.Spot.TopCenter,
      layout: $(go.TreeLayout, {
        angle: 90
      })
    });

    myDiagram.nodeTemplate = $(
      go.Node,
      'Auto',
      $(go.Shape, 'RoundedRectangle', { strokeWidth: 0 }, new go.Binding('fill', 'color')),
      $(go.TextBlock, { margin: 8 }, new go.Binding('text', 'label'))
    );

    return myDiagram;
  };

  initModel = () => {
    this.setState(prevState => ({
      ...prevState,
      model: {
        nodeDataArray: [
          { key: 'goodShape', label: 'Good shape', color: 'lightblue' },
          { key: 'sport', label: 'Sport', color: 'orange' },
          { key: 'healthyFood', label: 'Healthy Food', color: 'yellow' }
        ],
        linkDataArray: [
          { from: 'goodShape', to: 'sport' },
          { from: 'goodShape', to: 'healthyFood' }
        ]
      }
    }));
  }

  render() {
    return [
      <button
        className='btn-default btn-diagram'
        key='initDiagram'
        onClick={this.initModel}
      >
      Click to see recipe for a good shape
      </button>,
      <GojsDiagram
        key='fitDiagram'
        className='diagram'
        diagramId='fitDiagram'
        createDiagram={this.createDiagram}
        model={this.state.model}
      />
    ];
  }
};
