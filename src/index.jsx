import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Stories from "./components/Stories";
import db from "./db/db";

function App() {
  const stories = db.getStories();
  return (
    <>
      <Header />
      <div className="content">
        <main>
          <Stories stories={stories} />
          <section className="pubs">
            <article>
              <div className="my-user">
                <a href="/">
                  <img
                    alt="img"
                    className="avatar"
                    src="./images/imperador.png"
                  />
                </a>
                <p>
                  <a href="/">palpatine.oficial</a>
                </p>
                <a href="/">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </a>
              </div>
              <img alt="img" src="./images/palpatine.jpg" />
              <div className="bottom">
                <div className="actions">
                  <div className="like-btn">
                    <label>
                      <ion-icon name="heart-outline"></ion-icon>
                      <ion-icon name="heart"></ion-icon>
                      <input type="checkbox" />
                    </label>
                  </div>
                  <a href="/">
                    <ion-icon name="chatbubble-outline"></ion-icon>
                  </a>
                  <a href="/">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </a>
                  <a href="/">
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </a>
                </div>
                <div className="likes">
                  <a href="/">
                    <img
                      alt="img"
                      className="avatar"
                      src="./images/anakin.jpg"
                    />
                  </a>
                  <p>
                    Curtido por <a href="/">anakin.skywalker</a> e{" "}
                    <a href="/">outras 1.987.500 pessoas</a>
                  </p>
                </div>
                <div className="caption">
                  <p>
                    <a href="/">palpatine.oficial</a>
                    <span>
                      Não existe UM Lorde Sith vivo mais honesto do que eu!
                      <a className="mention" href="/">
                        #votepalpatine
                      </a>{" "}
                      <a className="mention" href="/">
                        #pelademocracia
                      </a>
                      <a className="mention" href="/">
                        #liberdade
                      </a>
                    </span>
                  </p>
                </div>
                <div className="comments">
                  <p className="see-more">
                    <a href="/">Ver todos os 665.700 comentários</a>
                  </p>
                </div>
                <div className="posted-at">
                  <p>HÁ 5 MINUTOS</p>
                  <p>
                    <a href="/">Ver tradução</a>
                  </p>
                </div>
              </div>
              <div className="post-a-comment">
                <a href="/">
                  <ion-icon name="happy-outline"></ion-icon>
                </a>
                <input type="text" placeholder="Digite algo"></input>
                <button>Publicar</button>
              </div>
            </article>
            <article>
              <div className="my-user">
                <a href="/">
                  <img alt="img" className="avatar" src="./images/kratos.jpg" />
                </a>
                <p>
                  <a href="/">kleiton.of.war</a>
                </p>
                <a href="/">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </a>
              </div>
              <video autoPlay loop muted>
                <source src="assets/video.mp4" type="video/mp4" />
                <source src="assets/video.ogv" type="video/ogv" />
                Não suportado.
              </video>
              <div className="bottom">
                <div className="actions">
                  <div className="like-btn">
                    <label>
                      <ion-icon name="heart-outline"></ion-icon>
                      <ion-icon name="heart"></ion-icon>
                      <input type="checkbox" />
                    </label>
                  </div>
                  <a href="/">
                    <ion-icon name="chatbubble-outline"></ion-icon>
                  </a>
                  <a href="/">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </a>
                  <a href="/">
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </a>
                </div>
                <div className="likes">
                  <a href="/">
                    <img
                      alt="img"
                      className="avatar"
                      src="./images/odin.webp"
                    />
                  </a>
                  <p>
                    Curtido por <a href="/">odin_father69</a> e{" "}
                    <a href="/">outros 7.568 deuses</a>
                  </p>
                </div>
                <div className="caption">
                  <p>
                    <a href="/">kleiton.of.war</a>
                    <span>
                      Atreus 100% pistola brincando com as gaivotas no riacho da
                      <a className="mention" href="/">
                        @freya
                      </a>
                      heauehauehaueh
                    </span>
                  </p>
                </div>
                <div className="comments">
                  <p className="see-more">
                    <a href="/">Ver todos os 14 comentários</a>
                  </p>
                  <div className="comment">
                    <p>
                      <a href="/">freya</a>
                      <span>
                        Mais uma vez vocês dois matando meus animais &#128580;
                      </span>
                    </p>
                    <div className="like-btn">
                      <label>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="heart"></ion-icon>
                        <input type="checkbox" />
                      </label>
                    </div>
                  </div>
                  <div className="comment">
                    <p>
                      <a href="/">thor_odin.son</a>
                      <span>⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡</span>
                    </p>
                    <div className="like-btn">
                      <label>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="heart"></ion-icon>
                        <input type="checkbox" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="posted-at">
                  <p>HÁ 2 HORAS</p>
                  <p>
                    <a href="/">Ver tradução</a>
                  </p>
                </div>
              </div>
              <div className="post-a-comment">
                <a href="/">
                  <ion-icon name="happy-outline"></ion-icon>
                </a>
                <input type="text" placeholder="Digite algo"></input>
                <button>Publicar</button>
              </div>
            </article>
            <article>
              <div className="my-user">
                <a href="/">
                  <img
                    alt="img"
                    className="avatar"
                    src="./images/meowed_1.png"
                  />
                </a>
                <p>
                  <a href="/">meowed</a>
                </p>
                <a href="/">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </a>
              </div>
              <img alt="img" src="./images/gato-telefone_1.png" />
              <div className="bottom">
                <div className="actions">
                  <div className="like-btn">
                    <label>
                      <ion-icon name="heart-outline"></ion-icon>
                      <ion-icon name="heart"></ion-icon>
                      <input type="checkbox" />
                    </label>
                  </div>
                  <a href="/">
                    <ion-icon name="chatbubble-outline"></ion-icon>
                  </a>
                  <a href="/">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </a>
                  <a href="/">
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </a>
                </div>
                <div className="likes">
                  <a href="/">
                    {" "}
                    <img
                      alt="img"
                      className="avatar"
                      src="./images/naruto.jpg"
                    />
                  </a>
                  <p>
                    Curtido por <a href="/">uzumaki.naruto</a> e{" "}
                    <a href="/">outras 47.000 pessoas</a>
                  </p>
                </div>
                <div className="caption">
                  <p>
                    <a href="/">meowed</a>
                    <span>Os gatos vão dominar o mundo?</span>
                  </p>
                </div>
                <div className="posted-at">
                  <p>HÁ 37 SEGUNDOS</p>
                  <p>
                    <a href="/">Ver tradução</a>
                  </p>
                </div>
              </div>
              <div className="post-a-comment">
                <a href="/">
                  <ion-icon name="happy-outline"></ion-icon>
                </a>
                <input type="text" placeholder="Digite algo"></input>
                <button>Publicar</button>
              </div>
            </article>
            <article>
              <div className="my-user">
                <a href="/">
                  <img
                    alt="img"
                    className="avatar"
                    src="./images/adorableanimals_1.png"
                  />
                </a>
                <p>
                  <a href="/">adorable_animals</a>
                </p>
                <a href="/">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </a>
              </div>
              <img alt="img" src="./images/dog_1.png" />
              <div className="bottom">
                <div className="actions">
                  <div className="like-btn">
                    <label>
                      <ion-icon name="heart-outline"></ion-icon>
                      <ion-icon name="heart"></ion-icon>
                      <input type="checkbox" />
                    </label>
                  </div>
                  <a href="/">
                    <ion-icon name="chatbubble-outline"></ion-icon>
                  </a>
                  <a href="/">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </a>
                  <a href="/">
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </a>
                </div>
                <div className="likes">
                  <a href="/">
                    {" "}
                    <img
                      alt="img"
                      className="avatar"
                      src="./images/memeriagourmet_1.png"
                    />
                  </a>
                  <p>
                    Curtido por <a href="/">memeriagourmet</a> e{" "}
                    <a href="/">outras 17 pessoas</a>
                  </p>
                </div>
                <div className="caption">
                  <p>
                    <a href="/">adorable_animals</a>
                    <span>Soninho da beleza &#129392; &#129392;</span>
                  </p>
                </div>
                <div className="posted-at">
                  <p>HÁ 1 DIA</p>
                  <p>
                    <a href="/">Ver tradução</a>
                  </p>
                </div>
              </div>
              <div className="post-a-comment">
                <a href="/">
                  <ion-icon name="happy-outline"></ion-icon>
                </a>
                <input type="text" placeholder="Digite algo"></input>
                <button>Publicar</button>
              </div>
            </article>
          </section>
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
