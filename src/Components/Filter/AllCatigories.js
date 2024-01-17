
import Filter from './Filter.js';

function AllCatigories(){
    return(
        <div>
            <h1>WHAT KIND OF FOOD DO YOU LIKE?</h1>
        {/*MAP*/}
            {['ITALIAN','SEAFOOD','APPETIZERS','ITALIAN','SALADS'].map((item, id) => <Filter key={id} item={item}/>)}
        </div>
    )
}

export default AllCatigories;