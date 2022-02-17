import React, {useEffect, useState} from 'react'
import filterData from "../../API/filter_data.json"
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';

const Filter = ({
  filter,
  data,
  cut,
  color,
  carat,
  clarity,
  price,
  handleChangeCarat,
  handleChangeClarity,
  handleChangeColor,
  handleChangeCut,
  handleChangePrice,
  handleClickShape
}) => {

  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-6'>
          <div>Shape</div>
          <div className='filter-container'>
            {data.data && data
              .data
              .normal_filters
              .shape
              .map((data, index) => {
                return (
                  <div
                    key={index}
                    className='filter-data'
                    onClick={(e) => handleClickShape(e, data.name)}>
                    <label>{data.name}</label><img src={data.icon}/></div>

                )
              })
}
          </div>
        </div>
        <div className='col-6'>
          <div>Cut</div>

          <Range
            step={cut.step}
            value={filter.cut}
            dots={true}
            pushable
            onChange={handleChangeCut}/>
        </div>

      </div>
      <div className='row mt-5'>
        <div className="col-6">
          <div>
            Color
          </div>
          <Range
            step={color.step}
            value={filter.color}
            dots={true}
            pushable
            onChange={handleChangeColor}/>
        </div>
        <div className="col-6">
          <div>
            Carat
          </div>
          <Range
            step={carat.step}
            min={carat.min}
            max={carat.max}
            value={filter.carat}
            onChange={handleChangeCarat}/>

          <div className='row'>
            <div className='col-6' style={{
              textAlign: 'left'
            }}>{filter.carat[0]}</div>
            <div className='col-6' style={{
              textAlign: 'right'
            }}>{filter.carat[1]}</div>
          </div>
        </div>
      </div>
      <div className='row mt-5'>
        <div className="col-6">
          <div>Clarity:</div>
          <Range
            step={clarity.step}
            value={filter.clarity}
            dots={true}
            onChange={handleChangeClarity}/>
        </div>
        <div className="col-6">
          <div>Price:</div>
          <Range
            min={price.min}
            max={price.max}
            value={filter.price}
            onChange={handleChangePrice}/>
        </div>

      </div>
    </div>
  )
}

export default Filter