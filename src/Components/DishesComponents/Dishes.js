import Dish from "./Dish";
import dishesData from "../../data/dishesData";
console.log(dishesData)

function Dishes() {
return (
    <div>
       {dishesData.map((dish,id) => <Dish key={id} dish={dish}/>)} 

    </div>
)
}

export default Dishes;