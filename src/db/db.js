const USER = {
  name: "bixo.piruleta",
  displayName: "Bixo Piruleta",
  image: "./images/piruleta.png",
};

const STORIES = [
  { text: "cjmodafoca", image: "./images/cj.jpeg" },
  {
    text: "nathanwpylestrangeplanet",
    image: "./images/nathanwpylestrangeplanet_1.png",
  },
  { text: "uzumaki.naruto", image: "./images/naruto.jpg" },
  { text: "wawawiwacomicsa", image: "./images/wawawiwacomicsa_1.png" },
  { text: "filosofo.python", image: "./images/filosofopiton.jpeg" },
  { text: "kleiton.of.war", image: "./images/kratos.jpg" },
  { text: "filomoderna", image: "./images/filomoderna_1.png" },
  { text: "memeriago.", image: "./images/memeriagourmet_1.png" },
];

const PUBS = [
  {
    user: { name: "palpatine.oficial", image: "./images/imperador.png" },
    image: "./images/palpatine.jpg",
    likes: {
      firstUserLike: { name: "anakin.skywalker", image: "./images/anakin.jpg" },
      totalLikes: 1950001,
    },
    caption: {
      text: "Não existe UM Lorde Sith vivo mais honesto do que eu!",
      tags: ["#votepalpatine", "#pelademocracia", "#liberdade"],
    },
    pubComments: {
      totalComments: 666750,
      comments: [],
    },
    createdAt: "HÁ 5 MINUTOS",
  },
  {
    user: { name: "kleiton.of.war", image: "./images/kratos.jpg" },
    video: "./images/video.mp4",
    likes: {
      firstUserLike: { name: "odin_father69", image: "./images/odin.webp" },
      totalLikes: 7569,
    },
    caption: {
      text: "Atreus 100% pistola brincando com as gaivotas no riacho da @freya heauehauehaueh",
      tags: [],
    },
    pubComments: {
      totalComments: 14,
      comments: [
        {
          user: { name: "freya", image: "freya" },
          text: "Mais uma vez vocês dois matando meus animais 🙄",
        },
        {
          user: { name: "thor_odin.son", image: "thor_odin.son" },
          text: "⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡",
        },
      ],
    },
    createdAt: "HÁ 2 HORAS",
  },
  {
    user: { name: "meowed", image: "./images/meowed_1.png" },
    image: "./images/gato-telefone_1.png",
    likes: {
      firstUserLike: { name: "uzumaki.naruto", image: "./images/naruto.jpg" },
      totalLikes: 47.001,
    },
    caption: {
      text: "Os gatos vão dominar o mundo?",
      tags: [],
    },
    pubComments: {
      totalComments: 0,
      comments: [],
    },
    createdAt: "HÁ 37 SEGUNDOS",
  },
  {
    user: { name: "adorable_animals", image: "./images/adorableanimals_1.png" },
    image: "./images/dog_1.png",
    likes: {
      firstUserLike: {
        name: "memeriagourmet",
        image: "./images/memeriagourmet_1.png",
      },
      totalLikes: 18,
    },
    caption: {
      text: "Soninho da beleza 🥰🥰",
      tags: [],
    },
    pubComments: {
      totalComments: 0,
      comments: [],
    },
    createdAt: "HÁ 1 DIA",
  },
];

const SUGGESTIONS = [
  {
    user: { name: "badvibesmemes", image: "./images/badvibesmemes_1.png" },
    isFollowing: true,
  },
  {
    user: { name: "chibirdart", image: "./images/chibirdart_1.png" },
    isFollowing: false,
  },
  {
    user: {
      name: "razoesparaacreditar",
      image: "./images/razoesparaacreditar_1.png",
    },
    isFollowing: false,
  },
  {
    user: {
      name: "adorable_animals",
      image: "./images/adorableanimals_1.png",
    },
    isFollowing: true,
  },
  {
    user: {
      name: "smallcutecats",
      image: "./images/smallcutecats_1.png",
    },
    isFollowing: true,
  },
];

const db = {
  getStories: () => STORIES.map((s) => ({ ...s })),
  getUser: () => ({ ...USER }),
  getPubs: () => PUBS,
  getSuggestions: () => SUGGESTIONS,
};

export default db;
