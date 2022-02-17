import React, {useEffect, useState} from 'react';
import productData from "../../API/products.json";

const Table = ({dataTable}) => {
  // const [data,
  //   setData] = useState('');
  // useEffect(() => {
  //   var arrTable  = []
  //   productData.data.result.map((item)=>{
  //       if(item.shape === "Princess"){
  //           arrTable.push(item)
  //       }
  //   })
  //   setDataTable(productData.data.result)
  // }, [])

//   Going for Company Work will be back soon okay 

  
  return (
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">SHAPE</th>
            <th scope="col">CARAT</th>
            <th scope="col">COLOR</th>
            <th scope="col">CLARITY</th>
            <th scope="col">CUT</th>
            <th scope="col">LAB</th>
            <th scope="col">PRICE</th>
            <th scope="col">WISHLIST</th>
            <th scope="col">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {dataTable && dataTable.map((result) => {
            return (
              <React.Fragment>
                <tr>
                  <th scope="row">{result.shape}</th>
                  <td>{result.weight}</td>
                  <td>{result.color}</td>
                  <td>{result.clarity}</td>
                  <td>{result.cut_grade}</td>
                  <td>{result.lab}</td>
                  <td>{result.buy_price}</td>
                  <td>Heart Icon</td>
                  <td>
                    <button>Details</button>
                  </td>
                </tr>
              </React.Fragment>
            )
          })
}

        </tbody>
      </table>
    </div>
  )
}

export default Table