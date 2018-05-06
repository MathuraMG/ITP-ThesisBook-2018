import PropTypes from 'prop-types';
import React from 'react';

const d3 = require('d3');
const ReactFauxDOM = require('react-faux-dom');

let svg;
class TagCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mousePressed: false,
    };
    this.createD3 = this.createD3.bind(this);
  }

  componentDidMount() {
    this.createD3();
    // debugger; //eslint-disable-line
  }

  componentDidUpdate(prevProps) {
    if (!this.state.mousePressed) {
      this.createD3();
      // debugger; //eslint-disable-line
      this.setState({ mousePressed: true });
    }
  }


  createD3() {
    console.log('d3 was created');
    let diameter;
    if (window.innerWidth <= 768) {
      diameter = 0.8 * window.innerWidth;
    } else if (window.innerWidth > 1200) {
      diameter = 0.24 * window.innerWidth;
    } else {
      diameter = 0.3 * window.innerWidth;
    }
    const radius = diameter / 2;
    const innerRadius = radius - 180;

    const cluster = d3.cluster()
      .size([360, innerRadius]);

    const line = d3.radialLine()
      .curve(d3.curveBundle.beta(0))
      .radius(d => ((radius / 2) - 30)) //eslint-disable-line
      .angle(d => (d.x / 180) * Math.PI); //eslint-disable-line

    svg = d3.select(ReactFauxDOM.createElement('svg'))
      .attr('width', diameter)
      .attr('height', diameter)
      .attr('class', 'tagCircle__container');

    let link = svg.append('svg').selectAll('.link');
    let node = svg.append('svg').selectAll('.node');

    d3.json('flare.json', (error, classes) => {
      if (error) throw error;

      const root = this.packageHierarchy(classes)
        .sum(d => d.size);

      cluster(root);

      link = link
        .data(this.packageImports(root.leaves()))
        .enter().append('path')
        .each((d) => {
          d.source = d[0];
          d.target = d[d.length - 1];
        })
        .attr('transform', `translate(${radius},${radius})`)
        .attr('d', line)
        .attr('class', 'link')
        .classed('link--target', (l) => {
          if (l.target.data.name === this.props.selectedTag) {
            l.source.source = true;
            return l.source.source;
          }
          return false;
        })

        // .filter(l => l.target.data.name === this.props.selectedTag)
        // .raise()
        .on('click', (l) => {
          const target = l.target.data.name;
          const source = l.source.data.name;
          this.props.getTwoTagProjects(l.source.data.name, l.target.data.name);
          link = link
            .classed('link--source', (l1) => {
              if (l1.target.data.name === target && l1.source.data.name === source) {
                return true;
              }
              return false;
            });
        });


      node = node
        .data(root.leaves())
        .enter().append('text')
        .attr('class', 'node')
        .attr('dy', '0.31em')
        .attr('transform', d =>
          `translate(${radius},${radius})rotate(${d.x - 90})translate(${(d.y / 2) + (20 + (radius / 4))},0)${d.x < 180 ? '' : 'rotate(180)'}`)
        .attr('text-anchor', d => (d.x < 180 ? 'start' : 'end'))
        .text((d) => {
          const tagText = (d.data.key === 'Machine Learning' ? 'M Learning' : d.data.key);
          const text = d.x < 180 ? `${'\u25CB  '}${tagText}` : `${tagText}${'  \u25CB'}`;
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
          // this.props.history.push('/');
          // this.props.setShowAboutPage(false);
          node
            .each((n) => {
              n.target = false;
              n.source = false;
            });
          node.classed('node--target', (n) => {
            if (n.data.name === d.data.name) {
              return true;
            }
            return false;
          });
          link.classed('link--target', (l) => {
            if (l.target.data.name === d.data.name) {
              l.source.source = true;
              return l.source.source;
            }
            return false;
          });
          link.classed('link--source', (l) => {
            if (l.target.data.name === d.data.name) {
              return false;
            }
            return false;
          });

          node.classed('node--source', n => n.source);
          this.props.setSelectedTag(d.data.name);
          this.props.getTagPairs(d.data.name);
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
        node = map[name] = data || { name, children: [] }; //eslint-disable-line
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
  getTagPairs: PropTypes.func.isRequired,
  getTwoTagProjects: PropTypes.func.isRequired,
  selectedTag: PropTypes.string.isRequired,
  setSelectedTag: PropTypes.func.isRequired
};

export default TagCircle;
