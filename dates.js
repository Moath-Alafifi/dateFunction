const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthsAcronym = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const daysAcronym = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const format = (dateString, dateFormat) => {
  let date = new Date(dateString);
  let month = date.getMonth() + 1;
  let fullMonth = months[date.getMonth()];
  let monthAcronym = monthsAcronym[date.getMonth()];
  let towDigitMonth = (date.getMonth() + 1).toString().padStart(2, "0");
  let oneDigitDay = date.getDate();
  let dayAcronym = daysAcronym[date.getDay()];
  let towDigitDay = date.getDate().toString().padStart(2, "0");
  let year = date.getFullYear();
  let towDigitYear = date.getFullYear().toString().slice(2);

  let hours =
    date.getHours() > 12
      ? date.getHours() - 12
      : date.getHours() == 0
      ? date.getHours() + 12
      : date.getHours();
  let am_pm = date.getHours() >= 12 ? "PM" : "AM";
  let towDigitHours = hours.toString().padStart(2, "0");
  let minutes = date.getMinutes();
  let towDigitMinutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds();
  let towDigitSeconds = date.getSeconds().toString().padStart(2, "0");

  let timeZoneInHours = date.getTimezoneOffset() / 60;

  if (timeZoneInHours < 0) {
    timeZoneInHours =
      "GMT+" +
      (timeZoneInHours * -1).toString().padStart(2, "0").padEnd(4, "0");
  } else if (timeZoneInHours > 0) {
    timeZoneInHours =
      "GMT-" + timeZoneInHours.toString().padStart(2, "0").padEnd(4, "0");
  } else {
    timeZoneInHours =
      "GMT" + timeZoneInHours.toString().padStart(2, "0").padEnd(4, "0");
  }

  if (dateFormat.includes("MMMM")) {
    month = fullMonth;
  } else if (dateFormat.includes("MMM")) {
    month = monthAcronym;
  } else if (dateFormat.includes("MM")) {
    month = towDigitMonth;
  }
  if (dateFormat.includes("mm")) {
  } else if (dateFormat.includes("m")) {
    towDigitMinutes = minutes;
  }
  if (dateFormat.includes("a") || dateFormat.includes("p")) {
    am_pm = date.getHours() >= 12 ? "pm" : "am";
  }
  let format = dateFormat.toLowerCase();
  if (format.includes("yy")) {
    year = towDigitYear;
  }

  if (format.includes("dd")) {
    oneDigitDay = towDigitDay;
  }
  if (format.includes("hh")) {
  } else if (format.includes("h")) {
    towDigitHours = hours;
  }
  if (format.includes("ss")) {
  } else if (format.includes("s")) {
    towDigitSeconds = seconds;
  }

  date =
    dayAcronym +
    " " +
    month +
    " " +
    oneDigitDay +
    " " +
    year +
    " " +
    towDigitHours +
    ":" +
    towDigitMinutes +
    ":" +
    towDigitSeconds +
    " " +
    am_pm +
    " " +
    timeZoneInHours +
    " (Eastern European Standard Time)";
  console.log(date);
  return date;
};
format("1/1/2022", "MMM-DD/YYYY/HH/mm/ss/a");

const objDate = (dateString, dateFormat) => {
  let month = dateString.getMonth() + 1;
  let fullMonth = months[dateString.getMonth()];
  let monthAcronym = monthsAcronym[dateString.getMonth()];
  let towDigitMonth = (dateString.getMonth() + 1).toString().padStart(2, "0");
  let oneDigitDay = dateString.getDate().toString();
  let towDigitDay = dateString.getDate().toString().padStart(2, "0");
  let year = dateString.getFullYear();
  let towDigitYear = dateString.getFullYear().toString().slice(2);
  let hours =
  dateString.getHours() > 12
    ? dateString.getHours() - 12
    : dateString.getHours() == 0
    ? dateString.getHours() + 12
    : dateString.getHours();
  let am_pm = dateString.getHours();
  am_pm = dateString.getHours() >= 12 ? "PM" : "AM";
  let towDigitHours = hours.toString().padStart(2, "0");
  let minutes = dateString.getMinutes();
  let towDigitMinutes = dateString.getMinutes().toString().padStart(2, "0");
  let seconds = dateString.getSeconds();
  let towDigitSeconds = dateString.getSeconds().toString().padStart(2, "0");
  let timeZoneInHours = dateString.getTimezoneOffset() / 60;

  if (timeZoneInHours < 0) {
    timeZoneInHours =
      "GMT+" +
      (timeZoneInHours * -1).toString().padStart(2, "0").padEnd(4, "0");
  } else if (timeZoneInHours > 0) {
    timeZoneInHours =
      "GMT-" + timeZoneInHours.toString().padStart(2, "0").padEnd(4, "0");
  } else {
    timeZoneInHours =
      "GMT" + timeZoneInHours.toString().padStart(2, "0").padEnd(4, "0");
  }

  let obj = {
    MMMM: fullMonth + "-",
    MMM: monthAcronym + "-",
    MM: towDigitMonth + "-",
    M: month + "-",
    d: oneDigitDay + "/",
    dd: towDigitDay + "/",
    yyyy: year + " ",
    yyy: year + " ",
    yy: towDigitYear + " ",
    y: year + " ",
    hh: towDigitHours + ":",
    h: hours + ":",
    mm: towDigitMinutes + ":",
    m: minutes + ":",
    ss: towDigitSeconds + " ",
    s: seconds + " ",
    P: am_pm + " ",
    PP: am_pm + " ",
    A: am_pm + " ",
    AA: am_pm + " ",
    a: (am_pm = am_pm >= 12 ? "pm" : "am" + " "),
    aa: (am_pm = am_pm >= 12 ? "pm" : "am" + " "),
    p: (am_pm = am_pm >= 12 ? "pm" : "am" + " "),
    pp: (am_pm = am_pm >= 12 ? "pm" : "am" + " "),
    z: timeZoneInHours + " (Eastern European Standard Time)",
    utc: timeZoneInHours + " (Eastern European Standard Time)",
    gmt: timeZoneInHours + " (Eastern European Standard Time)",
  };
  let newArr = dateFormat.split("/");
  let date = "";
  newArr.forEach((element) => {
    if (
      element.includes("M") ||
      element.includes("A") ||
      element.includes("P")
    ) {
      if (obj.hasOwnProperty(element)) {
        date += obj[element];
      }
    } else {
      if (obj.hasOwnProperty(element.toLowerCase())) {
        date += obj[element.toLowerCase()];
      }
    }
  });
  console.log(date);
  return date;
};
objDate(new Date(), "MMMM/DD/YYYY/HH/mm/ss/a/z");

module.exports = { objDate, format };
