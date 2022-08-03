const url = "https://api.adviceslip.com/advice/";

async function getAdvice(url) {
  let data = await fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      //   console.log(data.slip);
      return data;
    })
    .catch((error) => console.error("FETCH ERROR: ", error));

  return data;
}

function getRandomNumber() {
  return Math.random() * 225 + 1;
}

const adviceNumber = document.getElementById("advice-number");
const adviceQuote = document.querySelector(".quote");

const changeQuote = async () => {
  let data = await getAdvice(url + getRandomNumber());

  console.log(data);

  adviceNumber.innerHTML = `Advice #${data.slip.id}`;
  adviceQuote.innerHTML = `"${data.slip.advice}"`;
};

const newAdviceBtn = document.querySelector(".btn");

newAdviceBtn.addEventListener("click", changeQuote);
