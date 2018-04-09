import React from 'react';
import { withFauxDOM } from 'react-faux-dom';

const d3 = require('d3');
const axios = require('axios');
const ReactFauxDOM = require('react-faux-dom');

const testVar = 'hello';
let svg;
class TagCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: 0,
      mouseOver: false,
      svg: []
    };
  }
  componentDidUpdate() {
    console.log('updates');
  }
  getPairedProjects(tag) {
    axios.get(`/api/pair/${tag}`)
      .then((res) => {
        this.props.setSelectedTags(res.data);
        this.props.getTagProjects(tag);
      });
  }


  packageImports(nodes) {
    let map = {},
      imports = [];

    // Compute a map from name to node.
    nodes.forEach((d) => {
      map[d.data.name] = d;
    });

    // For each import, construct a link from the source to target node.
    nodes.forEach((d) => {
      if (d.data.imports) {
        d.data.imports.forEach((i) => {
          imports.push(map[d.data.name].path(map[i]));
        });
      }
    });

    return imports;
  }

  packageHierarchy(classes) {
    const map = {};

    function find(name, data) {
      let node = map[name],
        i;
      if (!node) {
        node = map[name] = data || { name, children: [] };
        if (name.length) {
          node.parent = find(name.substring(0, i = name.lastIndexOf('.')));
          node.parent.children.push(node);
          node.key = name.substring(i + 1);
        }
      }
      return node;
    }

    classes.forEach((d) => {
      find(d.name, d);
    });

    return d3.hierarchy(map['']);
  }
  componentDidMount() {
    console.log('yes, i updated');
    let diameter = 600,
      radius = diameter / 2,
      innerRadius = radius - 120;

    const cluster = d3.cluster()
      .size([360, innerRadius]);

    const line = d3.radialLine()
      .curve(d3.curveBundle.beta(0))
      .radius(d => d.y)
      .angle(d => d.x / 180 * Math.PI);

    const self = this;
    svg = d3.select(ReactFauxDOM.createElement('svg'))
      .attr('width', diameter * 2)
      .attr('height', diameter * 2)
      .append('svg');
    // .attr('transform', `translate(${radius},${radius})`);
    let link = svg.append('svg').selectAll('.link'),
      node = svg.append('svg').selectAll('.node');


    // debugger;// eslint-disable-line

    d3.json('flare.json', (error, classes) => {
      // debugger;// eslint-disable-line

      if (error) throw error;

      const root = this.packageHierarchy(classes)
        .sum(d => d.size);

      cluster(root);

      link = link
        .data(this.packageImports(root.leaves()))
        .enter().append('path')
        .each((d) => { d.source = d[0], d.target = d[d.length - 1]; })
        .attr('class', this.state.mouseOver ? 'link' : 'link')
        .attr('d', line);
      console.log(svg);
      node = node
        .data(root.leaves())
        .enter().append('text')
        .attr('class', 'node')
        .attr('dy', '0.31em')
        .attr('transform', d => `rotate(${d.x - 90})translate(${d.y + 8},0)${d.x < 180 ? '' : 'rotate(180)'}`)
        .attr('text-anchor', d => (d.x < 180 ? 'start' : 'end'))
        .text(d => d.data.key)
        .on('click', (d) => {
          console.log(d);
          this.setState({ mouseOver: !this.state.mouseOver });
          link
            .classed('link--target', (l) => { if (l.target === d) return l.source.source = true; })
            .classed('link--source', (l) => { if (l.source === d) return l.target.target = true; })
            .filter(l => l.target === d || l.source === d)
            .raise();
        });
      // debugger;// eslint-disable-line
      // this.setState({ dummy: this.state.dummy + 1 });
      this.setState({ mouseOver: !this.state.mouseOver });
    });
  }


  render() {
    return (
      <div>
        {true && this.state.dummy}
        {svg && svg.node().toReact()}
      </div>
    );
  }
}

export default TagCircle;
