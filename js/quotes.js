const quotes = [
  {
    quotes:
      "'진정으로 웃으려면 고통을 참아야 하며, 나아가 고통을 즐겨야 한다.'",
    author: "-찰리 채플린-",
  },
  {
    quotes: "'피할 수 없으면 즐겨라.'",
    author: "-로버트 엘리엇-",
  },
  {
    quotes:
      "'절대 어제를 후회하지 마라. 인생은 오늘의 나에게 있고, 내일은 스스로 만드는 것이다.'",
    author: "-L.론허바드-",
  },
  {
    quotes:
      " '어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다'",
    author: "-제임스 오펜하임-",
  },
  {
    quotes: "'한번의 실패와 영원한 실패를 혼동하지 마라.'",
    author: "-F.스콧 핏제랄드-",
  },
  {
    quotes: "'오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.'",
    author: "-앙드레 말로-",
  },
  {
    quotes:
      " '네 믿음은 네 생각이 된다 . 네 생각은 네 말이 된다. 네말은 네 행동이 된다 네행동은 네 습관이된다 . 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다.' \n",
    author: "-간디-",
  },
  {
    quotes: "'1퍼센트의 가능성, 그것이 나의 길이다.'",
    author: "-나폴레옹-",
  },
  {
    quotes: "'꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.'",
    author: "-괴테-",
  },
  {
    quotes: "'겨울이 오면 봄이 멀지 않으리'",
    author: "-셸리-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
