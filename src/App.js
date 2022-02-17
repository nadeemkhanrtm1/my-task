import React ,{useState,useEffect}from 'react'
import AdvanceFilter from './Components/AdvanceFilter/AdvanceFilter'
import Filter from './Components/Filters/Filter'
import Table from './Components/Table/Table'
import filterData from "./API/filter_data.json";
import productData from "./API/products.json";



const App = () => {

  const [dataTable,setDataTable] = useState('');



  // For FIlter Component

  const [filter,
    setFilter] = useState({
    shape: '',
    cut: [],
    color: [],
    carat: [],
    clarity: [],
    price: []
  });

  const [data,
    setData] = useState('');

  const [cut,
    setCut] = useState({CutArray: [], initialValue: '', endValue: '', step: ''})

  const [color,
    setColor] = useState({ColorArray: [], initialValue: '', endValue: '', step: ''})

  const [carat,
    setCarat] = useState({min: '', max: '', step: ''})

  const [clarity,setClarity] = useState({ClarityArray:[], initilaValue:'',endValue:'',step:''})

  const [price,setPrice] = useState({
    min:'',max:''
  })

  useEffect(() => {
    setDataTable(productData.data.result)
    setData(filterData);
  }, [])

  // for cut
  useEffect(() => {
    //-------------------------------------cut
    const arrCut = [];
    Object
      .entries(filterData.data.normal_filters.cut)
      .map(item => {
        arrCut.push(item)
      })

    setCut({
      ...cut,
      CutArray: arrCut,
      initialValue: arrCut[0][0],
      endValue: arrCut[arrCut.length - 1][0],
      step: arrCut.length > 1
        ? (arrCut[1][0] - arrCut[0][0])
        : (arrCut[0][0])
    })

    //-------------------------------------color
    const arrColor = [];
    Object
      .entries(filterData.data.normal_filters.color)
      .map(item => {
        arrColor.push(item)
      })
    setColor({
      ...color,
      ColorArray: arrColor,
      initialValue: arrColor[0][0],
      endValue: arrColor[arrColor.length - 1][0],
      step: arrColor.length > 1
        ? (arrColor[1][0] - arrColor[0][0])
        : (arrColor[0][0])
    })

    //-------------------------------------carat
    const arrCarat = [];
    Object
      .entries(filterData.data.normal_filters.carat)
      .map(item => {
        arrCarat.push(item)
      })
    setCarat({
      ...carat,
      min: arrCarat[0][1],
      max: arrCarat[arrCarat.length - 1][1],
      step: 0.01
    })

    //------------------------------------------clarity
    const arrClarity = [];
    Object
      .entries(filterData.data.normal_filters.clarity)
      .map(item => {
        arrClarity.push(item)
      })
      setClarity({
        ...clarity,
        ClarityArray: arrClarity,
        initialValue: arrClarity[0][0],
        endValue: arrClarity[arrClarity.length - 1][0],
        step: arrClarity.length > 1
          ? (arrClarity[1][0] - arrClarity[0][0])
          : (arrClarity[0][0])
      })

    //------------------------------------------price
    const arrPrice = [];
    Object
      .entries(filterData.data.normal_filters.price)
      .map(item => {
        arrPrice.push(item)
      })
    setPrice({
      ...price,
      min:arrPrice[0][1],
      max:arrPrice[1][1]
    })
    
    setFilter({
      ...filter,
      cut: [
        arrCut[0][0],
        arrCut[arrCut.length - 1][0]
      ],
      color: [
        arrColor[0][0],
        arrColor[arrColor.length - 1][0]
      ],
      carat: [
        arrCarat[0][1],
        arrCarat[arrCarat.length - 1][1]
      ],
      clarity:
      [
        arrClarity[0][0],
        arrClarity[arrClarity.length - 1][0]
      ],
      price :[
        arrPrice[0][1],
        arrPrice[arrPrice.length - 1][1]
      ]
    })
  }, [])

  const handleChangeCut = (e) => {
    
    setFilter({
      ...filter,
      cut: e
    })
    const arrCut = [];
    Object
    .entries(filterData.data.normal_filters.cut)
    .map(item => {
      arrCut.push(item)
    })

    const searchCut = [];
    console.log(e[1])
    arrCut.filter((item)=>{
      if(item[0]>=e[0]+25 && e[1]===100){
        console.log(item)
      }else if(e[0]===0 && e[1]>=item[0]){
        console.log(item)
      }else{
        console.log(item)
      }
    })
    console.log(data)
  }

  const handleChangeColor = (e) => {
    setFilter({
      ...filter,
      color: e
    })
  }

  const handleClickShape = (e, name) => {
    var arrTable  = []
    productData.data.result.map((item)=>{arrTable.push(item)})
    let dataTable1 = [];
    dataTable1 = arrTable.filter((result)=>result.shape === name)
    setDataTable(dataTable1)
    setFilter({
      ...filter,
      shape: name
    })
  }

  const handleChangeCarat = (e) => {
    setFilter({
      ...filter,
      carat: e
    })
  }

  const handleChangeClarity = (e) => {
    setFilter({
      ...filter,
      clarity:e
    })
  }

  const handleChangePrice = (e) => {
    setFilter({
      ...filter,
      price:e
    })
  }

// console.log(dataTable,data)
  return (
    <React.Fragment>
      <Filter filter={filter} data={data} cut={cut} carat={carat} price={price} clarity={clarity} color={color}
      handleChangeCut={handleChangeCut} 
      handleChangeColor={handleChangeColor}
      handleClickShape={handleClickShape}
      handleChangeCarat={handleChangeCarat}
      handleChangeClarity={handleChangeClarity}
      handleChangePrice={handleChangePrice}/>
      <AdvanceFilter/>
      <Table dataTable={dataTable}/>
    </React.Fragment>
  )
}

export default App