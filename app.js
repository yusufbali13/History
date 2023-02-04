setInterval(() => {
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  const a = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const c = Math.floor(Math.random() * 255);
  const renk = `rgb(${a},${b},${c})`;
  const renk2 = `rgb(${a},${c},${b})`;
  const renk3 = `rgb(${c},${b},${a})`;
  const renk4 = `rgb(${c},${a},${b})`;

  document.body.style.color = `${renk}`;

  const time = new Date();
  console.log(time);

  let hours = time.getHours();
  console.log(hours);

  let minutes = time.getMinutes();
  console.log(minutes);

  let seconds = time.getSeconds();
  console.log(seconds);
  let day = time.getDay();
  console.log(day);
  const gun = days[day];
  console.log(gun);

  let date = time.getDate();

  let month = time.getMonth();
  console.log(month);
  const ay = months[month];
  console.log(ay);

  let year = time.getFullYear();
  console.log(year);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeDiv = document.querySelector("#time");
  // console.log(timeDiv);
  timeDiv.style.color = `${renk2}`;

  const dateDiv = document.querySelector("#date");
  dateDiv.innerText = date + " / " + Number(month + 1) + " / " + year;
  // console.log(dateDiv);
  dateDiv.style.color = `${renk3}`;

  const dayDiv = document.querySelector("#day");
  dayDiv.innerText = gun;
  dayDiv.style.color = `${renk}`;

  timeDiv.innerText = hours + " : " + minutes + " : " + seconds;
}, 1000);
