import axios from "axios";

const options = {
  method: "POST",
  url: "https://ginger4.p.rapidapi.com/correction",
  params: {
    lang: "US",
    generateRecommendations: "false",
    flagInfomralLanguage: "true",
  },
  headers: {
    "content-type": "text/plain",
    "Content-Type": "text/plain",
    "Accept-Encoding": "identity",
    "X-RapidAPI-Key": "17f4dcd1admshb67ab7ded94e4c3p14e3edjsn2533ccc2d70e",
    "X-RapidAPI-Host": "ginger4.p.rapidapi.com",
  },
  data: '"Type your text here"',
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
