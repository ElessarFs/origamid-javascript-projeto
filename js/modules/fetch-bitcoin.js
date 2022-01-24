export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((r) => r.json())
    .then((bodyJson) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (1000 / bodyJson.BRL.sell).toFixed(4);
    })
    .catch((error) => {
      console.log(Error(error));
    });
}

// https://blockchain.info/ticker
