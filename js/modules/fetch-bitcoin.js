export default function initFetchBitcoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((bodyJson) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / bodyJson.BRL.sell).toFixed(4);
    })
    .catch((error) => {
      console.log(Error(error));
    });
}

// https://blockchain.info/ticker
