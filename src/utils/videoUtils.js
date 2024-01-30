
function getTimeAgo(timestamp) {

    const currentTime = new Date();
    const previousTime = new Date(timestamp);
    const timeDifference = currentTime - previousTime;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
        return years === 1 ? '1 year ago' : `${years} years ago`;
    } else if (months > 0) {
        return months === 1 ? '1 month ago' : `${months} months ago`;
    } else if (days > 0) {
        return days === 1 ? '1 day ago' : `${days} days ago`;
    } else if (hours > 0) {
        return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    } else if (minutes > 0) {
        return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
    } else {
        return seconds <= 1 ? 'just now' : `${seconds} seconds ago`;
    }
}

function formatViews(viewCount) {
    const numericViewCount = parseInt(viewCount, 10);

    if (numericViewCount >= 1e9) {
        // Billion
        return (numericViewCount / 1e9).toFixed(1) + 'B';
    } else if (numericViewCount >= 1e6) {
        // Million
        return (numericViewCount / 1e6).toFixed(1) + 'M';
    } else if (numericViewCount >= 1e3) {
        // Thousand
        return (numericViewCount / 1e3).toFixed(0) + 'K';
    } else {
        return numericViewCount.toString();
    }
}

const menus = [
    {
        id: 1,
        name: "Home",
        path: "/",
        src: "./images/home.svg",
        alt: "home"
    },
    {
        id: 2,
        name: "Movies",
        path: "/category/movies",
        src: "./images/movies.svg",
        alt: "movies"
    },
    {
        id: 3,
        name: "Music",
        path: "/category/music",
        src: "./images/music.svg",
        alt: "music"
    },
    {
        id: 4,
        name: "Sports",
        path: "/category/sports",
        src: "./images/sports.svg",
        alt: "sports"
    },
    {
        id: 5,
        name: "Gaming",
        path: "/category/gaming",
        src: "./images/gaming.svg",
        alt: "gaming"
    },
    {
        id: 6,
        name: "News",
        path: "/category/news",
        src: "./images/news.svg",
        alt: "news"
    }
]

function getCategoryID(category) {
    if (category == undefined) {
        return 0;
    } else if (category == "movies") {
        return 1;
    } else if (category == "music") {
        return 10;
    } else if (category == "sports") {
        return 17;
    } else if (category == "gaming") {
        return 20;
    } else if (category == "news") {
        return 25;
    } else {
        return null;
    }
}

export { getTimeAgo, formatViews, menus, getCategoryID };