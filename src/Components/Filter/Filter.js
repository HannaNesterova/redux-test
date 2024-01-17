
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice";

function Filter ({item}) {

const selectedCategory = useSelector(getSelectedCategory);
console.log('Selected Category:', selectedCategory);

    return(
        <div>
           <p className={selectedCategory === item ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>{item}</p>


        </div>
    )
}

export default Filter;