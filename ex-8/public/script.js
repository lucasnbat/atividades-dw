function validarFormulario() {
    const sexo = document.getElementById('sexo').value;
    const anoNascimento = parseInt(document.getElementById('anoNascimento').value, 10);
    const anoFabricacao = parseInt(document.getElementById('anoFabricacao').value, 10);
    const valorVeiculo = parseFloat(document.getElementById('valorVeiculo').value);
    const bonus = parseFloat(document.getElementById('bonus').value);

    if (sexo !== 'F' && sexo !== 'M') {
        alert('O campo sexo deve aceitar apenas F (Feminino) ou M (Masculino).');
        return false;
    }

    if (anoNascimento < 1901 || anoNascimento > 2001) {
        alert('O campo ano de nascimento deve aceitar um valor entre 1901 e 2001.');
        return false;
    }

    if (anoFabricacao <= 0) {
        alert('O campo ano de fabricação deve ser um valor inteiro positivo.');
        return false;
    }

    if (valorVeiculo <= 0) {
        alert('O campo valor do veículo deve ser um número real positivo.');
        return false;
    }

    if (bonus < 0 || bonus > 25) {
        alert('O campo porcentagem do bônus deve ser um número real entre 0 e 25.');
        return false;
    }

    return true;
}
