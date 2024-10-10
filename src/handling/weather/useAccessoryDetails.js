import { useWeather } from "../../Context/WeatherContext";
import images from "../../utils/importAllImages";

const useAccessoryDetails = () => {
  const { weatherData } = useWeather();

  const accessoryDetails = {
    Clear: {
      "clear sky": {
        image: images["wide-brimmed-hat"],
        text: "Sun protection for face and neck",
      },
    },
    Clouds: {
      "few clouds": {
        image: images["wind-resistant-sunglasses"],
        text: "Protect from UV and light wind",
      },
      "scattered clouds": {
        image: images["windproof-vest"],
        text: "Protect from moderate wind",
      },
      "broken clouds": {
        image: images["waterproof-poncho"],
        text: "Protect from light rain",
      },
      "overcast clouds": {
        image: images["waterproof-poncho"],
        text: "Full rain protection",
      },
    },
    Rain: {
      "light rain": {
        image: images["bucket-hat"],
        text: "Stylish rain protection",
      },
      "moderate rain": {
        image: images["waterproof-shoe-covers"],
        text: "Protect feet from getting wet",
      },
      "heavy intensity rain": {
        image: images["fashion-raincoats"],
        text: "Waterproof and stylish",
      },
      "shower rain": {
        image: images["uv-blocking-umbrella"],
        text: "Dual protection for rain and sun",
      },
    },
    Drizzle: {
      "light intensity drizzle": {
        image: images["waterproof-poncho"],
        text: "Light rain protection without bulk",
      },
      "heavy intensity drizzle": {
        image: images["waterproof-poncho"],
        text: "Waterproof, easy to wear",
      },
    },
    Thunderstorm: {
      "thunderstorm with rain": {
        image: images["waterproof-poncho"],
        text: "Full rain protection",
      },
      "thunderstorm with light rain": {
        image: images["rain-boot"],
        text: "Durable rain protection for feet",
      },
    },
    Snow: {
      "light snow": {
        image: images["shearling-lined-boots"],
        text: "Warm and snow-resistant footwear",
      },
      snow: {
        image: images["traper-hat"],
        text: "Warmth and wind protection",
      },
      "heavy snow": {
        image: images["thermal-gloves"],
        text: "Maximum warmth and snow protection",
      },
      "snow showers": {
        image: images["goggles"],
        text: "Protect eyes from wind and snow",
      },
    },
    Mist: {
      default: {
        image: images["moisture-wicking-socks"],
        text: "Keep feet dry in damp conditions",
      },
    },
    Fog: {
      default: {
        image: images["windproof-vest"],
        text: "Extra layer for wind and cool mist protection",
      },
    },
    Haze: {
      default: {
        image: images["wind-resistant-sunglasses"],
        text: "Protection from dust particles and wind",
      },
    },
    Dust: {
      default: {
        image: images["transparent-face-shields"],
        text: "Protect face and eyes from dust",
      },
    },
    Sand: {
      sand: {
        image: images["uv-blocking-goggles"],
        text: "Protect eyes from sand and wind",
      },
      sandstorm: {
        image: images["goggles"],
        text: "Protect eyes from sand and wind",
      },
    },
    Smoke: {
      default: {
        image: images["dust-mask"],
        text: "Protect lungs and face from smoke",
      },
    },
    Wind: {
      breezy: {
        image: images["neck-gaiters"],
        text: "Protect neck and face from wind",
      },
      "strong breeze": {
        image: images["balaclavas"],
        text: "Full face protection from wind",
      },
      gale: {
        image: images["leather-touchscreen-gloves"],
        text: "Windproof gloves for cold conditions",
      },
      "severe gale": {
        image: images["cold-weather-face-masks"],
        text: "Full wind and cold protection",
      },
    },
    Extreme: {
      "extreme cold": {
        image: images["thermal-insoles"],
        text: "Keep feet warm in freezing temperatures",
      },
      "extreme heat": {
        image: images["cooling-hoodie-towel"],
        text: "Stay cool in extremely hot weather",
      },
    },
    Tornado: {
      default: {
        image: images["protective-helmets"],
        text: "Protection from flying debris during tornadoes",
      },
    },
    Squall: {
      default: {
        image: images["waterproof-poncho"],
        text: "Protect from intense rain during squalls",
      },
    },
    Ash: {
      default: {
        image: images["face-shields"],
        text: "Protection from volcanic ash particles",
      },
    },
  };

  const weatherMain = weatherData?.weather[0]?.main;
  const weatherDescription = weatherData?.weather[0]?.description;
  

  const recommendationsForMain = accessoryDetails[weatherMain];
  const selectedAccessory = recommendationsForMain?.[weatherDescription] || recommendationsForMain?.default || null;

  return { selectedAccessory, weatherDescription };
};

export default useAccessoryDetails;
