const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

//setTimeout(() => console.log(numbers), 3000);

const despesas = [
    {
        gym: 99,
    },
    {
        ifood: 200,
    },
    {
        phone: 60,
    },
    {
        internet: 100,
    },
];

const renda = 1000;

const despesaMensal = (renda, despesas, callback) => {
     const despesaTotal = callback(despesas);
     const saldoFinal = renda - despesaTotal;

     console.log(`Balanço do mês:
     Recebido: R$${renda},00
     Gasto: R$${despesaTotal},00
     Saldo: $${saldoFinal},00`);
};

const somaDespesas = (despesas) => {
  const custoItem = despesas.map((item) => Object.values(item));
  const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
  return despesaTotal;
} ;

despesaMensal(renda, despesas, somaDespesas);