const form = document.querySelector('form');
var total = 0;
form.addEventListener('submit', function (event) {
    var resultado = 0;

    // Impede a página atualizar após clicar no botão
    event.preventDefault();

    // Adicionando os valores e a tabela
    valor1 = document.getElementById('valor1').value;
    valor2 = (document.getElementById('valor2').value).replace(',', '.');
    btnlimpar = document.getElementById('limpar');
    const tabela1 = document.getElementById('tabela1');


    // Analisa se o valor da conta digitado é realmente um número. Caso seja, o código não será executado
    if (Object.is(NaN, Number(valor2)) == true || Number(valor2) < 0) {
        alert('Número inválido. Digite novamente!')
    } else {
        // Criando o botão de deletar
        const btndelete = document.createElement('button');
        btndelete.textContent = 'Deletar';

        // Criando as linhas e as células da tabela
        const newRow1 = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');

        // Adicionando os valores e o botão nas células da tabela
        cell1.textContent = valor1;
        cell2.textContent = valor2;
        cell3.appendChild(btndelete);

        // Adicionando todas as células em uma linha na tabela
        newRow1.appendChild(cell1);
        newRow1.appendChild(cell2);
        newRow1.appendChild(cell3);

        // Adicionando a linha na tabela
        tabela1.appendChild(newRow1);

        // Criando uma função pro botão deletar todas as células da sua linha
        btndelete.addEventListener('click', function () {
            tabela1.deleteRow(this.parentNode.parentNode.rowIndex);
        });
    }
})