// data.js : 내 영화 5편 데이터 / 허은서(26) / 10주차
// 영화 한 편 = 객체 하나. 키 5개 : title, year, date, rating, poster
const movies = [
    {
        title: "The Passion of the Christ",
        year: 2004,
        date: "2004-02-25",
        rating: 7.5,
        poster: "https://image.tmdb.org/t/p/w342/hNnh0cwtv5iQ1ErTSZXMbo1Q2Rl.jpg",
        id: 615,
        overview: "골고다 언덕 위에서 예수 그리스도는 십자가에 못 박히게 되고 그 곳에서 마지막 유혹에 직면한다.",
    },
    {
        title: "A.I. (Artificial Intelligence)", 
        year: 2001, 
        date: "2001-06-29",
        rating: 7.0,
        poster: "https://image.tmdb.org/t/p/w342/v5URBLEZCtICf0DsnEztdrAs4dD.jpg",
        id: 644,
        overview: "어느 날 하비 박사는 로봇회사인 사이버트로닉스사에서 감정을 지닌 최초의 인공지능 로봇 데이비드를 탄생시킨다.",
    },
    {
        title: "Avengers: Infinity War", 
        year: 2018, 
        date: "2018-04-25",
        rating: 8.2, 
        poster: "https://image.tmdb.org/t/p/w342/kmP6viwzcEkZeoi1LaVcQemcvZh.jpg",
        id: 299536,
        overview: "타노스는 닥터 스트레인지가 소유한 타임 스톤, 비전의 이마에 박혀 있는 마인드 스톤을 차지하기 위해 지구를 침략한다.",
    },
    {
        title: "Cinderella", 
        year: 2015, 
        date: "2015-03-06",
        rating: 6.8, 
        poster: "https://image.tmdb.org/t/p/w342/3yNm2SdzdcXYXv8D7cS9RV5H6DG.jpg",
        id: 150689,
        overview: "어린 시절 어머니를 여의고, 새엄마와 그녀의 두 딸과 함께 살게 된 엘라는 무역상인 아버지마저 타지에서 돌아가시자 새엄마와 의붓 언니들은 엘라를 재투성이라는 뜻의 신데렐라라고 부르며 온갖 구박을 일삼는다.",
    },
    {
        title: "Titanic", 
        year: 1997, 
        date: "1997-12-18",
        rating: 7.9, 
        poster: "https://image.tmdb.org/t/p/w342/132KjhVrWUqKFVfMAKKNkherytA.jpg",
        id: 597,
        overview: "우연한 기회로 티켓을 구해 타이타닉호에 올라탄 자유로운 영혼을 가진 화가 ‘잭’은 막강한 재력의 약혼자와 함께 1등실에 승선한 ‘로즈’에게 한눈에 반한다.",
    },
    {
        title: "왕과 사는 남자",
        year: 2026,
        date: "2026-02-04",
        rating: 6.9,
        poster: "https://image.tmdb.org/t/p/w342/kkJB3SeUJp7Y0IXXLkv5QZHJGkH.jpg",
        id: 1321179,
        overview: "계유정난이 조선을 뒤흔들고 어린 왕 이홍위는 왕위에서 쫓겨나 유배길에 오른다.",
    }
];