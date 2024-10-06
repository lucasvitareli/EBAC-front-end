function saudacao() {
    const horaAtual = new Date().getHours();

    if (horaAtual < 12) {
        console.log("Bom Dia!");
    } else if (horaAtual < 18) {
        console.log("Boa Tarde!");
    } else {
        console.log("Boa Noite!");
    }
}
