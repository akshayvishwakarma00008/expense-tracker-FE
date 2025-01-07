const useCurrencyFormatter = (currSymbol,amount)=>{
    return new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:currSymbol
    }).format(amount)
}

export default useCurrencyFormatter;