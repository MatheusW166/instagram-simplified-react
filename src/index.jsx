import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Stories from "./components/Stories";
import Pubs from "./components/Pubs";
import db from "./db/db";

function App() {
  const stories = db.getStories();
  const pubs = db.getPubs();
  return (
    <>
      <Header />
      <div className="content">
        <main>
          <Stories stories={stories} />
          <Pubs pubs={pubs} />
        </main>
        <aside>
          <section className="my-user">
            <a href="/">
              <img alt="img" className="avatar" src="./images/piruleta.png" />
            </a>
            <div>
              <p>
                <a href="/">bixo.piruleta</a>
              </p>
              <p>Bixo Piruleta</p>
            </div>
          </section>
          <section className="suggestions">
            <div>
              <h6>Sugestões para você</h6>
              <button>Ver tudo</button>
            </div>
            <div className="suggestion">
              <a href="/">
                <img
                  alt="img"
                  className="avatar"
                  src="./images/badvibesmemes_1.png"
                />
              </a>
              <div>
                <p>
                  <a href="/">badvibesmemes</a>
                </p>
                <p>Segue você</p>
              </div>
              <button>Seguir</button>
            </div>
            <div className="suggestion">
              <a href="/">
                <img
                  alt="img"
                  className="avatar"
                  src="./images/chibirdart_1.png"
                />
              </a>
              <div>
                <p>
                  <a href="/">chibirdart</a>
                </p>
                <p>Segue você</p>
              </div>
              <button>Seguir</button>
            </div>
            <div className="suggestion">
              <a href="/">
                <img
                  alt="img"
                  className="avatar"
                  src="./images/razoesparaacreditar_1.png"
                />
              </a>
              <div>
                <p>
                  <a href="/">razoesparaacreditar</a>
                </p>
                <p>Novo no Instagram</p>
              </div>
              <button>Seguir</button>
            </div>
            <div className="suggestion">
              <a href="/">
                <img
                  alt="img"
                  className="avatar"
                  src="./images/adorableanimals_1.png"
                />
              </a>
              <div>
                <p>
                  <a href="/">adorable_animals</a>
                </p>
                <p>Segue você</p>
              </div>
              <button>Seguir</button>
            </div>
            <div className="suggestion">
              <a href="/">
                <img
                  alt="img"
                  className="avatar"
                  src="./images/smallcutecats_1.png"
                />
              </a>
              <div>
                <p>
                  <a href="/">smallcutecats</a>
                </p>
                <p>Segue você</p>
              </div>
              <button>Seguir</button>
            </div>
          </section>
          <section className="about">
            <ul>
              <li>
                <a href="/">Sobre</a> •&nbsp;
              </li>
              <li>
                <a href="/">Ajuda</a> •&nbsp;
              </li>
              <li>
                <a href="/">Imprensa</a> •&nbsp;
              </li>
              <li>
                <a href="/">API</a> •&nbsp;
              </li>
              <li>
                <a href="/">Carreiras</a> •&nbsp;
              </li>
              <li>
                <a href="/">Privacidade</a> •&nbsp;
              </li>
              <li>
                <a href="/">Termos</a> •&nbsp;
              </li>
              <li>
                <a href="/">Localizações</a> •&nbsp;
              </li>
              <li>
                <a href="/">Contas mais relevantes</a> •&nbsp;
              </li>
              <li>
                <a href="/">Hashtags</a> •&nbsp;
              </li>
              <li>
                <a href="/">Idioma</a>
              </li>
            </ul>
            <p>© 2021 INSTAGRAM DO FACEBOOK</p>
          </section>
        </aside>
      </div>
      <nav className="bottom-nav">
        <ul>
          <li>
            <a href="/">
              <ion-icon name="home-outline"></ion-icon>
            </a>
          </li>
          <li>
            <a href="/">
              <ion-icon name="search-outline"></ion-icon>
            </a>
          </li>
          <li>
            <a href="/">
              <ion-icon name="add-circle-outline"></ion-icon>
            </a>
          </li>
          <li>
            <ion-icon name="heart-outline"></ion-icon>
          </li>
          <li>
            <a href="/">
              <ion-icon name="person-outline"></ion-icon>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

ReactDOM.createRoot(document.querySelector(".root")).render(App());
