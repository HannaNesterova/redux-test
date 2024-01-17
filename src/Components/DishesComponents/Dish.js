
function Dish ({dish}) {
    return (
        <div className="dish-container">
          <h1>{dish.name}</h1>
          <p>category: {dish.category}</p>
          <p>$ {dish.price}</p>
          <img src={`./${dish.img}.jpg`} alt='dish' width='300px'/>

          {/*TO FIX LATER*/}
          <button>HOW MANY PORTIONS?</button>
          <button>Add to cart</button>
        </div>
    )
}

export default Dish;
