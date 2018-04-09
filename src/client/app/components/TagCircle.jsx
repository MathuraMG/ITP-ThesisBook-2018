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
      .attr('width', diameter)
      .attr('height', diameter)
      .attr('class', 'tagCircle__container');

    let link = svg.append('svg').selectAll('.link'),
      node = svg.append('svg').selectAll('.node');

    d3.json('flare.json', (error, classes) => {
      if (error) throw error;

      const root = this.packageHierarchy(classes)
        .sum(d => d.size);

      cluster(root);

      link = link
        .data(this.packageImports(root.leaves()))
        .enter().append('path')
        .each((d) => { d.source = d[0], d.target = d[d.length - 1]; })
        .attr('class', this.state.mouseOver ? 'link' : 'link')
        .attr('transform', `translate(${radius},${radius})`)
        .attr('d', line);
      console.log(svg);
      node = node
        .data(root.leaves())
        .enter().append('text')
        .attr('class', 'node')
        .attr('dy', '0.31em')
        .attr('transform', d => `translate(${d.y - 30 + radius / 2},${radius})rotate(${d.x - 90})translate(${d.y / 2 + 20 + radius / 4},0)${d.x < 180 ? '' : 'rotate(180)'}`)
        .attr('text-anchor', d => (d.x < 180 ? 'start' : 'end'))
        .text(d => d.data.key)
        .on('click', (d) => {
          this.setState({ mouseOver: !this.state.mouseOver });
          link
            .classed('link--target', (l) => { if (l.target === d) return l.source.source = true; })
            .filter(l => l.target === d)
            .raise();

          // node.classed('node--source', (n) => {
          //   if (n.source) { return true; } console.log('yo'); return false;
          // });
          //
          node.classed('node--target', (n) => {
            if (n.data.name === d.data.name) {
              return true;
            }
          });
          this.props.setSelectedTag(d.data.name);
          this.getPairedProjects(d.data.name);
        });

      this.setState({ mouseOver: !this.state.mouseOver });
    });
  }

  render() {
    return (
      <div>
        {svg && svg.node().toReact()}
      </div>
    );
  }
}

export default TagCircle;
