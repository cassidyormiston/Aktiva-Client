import React, { useEffect } from 'react'
import { InputAdornment, TextField, Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import Gradient from '../../images/Gradient.jpeg'
import SearchIcon from '@mui/icons-material/Search'
import LocatinOn from '@mui/icons-material/LocationOn'
import './HomePage.css'
import axios from 'axios'

const HomePage = () => {

  const activitiesUrl = 'http://localhost:3000/activities'
  
  // list of all the activities
  const [activities, setActivities] = React.useState(null);

  let textProps = {
    sx: {
        input: {
          color: "white"
        }
      }
  }

  // get all the activities
  useEffect(() => {
    axios.get(activitiesUrl)
    .then((response) => {
        setActivities(response.data)
    })
  })

  console.log(activities);
  const columns = [
    {
        field: 'name',
        headerName: 'Name',
        width: 350
    },
    {
        field: 'description',
        headerName: 'About',
        width: 350
    },
    {
        field: 'organisation',
        headerName: 'Organisation',
        width: 350
    },
    {
        field: 'date',
        headerName: 'Date',
        width: 350
    }
  ]

  const createRows = (activities) => {
    const rows = [];
    for (let i = 0; i < activities.length; i++) {
        rows.push({
            id: activities[i]._id,
            name: activities[i].name,
            description: activities[i].description,
            organisation: activities[i].organisation,
            date: activities[i].date,
        })
    }

    return rows;
  }

  if (activities) {
  return (
    <div className="home-container">
        <div className="home-bg">
            <img src={Gradient} className="gradient-bg" alt="background" />
        </div>
        <div className="search-bar">
            <TextField
            InputProps={{
                startAdornment: (
                    <InputAdornment 
                    position="start">
                        <SearchIcon sx={{ color: "white", mr: 1, my: 0.5 }}/>
                    </InputAdornment>
                ),
            }}
            variant="outlined"
            fullWidth={true}
            {...textProps}
            />
        </div>
        <div className='home-location'>
            <div className='hl'>
                <div className='loc'>
                    <LocatinOn className="location-icon" sx={{ color: "white", f: 1, my: 0.5 }}/>
                </div>
                <div className='location'>
                    <p>Brisbane, Australia</p>
                </div>
            </div>
            <Box className="tile-container">
                <div className="tile" style={{height: 400, width: 1000, color: 'white'}}>
                    <DataGrid
                        rows={createRows(activities)}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                </div>
            </Box>
            </div>
    </div>
  )
}
}

export default HomePage