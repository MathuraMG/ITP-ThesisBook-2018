import PropTypes from 'prop-types';
import React from 'react';

const d3 = require('d3');
const axios = require('axios');
const ReactFauxDOM = require('react-faux-dom');

let svg;
class TagCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false
    };
  }

  // componentDidUpdate(prevProps) {
  //   // console.log(prevProps.selectedTag);
  //   // console.log(this.props.selectedTag);
  //   if (prevProps.selectedTag != this.props.selectedTag) {
  //     // console.log('in here');
  //     this.forceUpdate();
  //   }
  //   // console.log(this.)
  //   //
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.props.selectedTag);
  //   console.log(nextProps.selectedTag);
  //   if (nextProps.selectedTag != this.props.selectedTag) {
  //     // console.log('in here');
  //     this.forceUpdate();
  //     return true;
  //   }
  // }

  componentDidMount() {
    const diameter = 0.25 * window.innerWidth;// 360;
    const radius = diameter / 2;
    const innerRadius = radius - 60;

    const cluster = d3.cluster()
      .size([360, innerRadius]);

    const line = d3.radialLine()
      .curve(d3.curveBundle.beta(0))
      .radius(d => d.y)
      .angle(d => d.x / 180 * Math.PI);

    svg = d3.select(ReactFauxDOM.createElement('svg'))
      .attr('width', diameter)
      .attr('height', diameter)
      .attr('class', 'tagCircle__container');

    let link = svg.append('svg').selectAll('.link');
    let node = svg.append('svg').selectAll('.node');

    d3.json('/flare.json', (error, classes) => {
      if (error) throw error;

      const root = this.packageHierarchy(classes)
        .sum(d => d.size);

      cluster(root);

      link = link
        .data(this.packageImports(root.leaves()))
        .enter().append('path')
        .each((d) => { d.source = d[0]; d.target = d[d.length - 1]; })
        .attr('class', this.state.mouseOver ? 'link' : 'link')
        .attr('transform', `translate(${radius},${radius})`)
        .attr('d', line)
        // .classed('link--target', (l) => { if (l.target.data.name === this.props.selectedTag) return l.source.source = true; })
        // .filter(l => l.target.data.name === this.props.selectedTag)
        // .raise()
        .on('click', (l) => {
          this.getTwoPairedProjects(l.source.data.name, l.target.data.name);
        });
      // .exit()

      node = node
        .data(root.leaves())
        .enter().append('text')
        .attr('class', 'node')
        .attr('dy', '0.31em')
        .attr('transform', d => `translate(${d.y - 30 + radius / 2},${radius})rotate(${d.x - 90})translate(${d.y / 2 + 20 + radius / 4},0)${d.x < 180 ? '' : 'rotate(180)'}`)
        .attr('text-anchor', d => (d.x < 180 ? 'start' : 'end'))
        .text((d) => {
          const text = d.x < 180 ? `${'\u25CB' + '  '}${d.data.key}` : `${d.data.key}${'  ' + '\u25CB'}`;
          return text;
        })
        .classed('node--target', (n) => {
          if (n.data.name === this.props.selectedTag) {
            return true;
          }
          return false;
        })
        .on('click', (d) => {
          this.setState({ mouseOver: !this.state.mouseOver });
          console.log('boop');
          console.log(link);
          link
            .classed('link--target', (l) => {
              console.log('boomp');
              if (l.target.data.name === d.data.name) {
                return l.source.source = true;
              }
            })
            .filter(l => l.target.data.name === d.data.name)
            .raise();

          // node.classed('node--source', (n) => {
          //   if (n.source) { return true; } console.log('yo'); return false;
          // });
          //
          node.classed('node--target', (n) => {
            if (n.data.name === d.data.name) {
              return true;
            }
            return false;
          });
          this.props.setSelectedTag(d.data.name);
          this.getPairedProjects(d.data.name);
        });
      // node = node
      //   .data(root.leaves())
      //   .enter()
      //   .append('circle')
      //   .attr('cx', '20px')
      //   .attr('cy', '20px')
      //   .attr('r', '10px');


      this.setState({ mouseOver: !this.state.mouseOver });
    });
  }

  getPairedProjects(tag) {
    axios.get(`/api/pair/${tag}`)
      .then((res) => {
        this.props.setSelectedTags(res.data);
        this.props.getTagProjects(tag);
      });
  }
  getTwoPairedProjects(tag1, tag2) {
    axios.get(`/api/tag/${tag1}/${tag2}`)
      .then((res) => {
        this.props.getTwoTagProjects(tag1, tag2);
      });
  }

  packageImports(nodes) {
    const map = {};
    const imports = [];

    // Compute a map from name to node.
    nodes.forEach((d) => {
      map[d.data.name] = d;
    });

    // For each import, construct a link from the source to target node.
    nodes.forEach((d) => {
      if (d.data.imports) {
        console.log(d.data.imports);
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
      let node = map[name];
      let i;
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

  render() {
    return (
      <div className="tag-circle__container">
        <div className="tag-circle__main">
          {svg && svg.node().toReact()}
        </div>

      </div>
    );
  }
}

TagCircle.propTypes = {
  getTagProjects: PropTypes.func.isRequired,
  setSelectedTag: PropTypes.func.isRequired,
  setIsTagCircleOpen: PropTypes.func.isRequired,
  setSelectedTags: PropTypes.func.isRequired,
};

export default TagCircle;
