// main.js
const form = document.getElementById('form-contato');
const nomeDoContatoInput = document.getElementById('nome-contato');
const numeroDoContatoInput = document.getElementById('telefone-contato');
const corpoTabela = document.querySelector('tbody');
const contadorElemento = document.getElementById('contador-contatos');
const contatos = [];
const telefones = [];
let totalContatos = 0;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaContato();
});

numeroDoContatoInput.addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/\D/g, '');
});

function adicionaContato() {
    const nomeDoContato = nomeDoContatoInput.value.trim();
    const numeroDoContato = numeroDoContatoInput.value.trim();

    if (nomeDoContato === '' || numeroDoContato === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const telefoneNumeros = numeroDoContato.replace(/\D/g, '');

    if (telefoneNumeros.length !== 10 && telefoneNumeros.length !== 11) {
        alert('O número de telefone deve conter 10 ou 11 dígitos.');
        return;
    }

    // Verifica se o número de telefone já foi adicionado
    if (telefones.includes(numeroDoContato)) {
        alert(`O número de telefone ${numeroDoContato} já foi adicionado para outro contato.`);
        return;
    }

    // Verifica se o nome do contato já foi adicionado
    if (contatos.includes(nomeDoContato)) {
        alert(`O contato: ${nomeDoContato} já foi adicionado.`);
        return;
    }

    // Adiciona o contato e o número de telefone às listas
    contatos.push(nomeDoContato);
    telefones.push(numeroDoContato);

    // Construir a linha da tabela usando template strings
    const linha = `
        <tr class="fade-in">
            <td>${nomeDoContato}</td>
            <td>${numeroDoContato}</td>
            <td></td>
        </tr>
    `;

    corpoTabela.insertAdjacentHTML('beforeend', linha); // Adiciona a linha à tabela
    totalContatos++;
    atualizaContador();

    // Limpar os campos de entrada após adicionar um contato
    nomeDoContatoInput.value = '';
    numeroDoContatoInput.value = '';
}

function atualizaContador() {
    contadorElemento.textContent = totalContatos;
}
