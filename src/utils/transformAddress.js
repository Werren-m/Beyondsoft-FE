export const transformAddress = (data) => {
  return data.map((addressData) => {
    return {
      ...addressData,
      label: addressData.address,
    }
  })
}
