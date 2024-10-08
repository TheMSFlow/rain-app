import { useWeather } from "../../Context/WeatherContext";

const useAccessoryDetails = () => {
  const { weatherData } = useWeather();

  const accessoryDetails = {
    Clear: {
      "clear sky": {
        image: "wide-brimmed-hat.png",
        text: "Sun protection for face and neck",
      },
    },
    Clouds: {
      "few clouds": {
        image: "wind-resistant-sunglasses.png",
        text: "Protect from UV and light wind",
      },
      "scattered clouds": {
        image: "windproof-vest.png",
        text: "Protect from moderate wind",
      },
      "broken clouds": {
        image: "waterproof-poncho.png",
        text: "Protect from light rain",
      },
      "overcast clouds": {
        image: "waterproof-poncho.png",
        text: "Full rain protection",
      },
    },
    Rain: {
      "light rain": {
        image: "bucket-hat.png",
        text: "Stylish rain protection",
      },
      "moderate rain": {
        image: "waterproof-shoe-covers.png",
        text: "Protect feet from getting wet",
      },
      "heavy intensity rain": {
        image: "fashion-raincoats.png",
        text: "Waterproof and stylish",
      },
      "shower rain": {
        image: "uv-blocking-umbrella.png",
        text: "Dual protection for rain and sun",
      },
    },
    Drizzle: {
      "light intensity drizzle": {
        image: "waterproof-poncho.png",
        text: "Light rain protection without bulk",
      },
      "heavy intensity drizzle": {
        image: "waterproof-poncho.png",
        text: "Waterproof, easy to wear",
      },
    },
    Thunderstorm: {
      "thunderstorm with rain": {
        image: "waterproof-poncho.png",
        text: "Full rain protection",
      },
      "thunderstorm with light rain": {
        image: "rain-boot.png",
        text: "Durable rain protection for feet",
      },
    },
    Snow: {
      "light snow": {
        image: "shearling-lined-boots.png",
        text: "Warm and snow-resistant footwear",
      },
      snow: {
        image: "traper-hat.png",
        text: "Warmth and wind protection",
      },
      "heavy snow": {
        image: "thermal-gloves.png",
        text: "Maximum warmth and snow protection",
      },
      "snow showers": {
        image: "goggles.png",
        text: "Protect eyes from wind and snow",
      },
    },
    Mist: {
      default: {
        image: "moisture-wicking-socks.png",
        text: "Keep feet dry in damp conditions",
      },
    },
    Fog: {
      default: {
        image: "windproof-vest",
        text: "Extra layer for wind and cool mist protection",
      },
    },
    Haze: {
      default: {
        image: "wind-resistant-sunglasses.png",
        text: "Protection from dust particles and wind",
      },
    },
    Dust: {
      default: {
        image: "transparent-face-shields.png",
        text: "Protect face and eyes from dust",
      },
    },
    Sand: {
      sand: {
        image: "uv-blocking-goggles.png",
        text: "Protect eyes from sand and wind",
      },
      sandstorm: {
        image: "goggles.png",
        text: "Protect eyes from sand and wind",
      },
    },
    Smoke: {
      default: {
        image: "dust-mask.png",
        text: "Protect lungs and face from smoke",
      },
    },
    Wind: {
      breezy: {
        image: "neck-gaiters.png",
        text: "Protect neck and face from wind",
      },
      "strong breeze": {
        image: "balaclavas.png",
        text: "Full face protection from wind",
      },
      gale: {
        image: "leather-touchscreen-gloves.png",
        text: "Windproof gloves for cold conditions",
      },
      "severe gale": {
        image: "cold-weather-face-masks.png",
        text: "Full wind and cold protection",
      },
    },
    Extreme: {
      "extreme cold": {
        image: "thermal-insoles.png",
        text: "Keep feet warm in freezing temperatures",
      },
      "extreme heat": {
        image: "cooling-hoodie-towel.png",
        text: "Stay cool in extremely hot weather",
      },
    },
    Tornado: {
      default: {
        image: "protective-helmets.png",
        text: "Protection from flying debris during tornadoes",
      },
    },
    Squall: {
      default: {
        image: "waterproof-poncho.png",
        text: "Protect from intense rain during squalls",
      },
    },
    Ash: {
      default: {
        image: "face-shields.png",
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
