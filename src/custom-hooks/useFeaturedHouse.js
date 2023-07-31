import { useMemo } from "react";

const useFeaturedHouse = (allHouses) => {
    const featuredHouse = useMemo(()=>{
        if(allHouses.length){
            return allHouses[Math.floor(Math.random()*allHouses.length)]
        }
    }, [allHouses]);
    return featuredHouse;
}
 
export default useFeaturedHouse;