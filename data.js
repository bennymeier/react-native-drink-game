export const CATEGORIES = [
  {
    id: 1,
    title: 'Ruhig',
    desc: 'Dieser Modus ist perfekt, um den Abend zu starten.',
  },
  {
    id: 2,
    title: 'Silvesterparty',
    desc: 'Lasst die Sektkorken knallen und macht unser neues Event-Pack auf!',
  },
  {
    id: 3,
    title: 'Dirty',
    desc: 'Gibts hier Leute die heiß wie Feuer sind heute Abend?',
  },
  {
    id: 4,
    title: 'Boots call me yours',
    desc:
      'Romantik, Geheimnisse und Happy Ends stehen in diesem Pack alle auf dem Menü.',
  },
  {
    id: 5,
    title: 'Hardcore',
    desc: 'Spielt, trinkt, kotzt. Nichts für zartbesaitete Teilnehmer.',
  },
  {
    id: 6,
    title: 'WTF Aufgaben',
    desc: 'Wenn der Rest eures Gehirns dazu bereit ist, alles zu riskieren.',
  },
  {
    id: 7,
    title: '5 Sekunden Regel',
    desc:
      '3 Antworten zu geben: Du verlierst, du trinkst! Kannst du dem Druck standhalten?',
  },
  {
    id: 8,
    title: "5 'heiße' Sekunden Regel",
    desc:
      'Selbe Idee, aber mit heißeren Fragen: Keine Geheimnisse heute Nacht!',
  },
  {
    id: 9,
    title: 'Durstige Straße',
    desc:
      'Eine Runde für jeden und eine unvergessliche Nacht stehen heute auf dem Abendprogramm.',
  },
];

export const DATA = [
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
