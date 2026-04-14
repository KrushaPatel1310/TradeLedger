let walletBalance = 25000;

let portfolio = [];

let history = [];

export function getWallet(){
  return walletBalance;
}

export function updateWallet(amount){
  walletBalance += amount;
}

export function getPortfolio(){
  return portfolio;
}

export function addStock(stockName, price){

  const existing = portfolio.find(s => s.name === stockName);

  if(existing){

    existing.quantity += 1;

    existing.totalInvested += price;

    existing.avgPrice = existing.totalInvested / existing.quantity;

  }else{

    portfolio.push({
      name: stockName,
      quantity: 1,
      avgPrice: price,
      totalInvested: price
    });

  }

}

export function removeStock(stockName){

  const stock = portfolio.find(s => s.name === stockName);

  if(!stock) return;

  stock.quantity -= 1;

  if(stock.quantity === 0){
    portfolio = portfolio.filter(s => s.name !== stockName);
  }

}

export function getHistory(){
  return history;
}

export function addHistory(type,stock,price,profit){

  history.push({
    type:type,
    stock:stock,
    price:price,
    profit:profit,
    time:new Date().toLocaleString()
  });

}