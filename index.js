const tashkent_ramadan_days = [
    { day: 1, weekday: "Shanba", date: "01.03.2025", sehr: "05:40", iftar: "18:17" },
    { day: 2, weekday: "Yakshanba", date: "02.03.2025", sehr: "05:38", iftar: "18:18" },
    { day: 3, weekday: "Dushanba", date: "03.03.2025", sehr: "05:37", iftar: "18:19" },
    { day: 4, weekday: "Seshanba", date: "04.03.2025", sehr: "05:35", iftar: "18:20" },
    { day: 5, weekday: "Chorshanba", date: "05.03.2025", sehr: "05:33", iftar: "18:21" },
    { day: 6, weekday: "Payshanba", date: "06.03.2025", sehr: "05:32", iftar: "18:22" },
    { day: 7, weekday: "Juma", date: "07.03.2025", sehr: "05:30", iftar: "18:24" },
    { day: 8, weekday: "Shanba", date: "08.03.2025", sehr: "05:29", iftar: "18:25" },
    { day: 9, weekday: "Yakshanba", date: "09.03.2025", sehr: "05:27", iftar: "18:26" },
    { day: 10, weekday: "Dushanba", date: "10.03.2025", sehr: "05:25", iftar: "18:27" },
    { day: 11, weekday: "Seshanba", date: "11.03.2025", sehr: "05:24", iftar: "18:28" },
    { day: 12, weekday: "Chorshanba", date: "12.03.2025", sehr: "05:22", iftar: "18:29" },
    { day: 13, weekday: "Payshanba", date: "13.03.2025", sehr: "05:20", iftar: "18:30" },
    { day: 14, weekday: "Juma", date: "14.03.2025", sehr: "05:18", iftar: "18:32" },
    { day: 15, weekday: "Shanba", date: "15.03.2025", sehr: "05:17", iftar: "18:33" },
    { day: 16, weekday: "Yakshanba", date: "16.03.2025", sehr: "05:15", iftar: "18:34" },
    { day: 17, weekday: "Dushanba", date: "17.03.2025", sehr: "05:13", iftar: "18:35" },
    { day: 18, weekday: "Seshanba", date: "18.03.2025", sehr: "05:12", iftar: "18:36" },
    { day: 19, weekday: "Chorshanba", date: "19.03.2025", sehr: "05:10", iftar: "18:37" },
    { day: 20, weekday: "Payshanba", date: "20.03.2025", sehr: "05:08", iftar: "18:38" },
    { day: 21, weekday: "Juma", date: "21.03.2025", sehr: "05:06", iftar: "18:39" },
    { day: 22, weekday: "Shanba", date: "22.03.2025", sehr: "05:04", iftar: "18:40" },
    { day: 23, weekday: "Yakshanba", date: "23.03.2025", sehr: "05:03", iftar: "18:41" },
    { day: 24, weekday: "Dushanba", date: "24.03.2025", sehr: "05:01", iftar: "18:42" },
    { day: 25, weekday: "Seshanba", date: "25.03.2025", sehr: "04:59", iftar: "18:44" },
    { day: 26, weekday: "Chorshanba", date: "26.03.2025", sehr: "04:57", iftar: "18:45" },
    { day: 27, weekday: "Payshanba", date: "27.03.2025", sehr: "04:55", iftar: "18:46" },
    { day: 28, weekday: "Juma", date: "28.03.2025", sehr: "04:54", iftar: "18:47" },
    { day: 29, weekday: "Shanba", date: "29.03.2025", sehr: "04:52", iftar: "18:48" },
    { day: 30, weekday: "Yakshanba", date: "30.03.2025", sehr: "04:50", iftar: "18:49" }
]

function todayTableDate() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var today_date = day + "." + (month < 10 ? "0" : "") + month + "." + year;

    return today_date;
}

function createFirstTable() {
    var today_date = todayTableDate();

    // select the table
    var first_table = document.getElementById("tables");
    // create a new table header
    var row = first_table.insertRow(0);
    // create a new cell
    var cell1 = row.insertCell(0);
    // set the cell's innerHTML
    cell1.innerHTML = "Ro'za kunlar";
    var cell2 = row.insertCell(1);
    cell2.innerHTML = "Mart";
    var cell3 = row.insertCell(2);
    cell3.innerHTML = "Hafta kunlari";
    var cell4 = row.insertCell(3);
    cell4.innerHTML = "Saxarlik";
    var cell5 = row.insertCell(4);
    cell5.innerHTML = "Iftorlik";

    // add only 15 days to the first_table
    for (var i = 0; i < 15; i++) {
        var row = first_table.insertRow(i + 1);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = tashkent_ramadan_days[i].day;
        var cell2 = row.insertCell(1);
        cell2.innerHTML = tashkent_ramadan_days[i].date;
        var cell3 = row.insertCell(2);
        cell3.innerHTML = tashkent_ramadan_days[i].weekday;
        var cell4 = row.insertCell(3);
        cell4.innerHTML = tashkent_ramadan_days[i].sehr;
        var cell5 = row.insertCell(4);
        cell5.innerHTML = tashkent_ramadan_days[i].iftar;
        // add active class to the second table row if today is equal to the date
        if (tashkent_ramadan_days[i].date == today_date) {
            //add style border collor to the cell1
            cell1.style.border = "3px solid red";

        }


    }
}

////////////////// SECOND TABLE //////////////////////
function createSecondTable() {
    var second_table = document.getElementById("tableses");
    var today_date = todayTableDate();

    // add 15 days to the second_table
    for (var i = 15; i < 30; i++) {
        var row = second_table.insertRow(i - 15);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = tashkent_ramadan_days[i].day;
        var cell2 = row.insertCell(1);
        cell2.innerHTML = tashkent_ramadan_days[i].date;
        var cell3 = row.insertCell(2);
        cell3.innerHTML = tashkent_ramadan_days[i].weekday;
        var cell4 = row.insertCell(3);
        cell4.innerHTML = tashkent_ramadan_days[i].sehr;
        var cell5 = row.insertCell(4);
        cell5.innerHTML = tashkent_ramadan_days[i].iftar;
        // add active class to the second table row if today is equal to the date
        if (tashkent_ramadan_days[i].date == today_date) {
            //add style border collor to the cell1
            cell1.style.border = "3px solid red";

        }

    }

    // create a second row
    var second_row = second_table.insertRow(0);
    // create a new cell
    var second_cell1 = second_row.insertCell(0);
    // set the cell's innerHTML
    second_cell1.innerHTML = "Ro'za kunlar";
    var second_cell2 = second_row.insertCell(1);
    second_cell2.innerHTML = "Mart";
    var second_cell3 = second_row.insertCell(2);
    second_cell3.innerHTML = "Hafta kunlari";
    var second_cell4 = second_row.insertCell(3);
    second_cell4.innerHTML = "Saxarlik";
    var second_cell5 = second_row.insertCell(4);
    second_cell5.innerHTML = "Iftorlik";


}


///////////////// Get Today's Date //////////////////
function getTodayYearDate() {
    ramdan_day = document.getElementById('ramdan_day');
    var today = new Date();
    var year = today.getFullYear();
    ramdan_day.innerHTML = year;
}


///// Qibla yo'nalishini aniqlash ///////
function calculateQibla(lat, lon) {
    const kaabaLat = 21.4225;
    const kaabaLon = 39.8262;

    const dLon = (kaabaLon - lon) * (Math.PI / 180);
    const y = Math.sin(dLon) * Math.cos(kaabaLat * (Math.PI / 180));
    const x = Math.cos(lat * (Math.PI / 180)) * Math.sin(kaabaLat * (Math.PI / 180)) -
        Math.sin(lat * (Math.PI / 180)) * Math.cos(kaabaLat * (Math.PI / 180)) * Math.cos(dLon);

    let qiblaAngle = Math.atan2(y, x) * (180 / Math.PI);
    qiblaAngle = (qiblaAngle + 360) % 360; // Manfiy qiymatlarni oldini olish

    alert("Qibla yo'nalishi: " + qiblaAngle.toFixed(2) + "°, " + lat + ", " + lon + " koordinatalarida (beta)");
}



async function getLocationFromIP() {
    try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        console.log(data);
        let lat = data.latitude;
        let lon = data.longitude;

        if (data.latitude && data.longitude) {
            calculateQibla(lat, lon);
        } else {
            alert("Joylashuvni aniqlashning iloji bo'lmadi.");
        }
    } catch (error) {
        alert("IP orqali joylashuvni olishda xatolik yuz berdi.", error);
    }
}


///////////////// Ramadan Timer //////////////////
function getTodayDate(offset = 0) {
    const today = new Date();
    today.setDate(today.getDate() + offset); // Agar offset = 1 bo'lsa, ertangi kunni oladi
    const day = String(today.getDate()).padStart(2, '0'); // 01-31
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 01-12
    const year = today.getFullYear(); // YYYY
    return `${day}.${month}.${year}`;
}

// Sehr va Iftar vaqtlarini olish
function getTodayTimes(offset = 0) {
    const todayDate = getTodayDate(offset); // Sanani olamiz
    const todayData = tashkent_ramadan_days.find(day => day.date === todayDate);

    if (!todayData) {
        console.error(`Ma'lumot topilmadi: ${todayDate}`);
        return null; // Agar sana topilmasa, null qaytaramiz
    }
    return todayData;
}

function getTodayISODate(offset = 0) {
    const today = new Date();
    today.setDate(today.getDate() + offset);
    return today.toISOString().split('T')[0]; // YYYY-MM-DD format
}


function createDateTime(date, time) {
    const [hours, minutes] = time.split(":").map(Number);
    const dateTime = new Date(date);
    dateTime.setHours(hours, minutes, 0, 0);
    return dateTime;
}

// Sehr yoki Iftorgacha qolgan vaqtni hisoblaydigan funksiya
function updateRamadanTimer() {
    const todayTimes = getTodayTimes();
    const nextDayTimes = getTodayTimes(1);
    const now = new Date();

    if (!todayTimes || !nextDayTimes) {
        document.getElementById("ramadan-timer").innerText = "Ma'lumot mavjud emas!";
        return;
    }

    const todayISO = getTodayISODate();
    const nextDayISO = getTodayISODate(1);

    const sehrDateTime = createDateTime(todayISO, todayTimes.sehr);
    const iftarDateTime = createDateTime(todayISO, todayTimes.iftar);
    const nextSehrDateTime = createDateTime(nextDayISO, nextDayTimes.sehr);

    let message = "";
    let timeLeft = 0;

    if (now < sehrDateTime) {
        timeLeft = (sehrDateTime - now) / 1000;
        message = "Seharlikgacha qolgan vaqt: ";
    } else if (now < iftarDateTime) {
        timeLeft = (iftarDateTime - now) / 1000;
        message = "Iftorgacha qolgan vaqt: ";
    } else {
        timeLeft = (nextSehrDateTime - now) / 1000;
        message = "Ertangi seharlikgacha qolgan vaqt: ";
    }

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = Math.floor(timeLeft % 60);

    // 0 dan kam bo'lsa oldiga 0 qo'yish
    const formatTime = (num) => (num < 10 ? "0" + num : num);

    document.getElementById("ramadan-timer").innerText =
        `${message} ${formatTime(hours)} soat ${formatTime(minutes)} daqiqa ${formatTime(seconds)} soniya`;

    document.title = `${message} ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

    setTimeout(updateRamadanTimer, 1000);
}



// call the functions
createFirstTable();
createSecondTable();
getTodayYearDate();
// calculateQibla(41.311081, 69.240562);
getTodayDate()
updateRamadanTimer();
