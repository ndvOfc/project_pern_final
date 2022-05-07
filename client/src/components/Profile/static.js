export const staticProfile = [
  {
    name: 'nodeBasic',
    image: '/imagePNG/nodejs.png',
    passTask: 15,
    allTask: 50,
    progress: function prog() {
      return `${((this.passTask / this.allTask) * 100).toFixed()}%`;
    },
  },
  {
    name: 'Postgres',
    image: '/imagePNG/postgre.png',
    passTask: 10,
    allTask: 40,
    progress: function prog() {
      return `${((this.passTask / this.allTask) * 100).toFixed()}%`;
    },
  },
  {
    name: 'React',
    image: '/imagePNG/react.png',
    passTask: 15,
    allTask: 30,
    progress: function prog() {
      return `${((this.passTask / this.allTask) * 100).toFixed()}%`;
    },
  },
  {
    name: 'JS',
    image: '/imagePNG/js.png',
    passTask: 15,
    allTask: 20,
    progress: function prog() {
      return `${((this.passTask / this.allTask) * 100).toFixed()}%`;
    },
  },
  {
    name: 'CSS',
    image: '/imagePNG/css-3.png',
    passTask: 15,
    allTask: 60,
    progress: function prog() {
      return `${((this.passTask / this.allTask) * 100).toFixed()}%`;
    },
  },
  {
    name: 'HTML',
    image: '/imagePNG/html-5.png',
    passTask: 15,
    allTask: 70,
    progress: function prog() {
      return `${((this.passTask / this.allTask) * 100).toFixed()}%`;
    },
  },
];
