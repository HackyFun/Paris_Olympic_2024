document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "WONG-ORANTES Justine	United States	USA	2020  Tokyo	Volleyball	Women Team	Gold",
    "TONIUTTI Benjamin	France	FRA	2020  Tokyo	Volleyball	Men Team	Gold",
    "ZADORSKY Shelina	Canada	CAN	2020 Tokyo	Football	Women Team	Gold",
    "ZVEREV Alexander	Germany	GER	2020 Tokyo	Tennis	Men's Singles	Gold",
    "WILSON A'ja United States	USA	2020  Tokyo	Basketball	Women Team	Gold",
    "ZHANG Yifan China	CHN	2020 Tokyo	Swimming	Women's 4 x 200m Freestyle Relay Team	Gold",
    "ZVEREV Alexander	Germany	GER	2020 Tokyo	Tennis	Men's Singles	Gold",
  ];

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function updateQuote() {
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = getRandomQuote();
  }

  updateQuote();

  setInterval(updateQuote, 5000);
});
