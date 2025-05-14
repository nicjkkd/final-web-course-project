export const API_URL = "http://localhost:5173/";

export const MOVIES = [
  {
    id: 1,
    title: "Інтерстеллар",
    description:
      "Науково-фантастичний фільм про подорож у космосі з метою врятувати людство.",
    genre: "Фантастика, Драма",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg",
    session: "2025-04-15T19:00",
  },
  {
    id: 2,
    title: "Темний лицар",
    description: "Бетмен протистоїть Джокеру, який тероризує місто Готем.",
    genre: "Екшн, Кримінал",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    session: "2025-04-15T21:00",
  },
  {
    id: 3,
    title: "Володар перснів: Братство персня",
    description: "Група героїв вирушає знищити Перстень Всевладдя.",
    genre: "Фентезі, Пригоди",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_SX300.jpg",
    session: "2025-04-16T18:00",
  },
  {
    id: 4,
    title: "Початок",
    description:
      "Команда проникає у сни людей, щоб вкрасти або підкинути ідеї.",
    genre: "Фантастика, Трилер",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    session: "2025-04-16T20:00",
  },
  {
    id: 5,
    title: "Матриця",
    description:
      "Хакер Нео дізнається правду про реальність і бореться з машинами.",
    genre: "Фантастика, Екшн",
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_SX300.jpg",
    session: "2025-04-17T19:30",
  },
  {
    id: 6,
    title: "Форест Гамп",
    description:
      "Історія життя доброго і простого чоловіка, який став свідком багатьох історичних подій.",
    genre: "Драма, Романтика",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_SX300.jpg",
    session: "2025-04-17T21:00",
  },
  {
    id: 7,
    title: "Втеча з Шоушенка",
    description: "Несправедливо засуджений чоловік знаходить надію у в'язниці.",
    genre: "Драма, Кримінал",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_SX300.jpg",
    session: "2025-04-18T18:30",
  },
  {
    id: 8,
    title: "Кримінальне чтиво",
    description:
      "Культовий фільм Квентіна Тарантіно про злочинний світ Лос-Анджелеса.",
    genre: "Кримінал, Драма",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_SX300.jpg",
    session: "2025-04-18T21:30",
  },
  {
    id: 9,
    title: "Титанік",
    description:
      "Трагічна історія кохання на фоні катастрофи легендарного лайнера.",
    genre: "Драма, Романтика",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
    session: "2025-04-19T19:00",
  },
  {
    id: 10,
    title: "Гладіатор",
    description: "Римський генерал стає гладіатором, щоб помститися за сім'ю.",
    genre: "Екшн, Драма",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_SX300.jpg",
    session: "2025-04-19T21:00",
  },
  {
    id: 11,
    title: "Список Шиндлера",
    description:
      "Реальна історія Оскара Шиндлера, який врятував тисячі євреїв під час Голокосту.",
    genre: "Драма, Історичний",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    session: "2025-04-20T18:30",
  },
  {
    id: 12,
    title: "Зоряні війни: Імперія завдає удару у відповідь",
    description:
      "Люк Скайвокер тренується з Йодою, щоб протистояти Імперії та Дарту Вейдеру.",
    genre: "Фантастика, Пригоди",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    session: "2025-04-20T21:00",
  },
  {
    id: 13,
    title: "Ла-Ла Ленд",
    description:
      "Історія кохання між музикантом і актрисою в Лос-Анджелесі, сповнена мрій і випробувань.",
    genre: "Романтика, Мюзикл",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg",
    session: "2025-04-21T19:00",
  },
  {
    id: 14,
    title: "Безумний Макс: Дорога гніву",
    description:
      "У постапокаліптичному світі Макс і Фуріоса борються за виживання проти тирана.",
    genre: "Екшн, Фантастика",
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwMmI3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    session: "2025-04-21T21:30",
  },
  {
    id: 15,
    title: "Паразити",
    description:
      "Бідна сім’я хитро проникає в життя багатої родини, що призводить до трагічних подій.",
    genre: "Трилер, Драма",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    session: "2025-04-22T20:00",
  },
];
