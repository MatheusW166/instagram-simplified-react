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

const db = {
  getStories: () => STORIES.map((s) => ({ ...s })),
};

export default db;
