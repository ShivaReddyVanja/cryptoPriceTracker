
const AssetCard = () => {
    const tokensLiveData = [
        {id:1,
         name:"btc",
         price:20000,
         hourChange:24,
         dailyChange:45,
         totalSupply:10000000,
         
        }]
    return (
        <div>

        {tokensLiveData.map((token)=>
            (<div className="flex space-x-36">
                <p>{token.id}</p>
                <p>{token.name}</p>
                <p>{token.price}</p>
                <p>{token.hourChange}</p>
                <p>{token.dailyChange}</p>
                <p>{token.price * token.totalSupply}</p>
            </div>))}
        </div>

    )
}

export default AssetCard