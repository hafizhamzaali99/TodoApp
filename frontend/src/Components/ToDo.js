import { IconButton, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './ToDo.css'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';

const ToDo = () => {

    const [inputData, setInputData] = useState('')
    const [data, setData] = useState([])
    const [isUpdate, setIsUpdate] =useState(false)
    const [_id, set_Id] = useState()

    useEffect(()=>{
        collectData()
    },[])

    const collectData = async () => {
        let response = await fetch('http://localhost:5000/')
        let result = await response.json()
        setData(result)
        // console.log(result)
    }

    const handleSubmit = async () => {
        
        let response = await fetch('http://localhost:5000/register',{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({inputData})
        })
        
        let result = await response.json()
        console.log(result)
        collectData()
        // setData([result])
        setInputData('')
    }
    const handleChanges = (e) => {
        setInputData(e.target.value)
    }
    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:5000/delete/${id}`,{
            method:"Delete"
        })
        const result = await response.json()
        console.log(result)
        collectData()
        // let allData = [...data]
        // allData.splice(index,1)
        // setData(allData)
        // setIndex(index)
        // setLine(true)
    }
    const handleUpdate = (id,item) => {
        // console.log(index)
        setInputData(item)
        setIsUpdate(true)
        set_Id(id)
        handleSubmitUpdate.bind(this, id)
    }
    const handleSubmitUpdate = async () => {
        console.log(_id)
        const response = await fetch(`http://localhost:5000/update/${_id}`,{
            method: 'Put',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({inputData})
        })
        const result = await response.json()
        console.log(result)
        collectData()
        // let collection = [...data]
        // collection.splice(_id,1,inputData)
        // setData(collection)
        // setIsUpdate(false)
        setInputData('')
    }

    return (
        <div>
            <div style={{
                display: "flex",
                alignItem: "center",
                justifyContent: "space-between",
            }}>
                <TextField 
                // placeholder='Enter Items' 
                id="outlined-basic" 
                variant="outlined" 
                value={inputData} 
                onChange={handleChanges}
                label="Enter Items"
                />
                {isUpdate ? 
                <IconButton 
                color="primary" 
                aria-label="add an alarm" 
                onClick={() => handleSubmitUpdate()}
                >
                    <CreateRoundedIcon />
                </IconButton>:
                <IconButton 
                style={{ color: "green" }} 
                variant="contained" 
                onClick={handleSubmit}
                >
                    <AddCircleRoundedIcon />
                </IconButton>}
            </div>
            <div className='items'>
                <ul>
                    {data.map((item, index) => {
                        return (
                            <div className='itemList' key={index}>
                                <li><h4>{item.data}</h4></li>
                                <div>
                                    <IconButton 
                                    color="secondary" 
                                    aria-label="add an alarm" 
                                    onClick={() => handleDelete(item._id)}
                                    >
                                        <DeleteRoundedIcon />
                                    </IconButton>
                                    <IconButton 
                                    color="primary" 
                                    aria-label="add an alarm" 
                                    onClick={() => handleUpdate(item._id,item.data)}
                                    >
                                        <CreateRoundedIcon />
                                    </IconButton>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ToDo;
