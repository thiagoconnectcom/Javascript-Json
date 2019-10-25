import axios from 'axios';
import './assets/css/style.css';

const submit = document.querySelector('.button-submit');
const corpo_tabela = document.querySelector('table tbody');

submit.addEventListener('click', function() {
  axios('https://jsonplaceholder.typicode.com/posts')
  .then(resposta => carregaElementosNaPagina(resposta.data));
});

function carregaElementosNaPagina(json) {
  for(let user of json) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerHTML = user.body;
    td.append('td');
    tr.appendChild(td);

    corpo_tabela.appendChild(tr);
  }
}


const qtd = document.querySelector('.qtd');
const buttonQtd = document.querySelector('.button-modal');

buttonQtd.addEventListener('click', function() {
  const res = qtd.value;
  try {
    const response = axios.post('https://jsonplaceholder.typicode.com/posts',{
      res
    });
    alert('Requisição POST efetuada com Sucesso ! Verifique o Network da Requisição.');
    console.log(response);
    qtd.value = '';
  } catch (error) {
    console.error(error);
  }

});

