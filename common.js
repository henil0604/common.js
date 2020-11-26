var common = {};
var error = {};

common.ajax = {};
common.data = {};
common.time = {};

common.time.data = {};

common.data.logs = [];


common.time.data.validformats = [
    "DD-MM-YYYY HH:II:SS:MS AMPM",
    "DD-MM-YYYY HH:II:SS:MS",
    // Breaking Full Formate
    "DD-MM-YYYY",
    "HH:II:SS:MS AMPM",
    "HH:II:SS:MS",
    // Breaking "DD-MM-YYYY"
    "DD-MM",
    "DD-YYYY",
    "MM-YYYY",
    // Breaking "HH:II:SS:MS"
    "HH:II:SS AMPM",
    "HH:II:SS",
    "HH:II",
    "HH:II AMPM",
    "II:SS",
    "II:SS AMPM",
    "HH:SS",
    "HH:SS AMPM",
    "HH:MS",
    "HH:MS AMPM",
    "II:MS",
    "II:MS AMPM",
    "SS:MS",
    "SS:MS AMPM",
    // One Code Formates
    "DD",
    "MM",
    "YYYY",
    "HH",
    "II",
    "SS",
    "MS",
    "AMPM",
];



common.time.getTime = (dateMain = new Date(), format = null, hourFormat = "24") => {

    returnStr = "";

    dateMain = dateMain == "" ? new Date() : dateMain
    format = format == "" ? null : format
    hourFormat = hourFormat == "" ? "24" : hourFormat

    // Gathing Data
    date = dateMain.getDate();
    month = dateMain.getMonth() + 1;
    year = dateMain.getFullYear();
    hour = dateMain.getHours();
    minute = dateMain.getMinutes();
    second = dateMain.getSeconds();
    milisecond = dateMain.getMilliseconds();
    if (hourFormat == "24") {
        ampm = hour >= 12 ? 'pm' : 'am';
        hour = hour % 12;
        hour = hour ? hour : 12;
        ampm = ampm.toUpperCase()
    }

    // Fixing Two Nubmers Problem
    if (format == null) {
        date = date < 10 ? `0${date}` : date;
        month = month < 10 ? `0${month}` : month;
        hour = hour < 10 ? `0${hour}` : hour;
        minute = minute < 10 ? `0${minute}` : minute;
        second = second < 10 ? `0${second}` : second;
        milisecond = milisecond < 100 ? `0${milisecond}` : milisecond;
        milisecond = milisecond < 10 ? `00${milisecond}` : milisecond;
    }

    // console.log(format);

    if (format != null) {
        if (common.time.data.validformats.includes(format)) {

            returnStr = common.time.formatTime(dateMain, format, hourFormat)

        } else {
            error.raise("Invalid Format. Please Choose Any Valid Date&Time Format.")
        }
    } else {
        returnStr = `${date}-${month}-${year} ${hour}:${minute}:${second}:${milisecond}`;
    }

    return returnStr;
}

common.time.formatTime = (dateMain = new Date(), format = "DD-MM-YYYY HH:II:SS:MS", hourFormat = "24") => {

    // DD->Date
    // MM->Month
    // YYYY->Year

    // HH->Hour
    // II->minute 
    // SS->Second 
    // MS->MiliSecond

    // FullFormat:
    // DD-MM-YYYY HH:II:SS:MS


    FullFormat = "DD-MM-YYYY HH:II:SS:MS AMPM";
    returnStr = "";

    dateMain = dateMain == "" ? new Date() : dateMain
    format = format == "" ? FullFormat : format
    hourFormat = hourFormat == "" ? "24" : hourFormat

    // console.log(dateMain)

    // Gathing Data
    date = dateMain.getDate();
    month = dateMain.getMonth() + 1;
    year = dateMain.getFullYear();
    hour = dateMain.getHours();
    minute = dateMain.getMinutes();
    second = dateMain.getSeconds();
    milisecond = dateMain.getMilliseconds();
    if (hourFormat == "24") {
        ampm = hour >= 12 ? 'pm' : 'am';
        hour = hour % 12;
        hour = hour ? hour : 12;
        ampm = ampm.toUpperCase()
    }

    // Fixing Two Nubmers Problem
    date = date < 10 ? `0${date}` : date;
    month = month < 10 ? `0${month}` : month;
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;
    milisecond = milisecond < 100 ? `0${milisecond}` : milisecond;
    milisecond = milisecond < 10 ? `00${milisecond}` : milisecond;


    if (common.time.data.validformats.includes(format)) {

        if (format == "DD-MM-YYYY HH:II:SS:MS AMPM") {
            returnStr = `${date}-${month}-${year} ${hour}:${minute}:${second}:${milisecond} ${ampm}`;
        } else if (format == "DD-MM-YYYY HH:II:SS:MS") {
            returnStr = `${date}-${month}-${year} ${hour}:${minute}:${second}:${milisecond}`;
        } else if (format == "DD-MM-YYYY") {
            returnStr = `${date}-${month}-${year}`;
        } else if (format == "HH:II:SS:MS AMPM") {
            returnStr = `${hour}:${minute}:${second}:${milisecond} ${ampm}`;
        } else if (format == "HH:II:SS:MS") {
            returnStr = `${hour}:${minute}:${second}:${milisecond}`;
        } else if (format == "DD-MM") {
            returnStr = `${date}-${month}`;
        } else if (format == "DD-YYYY") {
            returnStr = `${date}-${year}`;
        } else if (format == "MM-YYYY") {
            returnStr = `${month}-${year}`;
        } else if (format == "HH:II:SS AMPM") {
            returnStr = `${hour}:${minute}:${second} ${ampm}`;
        } else if (format == "HH:II:SS") {
            returnStr = `${hour}:${minute}:${second}`;
        } else if (format == "HH:II") {
            returnStr = `${hour}:${minute}`;
        } else if (format == "HH:II AMPM") {
            returnStr = `${hour}:${minute} ${ampm}`;
        } else if (format == "II:SS") {
            returnStr = `${minute}:${second}`;
        } else if (format == "II:SS AMPM") {
            returnStr = `${minute}:${second} ${ampm}`;
        } else if (format == "HH:SS") {
            returnStr = `${hour}:${second}`;
        } else if (format == "HH:SS AMPM") {
            returnStr = `${hour}:${second} ${ampm}`;
        } else if (format == "HH:MS") {
            returnStr = `${hour}:${milisecond}`;
        } else if (format == "HH:MS AMPM") {
            returnStr = `${hour}:${milisecond} ${ampm}`;
        } else if (format == "II:MS") {
            returnStr = `${minute}:${milisecond}`;
        } else if (format == "II:MS AMPM") {
            returnStr = `${minute}:${milisecond} ${ampm}`;
        } else if (format == "SS:MS") {
            returnStr = `${second}:${milisecond}`;
        } else if (format == "SS:MS AMPM") {
            returnStr = `${second}:${milisecond} ${ampm}`;
        } else if (format == "DD") {
            returnStr = `${date}`;
        } else if (format == "MM") {
            returnStr = `${month}`;
        } else if (format == "YYYY") {
            returnStr = `${year}`;
        } else if (format == "HH") {
            returnStr = `${hour}`;
        } else if (format == "II") {
            returnStr = `${minute}`;
        } else if (format == "SS") {
            returnStr = `${second}`;
        } else if (format == "MS") {
            returnStr = `${milisecond}`;
        } else if (format == "AMPM") {
            returnStr = `${ampm}`;
        }

    } else {
        error.raise("Invalid Format. Please Choose Any Valid Date&Time Format.")
    }

    return returnStr;

}


error.raise = (data, dataLog = true) => {
    console.error(data)

    if (dataLog == true) {
        common.log(data)
    }
}


common.log = (log = null) => {

    let obj = {
        log: log,
        time: common.time.getTime()
    };

    common.data.logs.push(obj)
}


common.ajax.post = (target = null, postData = null, callback = null, log = true) => {

    $.post(target, postData, (data, status) => {
        if (typeof (callback) == "function") {
            callback(data, status)

            if (log) {
                common.log({
                    target: target,
                    postData: postData,
                    callback: callback,
                    callbackData: {
                        data: data,
                        status: status
                    }
                });
            }

        } else {
            error.raise(`"callback" parameter Must be a Function.`)
        }
    })

}




console.log(common)


// Examples:

// common.log("ok")

/*
AJAX POST Request:

common.ajax.post("common.ajax.post.php", {
    test: "123"
}, (data, status) => {
    console.log(data)
})

*/