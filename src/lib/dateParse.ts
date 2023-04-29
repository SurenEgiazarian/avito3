const russianMonths = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря'
];

export const dateParse = (date: string) => {
  const userDate = new Date(date);

  const month = userDate.getMonth();
  const year = userDate.getFullYear();

  return `Продает товары с ${russianMonths[month]} ${year}`;
};

export const getAdCreateTime = (date: string) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  const adDate = new Date(date);
  const adDay = adDate.getDate();
  const adMonth = adDate.getMonth();

  const time = `${adDate.getHours()}:${adDate.getMinutes()}`;

  if (adDay === currentDay) {
    return `Сегодня в ${time}`;
  } else if (adDay + 1 === currentDay) {
    return `Вчера в ${time}`;
  } else {
    return `${adDay} ${russianMonths[adMonth]} в ${time}`;
  }
};

export const parseReviewDate = (date: string) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  const reviewDate = new Date(date);
  const reviewDay = reviewDate.getDate();
  const reviewMonth = reviewDate.getMonth();

  if (reviewDay === currentDay) {
    return 'Сегодня';
  } else if (reviewDay + 1 === currentDay) {
    return 'Вчера';
  } else {
    return `${reviewDay} ${russianMonths[reviewMonth]}`;
  }
};
