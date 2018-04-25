import PropTypes from 'prop-types';
import React from 'react';

const d3 = require('d3');
const axios = require('axios');
const ReactFauxDOM = require('react-faux-dom');

let svg;
class TagCircle extends React.Component {
  constructor(props) {
    super(props);
    this.createD3 = this.createD3.bind(this);
  }

  componentDidMount() {
    this.createD3();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedTag != this.props.selectedTag) {
      this.createD3();
    }
  }

  createD3() {
    let diameter;
    // const diameter = (window.innerWidth > 768) ? ((window.innerWidth > 1200 ? (0.2 * window.innerWidth): 0.3*window.innerWidth ): 0.8 * window.innerWidth);
    if (window.innerWidth <= 768) {
      diameter = 0.8 * window.innerWidth;
    } else if (window.innerWidth > 1200) {
      diameter = 0.2 * window.innerWidth;
    } else {
      diameter = 0.3 * window.innerWidth;
    }
    const radius = diameter / 2;
    const innerRadius = radius - 120;

    const cluster = d3.cluster()
      .size([360, innerRadius]);

    const line = d3.radialLine()
      .curve(d3.curveBundle.beta(0))
      .radius(d => radius / 2)
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
        .attr('transform', `translate(${radius},${radius})`)
        .attr('d', line)
        .classed('link--target', (l) => {
          if (l.target.data.name === this.props.selectedTag) {
            return l.source.source = true;
          }
        })
        // .filter(l => l.target.data.name === this.props.selectedTag)
        // .raise()
        .on('click', (l) => {
          const target = l.target.data.name;
          const source = l.source.data.name;
          this.getTwoPairedProjects(l.source.data.name, l.target.data.name);
          link = link
            .classed('link--source', (l) => {
              if (l.target.data.name === target && l.source.data.name === source) {
                // debugger; //eslint-disable-linedeb
                console.log(this);
                return true;
              }
            });
          // console.log(l);
        });


      node = node
        .data(root.leaves())
        .enter().append('text')
        .attr('class', 'node')
        .attr('dy', '0.31em')
        .attr('transform', d => `translate(${radius},${radius})rotate(${d.x - 90})translate(${d.y / 2 + 20 + radius / 4},0)${d.x < 180 ? '' : 'rotate(180)'}`)
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
        .classed('node--source', n => n.source)

        .on('click', (d) => {
          this.props.history.push('/');
          this.props.setShowAboutPage(false);
          node
            .each((n) => { n.target = n.source = false; });
          node.classed('node--target', (n) => {
            if (n.data.name === d.data.name) {
              return true;
            }
            return false;
          });
          link.classed('link--target', (l) => {
            if (l.target.data.name === d.data.name) {
              return l.source.source = true;
            }
          });
          // .filter(l => l.target.data.name === d.data.name);
          // .raise();


          node.classed('node--source', n => n.source);

          this.props.setSelectedTag(d.data.name);
          this.getPairedProjects(d.data.name);
        });

      node.classed('node--target', (n) => {
        if (n.data.name === this.props.selectedTag) {
          return true;
        }
        return false;
      })
        .classed('node--source', n => n.source);
    });
  }

  getPairedProjects(tag) {
    const URL = `/api/pair/${tag}`;
    axios.get(URL)
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


    nodes.forEach((d) => {
      map[d.data.name] = d;
    });


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
