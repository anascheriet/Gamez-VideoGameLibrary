//Base URL
const api_key  = "bc3d5b3a534440ea82233beb15f1c894"
const base_url = "https://api.rawg.io/api/";

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month <= 10) {
        return '0' + month;
    }
    else return month;
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return '0' + day;
    }
    else return day;
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&order=-rating&page_size=10&key=${api_key}`;
//Upcoming Games
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=${api_key}`;
//New Games
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10&key=${api_key}`;


const popularGamesUrl = `${base_url}${popular_games}`;
const upcomingGamesUrl = `${base_url}${upcoming_games}`
const newGamesUrl = `${base_url}${new_games}`;
const gameDetailsUrl = (id) => { return `${base_url}games/${id}?key=${api_key}`; }
const gameScreenshotsUrl = (id) => { return `${base_url}games/${id}/screenshots?key=${api_key}`; }

//Searched Game
const searchGameUrl = (game_name) => `${base_url}games?search=${game_name}&page-size=9&key=${api_key}`;

export default {
    popularGamesUrl,
    upcomingGamesUrl,
    newGamesUrl,
    gameDetailsUrl,
    gameScreenshotsUrl,
    searchGameUrl
};
