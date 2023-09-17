const API_KEY = "7cfa88b4c30634523cd67bbdeb203d70";
// openweathermap.org 회원가입 하고 프로필에서 가져온 api 값 넣기

function onGeoOk(position) {
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도
    console.log("You live it", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    // url 등 을 호출해 반환하는 함수 = http 요청 전송 기능을 제공하는 web api
        .then((response) => response.json()) // fetch 만으로는 응답을 받는데 시간이 좀 걸리기 때문에 사용
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// (성공했을 때 불러오는 함수, 실패했을 때 불러오는 함수)