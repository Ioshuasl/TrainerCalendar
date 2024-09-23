export function getDayOfWeek(dateString) {
    // Cria um objeto Date com a data fornecida
    const date = new Date(dateString);

    // Obtém o número do dia da semana
    const dayNumber = date.getDay();

    // Mapeamento dos números para os dias da semana
    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    // Retorna o nome do dia da semana correspondente
    let dayOfWeek = daysOfWeek[dayNumber];

    return console.log(`Os treinos caem em uma ${dayOfWeek}.`);
}
