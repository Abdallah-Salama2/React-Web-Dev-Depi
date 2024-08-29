import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  state = {
    Products: [
      { id: 1, name: "oppo", price: 1600, onSale: true, count: 5 },
      { id: 2, name: "nokia", price: 1600, onSale: true, count: 2 },
      { id: 3, name: "toshiba", price: 1600, onSale: true, count: 10 },
      { id: 4, name: "mouse", price: 1600, onSale: true, count: 3 },
      { id: 5, name: "mic", price: 1600, onSale: false, count: 1 },
      { id: 6, name: "laptop", price: 1600, onSale: true, count: 0 },
      { id: 7, name: "pc", price: 1600, onSale: true, count: 2 },
      { id: 8, name: "iphone", price: 1600, onSale: false, count: 4 },
      { id: 9, name: "oppo f9", price: 1600, onSale: true, count: 6 },
    ],
  };

  add = (index) => {
    // console.log(this.state);
    let newProducts = [...this.state.Products];

    newProducts[index].count += 1;
    this.setState({ Products: newProducts });
    // console.log(index);
    // console.log("object");
  };
  delete = (id) => {
    console.log(this.state);
    let newProducts = [...this.state.Products];

    newProducts = newProducts.filter((item) => item.id !== id);
    this.setState({ Products: newProducts });
    // console.log(this.state);
    // let newProducts = [...this.state.Products];

    // newProducts[index].count -= 1;
    // this.setState({ Products: newProducts });
    // console.log(index);
    // console.log("object");
  };

  render() {
    return (
      <div>
        <div className="container bg-danger">
          <div className="">
            <Child
              products={this.state.Products}
              addCount={this.add}
              deleteProduct={this.delete}
            >
              {" "}
            </Child>
          </div>
        </div>
        {/* <About product={this.state.Products[0]} ></About> */}
      </div>
    );
  }
}

// export default class Home extends Component {
//   state = {
//     count:3,
//   };
// Arrow Function: The add method is defined using an arrow function
//  (() =>). Arrow functions do not have their own this context;
//  they inherit the this context from the surrounding scope,
//   which in this case is the class instance (this refers to the App component).
//   add = () => {
//     console.log("test")
//     let x = this.state.count;
//     console.log(x);
//     x++;
//     this.setState({count:x});
//     //deep copy
//     //action
//     //change state
//   }
// Regular Function: The add method is defined using a regular function (function(params) {}).
// Regular functions have their own this context, which is determined by how the function is called. When you use a regular function,
// this inside the function may not refer to the App component instance, especially when it's called as an event handler.
// so when it's passed as an event handler (onClick={this.add}), this inside the function might be undefined or refer to the button element that triggered the event, rather than the App component instance. This causes this.state.count to be undefined, leading to errors.
//   render() {
//     return <div>
//       <h1>About</h1>
//       <About count={this.state.count} addCount={this.add}></About>
//     </div> ;
//   }
// }

// console.log(this.state);
// let newProducts = [...this.state.Products];
// let deepCopyProducts = this.state.Products.map((product) => ({
//   ...product,
// }));
// console.log(newProducts);
// console.log(deepCopyProducts);
// newProducts[0].id = 10;
// // newProducts2[0].id = 10;
// console.log("GG");
// console.log(this.state);
// console.log(newProducts);
// console.log(deepCopyProducts);
