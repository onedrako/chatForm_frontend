
const isLeapYear = (year) => {
  return (year % 400 === 0
    ? true
    : (year % 100 === 0)
        ? false
        : year % 4 === 0)
}

export const calculateDays = (month, year) => {
  const parsedMonth = parseInt(month, 10)
  const parsedYear = parseInt(year, 10)

  if (parsedMonth === 2 && isLeapYear(parsedYear)) {
    return 29
  }
  if (parsedMonth === 2) {
    return 28
  }
  if (parsedMonth === 4 || parsedMonth === 6 || parsedMonth === 9 || parsedMonth === 11) {
    return 30
  }
  return parseInt(31)
}
