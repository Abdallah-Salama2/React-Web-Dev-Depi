import React, { Component } from "react";

export default class Child extends Component {
  render() {
    // console.log(this.props);

    return (
      <div className="row mt-5">
        {this.props.products.map((item, i) => {
          return (
            <div key={item.id} className="col-md-4 my-4">
              <div className="card bg-warning p-5 position-relative">
                <h1>{item.name}</h1>
                <h2>{item.price}</h2>
                <h2>{item.count}</h2>
                {item.onSale ? (
                  <div className="sale position-absolute p-4 bg-info top-0 end-0">
                    <h4>onSale</h4>
                  </div>
                ) : (
                  ""
                )}
                <div>
                  <button
                    onClick={() => {
                      this.props.addCount(i);
                    }}
                    className="btn btn-secondary"
                  >
                    add
                  </button>
                  <button
                    onClick={() => {
                      this.props.deleteProduct(item.id);
                    }}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

// export default class About extends Component{
//     render(){
//         // console.log(this.props)

//         return(
//         <div>
//         <div className='container'>
//           <div className="row mt-5">
//             <div className="col-md-4">
//               <div className="bg-warning p-2 text-center">
//                 <h1>Count : {this.props.count}</h1>
//                 <button onClick={this.props.addCount} className='btn btn-secondary'>Add</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>);
//     }
// }
