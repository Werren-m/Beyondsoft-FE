export const transformAddress = (data) => {
  return data.map((addressData) => {
    return {
      ...addressData,
      value: addressData.address,
    }
  })
}
