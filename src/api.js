import key from "../key";

// Base URL
const base_url = "http://api.rawg.io/api";

// Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${month}`;
    } else {
        return day;
    }
};