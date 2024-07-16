import AssetCard from "./AssetCard";
const Home: React.FC = () => {

    return (<div>
        <div className="flex-col text-white ">
            <div className="mx-10 mt-10">
                <h1 className="text-2xl font-bold py-2">
                    Track the prices in Real time
                </h1>
                <div className="flex space-x-36">
                    <p>#</p>
                    <p>Name</p>
                    <p>price</p>
                    <p>1h%</p>
                    <p>24h%</p>
                    <p>Marketcap</p>
                </div>
                <AssetCard/>
            </div>
            <div>
                
            </div>
        </div>
    </div>)
}
export default Home;