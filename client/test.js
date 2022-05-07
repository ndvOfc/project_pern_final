const staticProfile = {
  name: 'nodeBasic',
  image: '/imagePNG/nodejs.png',
  passTask: 15,
  allTask: 50,
  progress: function prog() {
    return ((this.passTask / this.allTask) * 100).toFixed(2);
  },
};

console.log(staticProfile.progress());
