const DATA = [
  {
    id: 1,
    desc: (shots) =>
      `Der Spieler mit den längsten Haaren trinkt ${shots} Schluck${
        shots > 1 ? 'e' : ''
      }.`,
  },
  {
    id: 2,
    desc: (shots) =>
      `Der Spieler mit dem höchsten Snapchat Score trinkt ${shots} Schluck${
        shots > 1 ? 'e' : ''
      }.`,
  },
  {
    id: 3,
    desc: (shots) =>
      `Der Spieler mit dem wenigsten Geld in der Tasche trinkt ${shots} Schluck${
        shots > 1 ? 'e' : ''
      }. Zeigst du es nicht oder hast keins dabei, trinkst du ${
        shots + 2
      } Schlucke.`,
  },
];

export default DATA;
