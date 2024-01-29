export const formatTime = (hour: number | null, minute: number | null) => {
  if (hour === null || minute === null) return ""
  let period = "AM"
  if (hour >= 12) {
    period = "PM"
    if (hour > 12) hour -= 12
  }
  const formattedMinute = minute < 10 ? "0" + minute : minute
  return `${hour}:${formattedMinute} ${period}`
}
