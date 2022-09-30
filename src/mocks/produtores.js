import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const produtores = {
  title: 'Produtores',
  lista: [
    {
      name: 'Green',
      image: green,
      dist: `${gerarNumeroAleatorio(1, 500)}mts`,
      stars: gerarNumeroAleatorio(1, 5),
    },
    {
      name: 'Salad',
      image: salad,
      dist: `${gerarNumeroAleatorio(1, 500)}mts`,
      stars: gerarNumeroAleatorio(1, 5),
    },
    {
      name: 'Jenny Jack Farm',
      image: jennyJack,
      dist: `${gerarNumeroAleatorio(1, 500)}mts`,
      stars: gerarNumeroAleatorio(1, 5),
    },
    {
      name: 'Grow',
      image: grow,
      dist: `${gerarNumeroAleatorio(1, 500)}mts`,
      stars: gerarNumeroAleatorio(1, 5),
    },
    {
      name: 'Potager',
      image: potager,
      dist: `${gerarNumeroAleatorio(1, 500)}mts`,
      stars: gerarNumeroAleatorio(1, 5),
    },
  ],
};

export default produtores;
