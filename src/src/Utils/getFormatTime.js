export const getFormatTime = (currentTime) => {
  return currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};

export const formatDateTime = (dateTimeString) => {
  if (
    !dateTimeString ||
    typeof dateTimeString !== "string" ||
    dateTimeString.split(" ").length !== 2
  ) {
    return "Invalid Date";
  }

  const [datePart, timePart] = dateTimeString.split(" ");
  const [day, month, year] = datePart.split(".").map(Number);
  const [hours, minutes, seconds] = timePart.split(":").map(Number);
  const date = new Date(year, month - 1, day, hours, minutes, seconds);

  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const pad = (num) => num.toString().padStart(2, "0");

  return `${pad(day)}.${pad(month)}.${year} ${pad(hours)}:${pad(minutes)}:${pad(
    seconds
  )}`;
};

export const parseDateTime = (dateTimeString) => {
  if (
    !dateTimeString ||
    typeof dateTimeString !== "string" ||
    dateTimeString.split(" ").length !== 2
  ) {
    return new Date(0);
  }

  const [datePart, timePart] = dateTimeString.split(" ");
  const [day, month, year] = datePart.split(".").map(Number);
  const [hours, minutes, seconds] = timePart.split(":").map(Number);
  return new Date(year, month - 1, day, hours, minutes, seconds);
};
