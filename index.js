var tashkent_ramadan_days = [
    {
        "day": 1,
        "date": "11.03.2024",
        "weekday": "Dushanba",
        "sehr": "05:23",
        "iftar": "18:27"
    },
    {
        "day": 2,
        "date": "12.03.2024",
        "weekday": "Seshanba",
        "sehr": "05:21",
        "iftar": "18:28"
    },
    {
        "day": 3,
        "date": "13.03.2024",
        "weekday": "Chorshanba",
        "sehr": "05:20",
        "iftar": "18:29"
    },
    {
        "day": 4,
        "date": "14.03.2024",
        "weekday": "Payshanba",
        "sehr": "05:16",
        "iftar": "18:32"
    },
    {
        "day": 5,
        "date": "15.03.2024",
        "weekday": "Juma",
        "sehr": "05:16",
        "iftar": "18:32"
    },
    {
        "day": 6,
        "date": "16.03.2024",
        "weekday": "Shanba",
        "sehr": "05:14",
        "iftar": "18:33"
    },
    {
        "day": 7,
        "date": "17.03.2024",
        "weekday": "Yakshanba",
        "sehr": "05:13",
        "iftar": "18:34"
    },
    {
        "day": 8,
        "date": "18.03.2024",
        "weekday": "Dushanba",
        "sehr": "05:11",
        "iftar": "18:35"
    },
    {
        "day": 9,
        "date": "19.03.2024",
        "weekday": "Seshanba",
        "sehr": "05:09",
        "iftar": "18:36"
    },
    {
        "day": 10,
        "date": "20.03.2024",
        "weekday": "Chorshanba",
        "sehr": "05:07",
        "iftar": "18:37"
    },
    {
        "day": 11,
        "date": "21.03.2024",
        "weekday": "Payshanba",
        "sehr": "05:05",
        "iftar": "18:38"
    },
    {
        "day": 12,
        "date": "22.03.2024",
        "weekday": "Juma",
        "sehr": "05:04",
        "iftar": "18:39"
    },
    {
        "day": 13,
        "date": "23.03.2024",
        "weekday": "Shanba",
        "sehr": "05:02",
        "iftar": "18:40"
    },
    {
        "day": 14,
        "date": "24.03.2024",
        "weekday": "Yakshanba",
        "sehr": "05:00",
        "iftar": "18:42"
    },
    {
        "day": 15,
        "date": "25.03.2024",
        "weekday": "Dushanba",
        "sehr": "04:58",
        "iftar": "18:43"
    },
    {
        "day": 16,
        "date": "26.03.2024",
        "weekday": "Seshanba",
        "sehr": "04:57",
        "iftar": "18:44"
    },
    {
        "day": 17,
        "date": "27.03.2024",
        "weekday": "Chorshanba",
        "sehr": "04:55",
        "iftar": "18:45"
    },
    {
        "day": 18,
        "date": "28.03.2024",
        "weekday": "Payshanba",
        "sehr": "04:53",
        "iftar": "18:46"
    },
    {
        "day": 19,
        "date": "29.03.2024",
        "weekday": "Juma",
        "sehr": "04:51",
        "iftar": "18:47"
    },
    {
        "day": 20,
        "date": "30.03.2024",
        "weekday": "Shanba",
        "sehr": "04:49",
        "iftar": "18:48"
    },
    {
        "day": 21,
        "date": "31.03.2024",
        "weekday": "Yakshanba",
        "sehr": "04:48",
        "iftar": "18:49"
    },
    {
        "day": 22,
        "date": "01.04.2024",
        "weekday": "Dushanba",
        "sehr": "04:46",
        "iftar": "18:50"
    },
    {
        "day": 23,
        "date": "02.04.2024",
        "weekday": "Seshanba",
        "sehr": "04:44",
        "iftar": "18:51"
    },
    {
        "day": 24,
        "date": "03.04.2024",
        "weekday": "Chorshanba",
        "sehr": "04:43",
        "iftar": "18:52"
    },
    {
        "day": 25,
        "date": "04.04.2024",
        "weekday": "Payshanba",
        "sehr": "04:40",
        "iftar": "18:53"
    },
    {
        "day": 26,
        "date": "05.04.2024",
        "weekday": "Juma",
        "sehr": "04:38",
        "iftar": "18:54"
    },
    {
        "day": 27,
        "date": "06.04.2024",
        "weekday": "Shanba",
        "sehr": "04:36",
        "iftar": "18:56"
    },
    {
        "day": 28,
        "date": "07.04.2024",
        "weekday": "Yakshanba",
        "sehr": "04:34",
        "iftar": "18:57"
    },
    {
        "day": 29,
        "date": "08.04.2024",
        "weekday": "Dushanba",
        "sehr": "04:32",
        "iftar": "18:58"
    },
    {
        "day": 30,
        "date": "09.04.2024",
        "weekday": "Seshanba",
        "sehr": "04:31",
        "iftar": "18:59"
    }
]

function createFirstTable() {
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
    }
}

////////////////// SECOND TABLE //////////////////////
function createSecondTable() {
    var second_table = document.getElementById("tableses");


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
    }

    // create a second row
    var second_row = second_table.insertRow(0);
    // create a new cell
    var second_cell1 = second_row.insertCell(0);
    // set the cell's innerHTML
    second_cell1.innerHTML = "Ro'za kunlar";
    var second_cell2 = second_row.insertCell(1);
    second_cell2.innerHTML = "Mart/Aprel";
    var second_cell3 = second_row.insertCell(2);
    second_cell3.innerHTML = "Hafta kunlari";
    var second_cell4 = second_row.insertCell(3);
    second_cell4.innerHTML = "Saxarlik";
    var second_cell5 = second_row.insertCell(4);
    second_cell5.innerHTML = "Iftorlik";

}

///////////////// GET TODAY SAHR AND IFTAR //////////////////
function getTodaySahrAndIftar() {
    var sun = document.getElementById('sun');
    var mid = document.getElementById('mid');

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    // check if the month is less than 10 then add 0 before the month
    if (month < 10) {
        month = "0" + month;
    }
    var year = today.getFullYear();
    var todayDate = day + "." + month + "." + year;
    var todaySahr = "";
    var todayIftar = "";
    for (var i = 0; i < tashkent_ramadan_days.length; i++) {
        if (tashkent_ramadan_days[i].date === todayDate) {
            todaySahr = tashkent_ramadan_days[i].sehr;
            todayIftar = tashkent_ramadan_days[i].iftar;
            break;
        } else {
            todaySahr = "Saxarlik vaqti o'tdi";
            todayIftar = "Iftorlik vaqti o'tdi";
        }


    }
    sun.innerHTML = todaySahr;
    mid.innerHTML = todayIftar;

}

///////////////// Get Today's Date //////////////////
function getTodayDate() {
    ramdan_day = document.getElementById('ramdan_day');
    var today = new Date();
    var year = today.getFullYear();
    var date =  year;
    ramdan_day.innerHTML = date;
}


// call the functions
createFirstTable();
createSecondTable();
getTodaySahrAndIftar();
getTodayDate()