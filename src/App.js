import "./styles.css";
import "./Temperature.css";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Description from "./Description";
import Temperature from "./Temperature";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <Search />

          <div class="overview">
            <h1 id="city"></h1>
            <ul>
              <li></li>
              <Description value="Clear Skies" />
            </ul>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="d-flex weather-temperature">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="Clear"
                  id="icon"
                />
                <div>
                  <Temperature value={26} />
                  <span class="units">
                    <a href="#" class="active" id="celsius-link">
                      °C
                    </a>{" "}
                    |
                    <a href="#" id="fahrenheit-link">
                      °F
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <ul>
                <li>
                  <Humidity value={20} />
                </li>
                <li>
                  <Wind value={18} />
                </li>
              </ul>
            </div>
            <div class="weather-forecast" id="forecast"></div>
          </div>
        </div>
        <small>
          <a
            href="https://github.com/apcastillo11/shecodes-weather-app-final-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Alejandra Castillo
        </small>
      </div>
    </div>
  );
}
