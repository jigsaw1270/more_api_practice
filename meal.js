const loadmeals = (searchtext) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaymeals(data.meals));
}


const displaymeals = meals =>{
    // console.log(meals);
    const mealcon = document.getElementById('meals-container');
    mealcon.innerHTML = '';
    meals.forEach(meal  => {
        console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <button onclick="mealdetail2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealdetailsmodal">
 Details
</button>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>
                  `
                  mealcon.appendChild(mealDiv);
    });
}


const searchmeals =() => {
    const searchtext =  document.getElementById('search-field').value;
    loadmeals(searchtext);
}

const mealdetail = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaymealdetails(data.meals[0]) );

}

// async await
const mealdetail2 = async(idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    const res = await  fetch(url);
    const data = await res.json();
    displaymealdetails(data.meals[0]);

}


const displaymealdetails = meal => {
document.getElementById('mealdetailsmodalLabel').innerText = meal.strMeal;
const mealsdet = document.getElementById('mealimg');
mealsdet.innerHTML = `<img src="${meal.strMealThumb}" class="img-fluid" alt="...">
`;
}
loadmeals('soup');


