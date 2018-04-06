import React from 'react';
import { withFauxDOM } from 'react-faux-dom';

class TagCircle extends React.Component {
  mouseclick(d) {
    console.log(d);
  }

  mouseovered(node, link, d) {
    node
      .each((n) => { n.target = n.source = false; });

    link
      .classed('link--target', (l) => { if (l.target === d) return l.source.source = true; })
      .classed('link--source', (l) => { if (l.source === d) return l.target.target = true; })
      .filter(l => l.target === d || l.source === d)
      .raise();

    node
      .classed('node--target', n => n.target)
      .classed('node--source', n => n.source);
  }

  mouseouted(node, link, d) {
    link
      .classed('link--target', false)
      .classed('link--source', false);

    node
      .classed('node--target', false)
      .classed('node--source', false);
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

      const root = this.packageHierarchy(classes)
        .sum(d => d.size);

      cluster(root);

      link = link
        .data(this.packageImports(root.leaves()))
        .enter().append('path')
        .each((d) => { d.source = d[0], d.target = d[d.length - 1]; })
        .attr('class', 'link')
        .attr('d', line);

      node = node
        .data(root.leaves())
        .enter().append('text')
        .attr('class', 'node')
        .attr('dy', '0.31em')
        .attr('transform', d => `rotate(${d.x - 90})translate(${d.y + 8},0)${d.x < 180 ? '' : 'rotate(180)'}`)
        .attr('text-anchor', d => (d.x < 180 ? 'start' : 'end'))
        .text(d => d.data.key)
        .on('mouseover', (d) => { this.mouseovered(node, link, d); })
        .on('click', this.mouseclick)
        .on('mouseout', (d) => { this.mouseouted(node, link, d); });
    });
  }

  render() {
    return (
      <div className="line-container">
        {this.props.chart}
      </div>
    );
  }
}

export default withFauxDOM(TagCircle);
