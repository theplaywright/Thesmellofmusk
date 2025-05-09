
// DOGE Impact (CoinGecko)
fetch("https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd")
  .then(res => res.json())
  .then(data => {
    const price = data.dogecoin.usd;
    document.getElementById('doge-impact').innerText = `DOGE is currently $${price} USD. Mood: ${price > 0.1 ? "Ecstatic" : "Uneasy"}`;
  })
  .catch(() => {
    document.getElementById('doge-impact').innerText = "Unable to fetch DOGE data.";
  });

// Tesla Stock (Finnhub)
const FINNHUB_API_KEY = "d0e61t9r01qv1dml7mn0d0e61t9r01qv1dml7mng";
fetch(`https://finnhub.io/api/v1/quote?symbol=TSLA&token=${FINNHUB_API_KEY}`)
  .then(res => res.json())
  .then(data => {
    const price = data.c;
    document.getElementById('tesla-price').innerText = `$TSLA: $${price}`;
  })
  .catch(() => {
    document.getElementById('tesla-price').innerText = "Unable to fetch Tesla price.";
  });

// Musk Directive Game
function launchDirective() {
    const directives = [
        "Mandatory rocket naps at 3pm.",
        "DOGE is now accepted for federal taxes.",
        "National Twitter Hour begins.",
        "All cars must now giggle on startup.",
        "New National Anthem is a Grimes remix."
    ];
    const randomDirective = directives[Math.floor(Math.random() * directives.length)];
    document.getElementById('directive-result').innerText = randomDirective;
}
