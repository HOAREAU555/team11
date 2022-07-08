// Generate a new guid
let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

// Get formatted date
function getDate() {
    var m = new Date();
    var dateString = m.getUTCFullYear() + "/" +
    ("0" + (m.getUTCMonth()+1)).slice(-2) + "/" +
    ("0" + m.getUTCDate()).slice(-2) + " " +
    ("0" + m.getUTCHours()).slice(-2) + ":" +
    ("0" + m.getUTCMinutes()).slice(-2) + ":" +
        ("0" + m.getUTCSeconds()).slice(-2)
    
    return dateString
}

// Convert a datetime 
function convertTimeStamp(datetime, fuseau) {
    const timestamp = Date.parse(datetime.split('-')[0] + fuseau);
    var date = new Date(timestamp);
    var mounth = "0" + date.getUTCMonth()
    var day = "0" + date.getUTCDate();
    var hours = "0" + date.getUTCHours();
    var minutes = "0" + date.getUTCMinutes();
    var seconds = "0" + date.getUTCSeconds();
    var newDate = date.getUTCFullYear() + '-' + mounth.substr(-2) + '-' + day.substr(-2) + 'T' + hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return newDate
}

// Get the current date for basic period (list)
function getCurrentDate() {

    var dateArray = []
    var m = new Date();
    var dateStart = m.getUTCFullYear() + "-" + ("0" + m.getUTCMonth() + 1).slice(-2) + "-" + ("0" + m.getUTCDate()).slice(-2) + "T"
        + ("0" + (m.getUTCHours() - 2)).slice(-2) + ":" + "00:00"
    var dateEnd = m.getUTCFullYear() + "-" + ("0" + m.getUTCMonth() + 1).slice(-2) + "-" + ("0" + m.getUTCDate()).slice(-2) + "T"
        + ("0" + m.getUTCHours()).slice(-2) + ":" + "00:00"
    
    dateArray.push(dateStart)
    dateArray.push(dateEnd)

    return dateArray
}

module.exports = { guid, getDate, convertTimeStamp, getCurrentDate }