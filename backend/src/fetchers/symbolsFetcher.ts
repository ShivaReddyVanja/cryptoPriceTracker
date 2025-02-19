import { PrismaClient } from "@prisma/client"
import axios from "axios";

const prisma = new PrismaClient();
const symbolsFetcher = async ()=>{
    try{
        
        const symbols = await prisma.token.findMany({
            select:{
                id:true,
                symbol:true
            }
        })
        const tokens:Array<String> = []
        symbols.forEach((token)=>{
            tokens.push(token.symbol.toLowerCase()+"usdt@markPrice");

        })
        
       
        return tokens;
    }
    catch(error){
        console.error("Error fetching symbols:", error);
        throw error;
    }



}
export default symbolsFetcher;