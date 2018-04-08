import React from 'react';
import { withFauxDOM } from 'react-faux-dom';

const axios = require('axios');

class TagCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: 0
    };
  }
  componentDidUpdate() {
    // console.log('updates');
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

  }

  render() {
    const mouseclick = function (node, link, d) {
      // this.props.setSelectedTag(d.data.name);
      // this.getPairedProjects(d.data.name);


      node
        .each((n) => { n.target = n.source = false; });

      // Array.from(document.getElementsByClassName('link')).forEach((l) => {
      //   l.classList.add('link--target');
      //
      // });
      // debugger;//eslint-disable-line

      link
        .classed('link--target', true);

      // console.log(document.getElementsByClassName('link--target'));

      node
        .classed('node--target', n => n.target)
        .classed('node--source', n => n.source);
    };

    const faux = this.props.connectFauxDOM('div', 'chart');

    // D3 Code to create the chart
    // using faux as container
    let diameter = 600,
      radius = diameter / 2,
      innerRadius = radius - 120;

    const cluster = d3.cluster()
      .size([360, innerRadius]);

    const line = d3.radialLine()
      .curve(d3.curveBundle.beta(0))
      .radius(d => d.y)
      .angle(d => d.x / 180 * Math.PI);

    const svg = d3.select(faux).append('svg')
      .attr('width', diameter)
      .attr('height', diameter)
      .append('g')
      .attr('transform', `translate(${radius},${radius})`);

    let link = svg.append('g').selectAll('.link'),
      node = svg.append('g').selectAll('.node');


    d3.json('flare.json', (error, classes) => {
      if (error) throw error;

      const root = this.packageHierarchy(classes);


      cluster(root);

      link = link
        .data(this.packageImports(root.leaves()))
        .enter().append('path')
        .each((d) => { d.source = d[0], d.target = d[d.length - 1]; })
        .attr('class', 'link')
        .attr('d', line);
      console.log(link);
      node = node
        .data(root.leaves())
        .enter().append('text')
        .attr('class', 'node')
        .attr('dy', '0.31em')
        .attr('transform', d => `rotate(${d.x - 90})translate(${d.y + 8},0)${d.x < 180 ? '' : 'rotate(180)'}`)
        .attr('text-anchor', d => (d.x < 180 ? 'start' : 'end'))
        .text(d => d.data.key)
        .on('click', (d) => {
          this.getPairedProjects(d.data.name);
          console.log(link);
          link.classed('link--target', true);
          this.setState({ dummy: this.state.dummy + 1 });
        });
    });


    return (
      <div className="line-container">
        {this.props.chart}
      </div>
    );
  }
}

export default withFauxDOM(TagCircle);
