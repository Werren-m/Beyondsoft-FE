import React, { useState } from 'react'
import _ from 'lodash'
import {
  Autocomplete,
  Grid,
  Select,
  TextField,
} from '@mui/material'

import './App.css'

import dummyData from '../../dataset.json'
import { transformData } from '../../services/transformData'
import MapChart from '../../components/Map'

const App = () => {

  const [choosenAddress, setChoosenAddress] = useState('')

  const data = transformData(dummyData.data)

  const handleChange = (event, newValue) => {
    setChoosenAddress(_.pick(newValue, 'address', 'latitude', 'longitude', 'country'))
  }

  return (
    <div>
      <Grid style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0 5rem',
      }}>
        <MapChart
          address={choosenAddress}
          style={{ maxHeight: '50vh', margin: 'auto' }}
        />
      </Grid>
      <Autocomplete
        disablePortal
        freeSolo
        id="combo-box-demo"
        value={choosenAddress.label}
        onChange={handleChange}
        options={data}
        sx={{ maxWidth: '25rem', minHeight: 10, margin: 'auto', }}
        renderInput={(params) => <TextField {...params} />}
      />
      <Select />
    </div>
  )
}

export default App;
