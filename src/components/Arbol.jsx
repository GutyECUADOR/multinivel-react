import React, { Component, Fragment } from "react";
import BinaryTree from "family-binary-tree";

class Arbol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost/multinivel/index.php?action=getArbol&id=1')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return(
      <Fragment>
          { this.state.data.length > 0 &&
            <BinaryTree
              allUsers={this.state.data}
              rootUser={this.state.data[0]}
              bgSideBar={'#333'}
              colorText={'#333'}
              colorSideBar={'#fff'}
              nameFake={'Sin Usuario'}  
              bgButton={'blue'}
              colorButton={'black'}
              disableNavigation
              disableSideBar
              maxDeep={4}
              /* renderDetail={user => {
              return null;
              }} */
          />
          }
          
      </Fragment>)
  }
}

export default Arbol;