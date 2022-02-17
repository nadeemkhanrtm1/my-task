import React,{useState} from 'react'

const AdvanceFilter = () => {
    const [show,setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
  return (
    <div className='container mt-5'>
      <div className="text-center">
        <button className='btn btn-primary' onClick={handleClick}>Advance Filter</button>
      </div>
      {
          show &&
          <div>
              Advance Filter
          </div>
      }
    </div>
  )
}

export default AdvanceFilter