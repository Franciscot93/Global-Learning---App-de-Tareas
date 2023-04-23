import React from 'react'

const CheckBox = ({tarea,verificacionCheckBox}) => {

    
  
  return (
    <div className='col' key={tarea.id+tarea.nombre}>
      <input onChange={()=>verificacionCheckBox(tarea)} className="form-check-input mt-0" type="checkbox" value={tarea.realizada} checked={tarea.realizada}></input>
    </div>
  )
}

export default CheckBox
