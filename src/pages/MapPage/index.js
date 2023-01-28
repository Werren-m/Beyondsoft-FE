import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { AutoComplete, Row } from 'antd'
import { EyeFilled } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'

import styles from './styles'

import { transformAddress } from '../../utils/transformAddress'
import MapChart from '../../components/Map'
import { addSearchHistory, getLocation } from '../../store/actions'

const Mappage = () => {
  const dispatch = useDispatch()
  const [chosenAddress, setChosenAddress] = useState('')
  const locations = useSelector(state => state.locations)
  const searchHistory = useSelector(state => state.searchHistory)

  useEffect(() => {
    dispatch(getLocation())
  }, [])

  const datas = transformAddress(locations)

  const handleChange = (event, newValue) => {
    if (_.isEmpty(newValue)) return
    setChosenAddress(_.pick(newValue, 'address', 'latitude', 'longitude', 'country'))
    dispatch(addSearchHistory({
      ...newValue,
      history: true,
      label: (
        <Row style={styles.labelContainer}>
          <EyeFilled style={styles.icon} />
          <span style={styles.label}>{newValue.address}</span>
        </Row>
      ),
    }))
  }

  const historyLabel = searchHistory.map((history) => history.value)

  const filteredDatas = [
    ...searchHistory,
    ...datas.filter((data) => !historyLabel.includes(data.value)
    )
  ]

  return (
    <Row style={styles.mainContainer}>
      <MapChart
        address={chosenAddress}
        style={styles.mapContainer}
      />
      <AutoComplete
        onChange={handleChange}
        options={filteredDatas}
        style={styles.autocompleteContainer}
      />
    </Row>
  )
}

export default Mappage
