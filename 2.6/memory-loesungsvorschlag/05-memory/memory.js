Array.prototype.shuffle = function() {
  return this.map((_, i, arrCopy) => {
    const rand = i + (Math.floor(Math.random() * (arrCopy.length - i)));
    [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]]
    return arrCopy[i]
  })
};
Array.prototype.duplicate = function() {
  return [...this, ...this]
}

const cantons = ['ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ti', 'vd', 'zg', 'ai', 'be', 'bs', 'ge', 'gr', 'lu', 'nw', 'sg', 'so', 'tg', 'ur', 'vs', 'zh'];
const getFlagPath = (canton) => `./img/${canton}.png`;
const playground = document.getElementById('playground');
let active = [];

cantons.shuffle().slice(0, 10).duplicate().shuffle().forEach((value) => {
  const tile = document.createElement('div');
  const tileImage = document.createElement('img');
  tileImage.onclick = () => {
    if(active.length >= 2) {
      if(active[0].getAttribute('src') === active[1].getAttribute('src')) {
        active.forEach((tile) => tile.onclick = null);
      } else {
        active.forEach((tile) => tile.classList.add('hidden'));
      }
      active = [];
    }
    tileImage.classList.remove('hidden');
    active.indexOf(tileImage) === -1 ? active.push(tileImage) : null;
  }
  tileImage.classList.add('hidden');
  tileImage.setAttribute('src', getFlagPath(value));
  tile.appendChild(tileImage);
  playground.appendChild(tile);
});