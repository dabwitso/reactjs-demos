import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>LOGO</header>
      <main>
        <div className="featured">
          <h2>Title</h2>
          <div className="featured__buttons">
            <button className="button-play">
              <i class="fas fa-play"></i>Play
            </button>
            <button>My List</button>
          </div>
          <div className="featured__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque posuere eleifend erat eu mollis...
          </div>
        </div>
        <div className="netflix-originals">
          <div className="original__header">Netflix Originals</div>
          <div className="original__movies hide-scrollbar1 hide-scrollbar2">
            <img src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" />
            <img src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" />
            <img src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" />
            <img src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" />
            <img src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" />
            <img src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" />
            <img src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" />
            <img src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" />
          </div>
        </div>
        <div className="movies">
          <div class="movies__header">Trending Now</div>
          <div class="movies__container hide-scrollbar1 hide-scrollbar2">
            <img src="https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg" />
            <img src="https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg" />
            <img src="https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg" />
            <img src="https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg" />
            <img src="https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg" />
            <img src="https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg" />
            <img src="https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg" />
            <img src="https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg" />
          </div>
          <div class="movies__header">Top Rated</div>
          <div class="movies__container hide-scrollbar1 hide-scrollbar2">
            <img src="https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg" />
            <img src="https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg" />
            <img src="https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg" />
            <img src="https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg" />
            <img src="https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg" />
            <img src="https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg" />
            <img src="https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg" />
            <img src="https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
