const submit = document.getElementById("submit");
const searchBtn = document.getElementById("search-btn");
const search = document.getElementById("search");
const random = document.getElementById("random");
const resultHeading = document.getElementById("result-heading");
const mealContainer = document.getElementById("meals");
const selectedMeal = document.getElementById("selected-meal");
/*
function searchMeal(e) {
    e.preventDefault()

    // Clear Selected Meal
    //selectedMeal.innerHTML = '';

    // Get the search term from input field
    const term = search.value;
    
    // Check if search term exists
    if(term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                /*resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`
                if(data.meals === null) {
                    resultHeading.innerHTML = `<p>There are no search results for '${term}'. Please try a different search.</p>`
                } else {
                    mealContainer.innerHTML = data.meals.map( meal => `
                        <div class="meal">
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                            <div class="meal-info" data-mealID="${meal.idMeal}">
                                <h3>${meal.strMeal}</h3>
                            </div>
                        </div>
                    `)
                    .join('')
                }
            })
    } else {
        alert('Please enter a valid search.')
    }

    // Clear Search Term
    //search.value = '';
}
*/

function searchMeal(e) {
    e.preventDefault();

    const term = search.value;

    if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then( res => res.json())
        .then( (data) => {
            console.log(data);
            resultHeading.innerHTML = `<h2>Search Result for '${term}'`;

            if ( data.meals === null) {
                resultHeading.innerHTML = `<p>There is no food related to '${term}'. Please try a different search`;
            }
            else {
                meals.innerHTML = data.meals.map( meal => `
                <div class="meal">
                    <img src=${meal.strMealThumb} alt=${meal.strMeal}/>
                    <div class="meal-info" data-mealID=${meal.idMeal}>
                        <h3>${meal.strMeal}</h3>
                    </div>
                </div>    
                `)
                .join("")
            }
        })

    }
    else {
        alert("please enter a valid keyword");
    }

    search.value = " ";
}

function getMealById(mealID) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
        .then( res => res.json())
        .then( data => {
            const meal = data.meals[0];
            addMealToDOM(meal);
        })
}

// Function to add a meal to DOM
function addMealToDOM(meal) {
    const ingredients = [];

    for(let i = 1; i <= 20; i++) {
        if(meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        } else {
            break;
        }
    };

    selectedMeal.innerHTML = `
        <div class="selected-meal">
            <h1>${meal.strMeal}</h1>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <div class="selected-meal-info">
                ${meal.strCategory ? `<p>${meal.strCategory}</p>` : '' }
                ${meal.strArea ? `<p>${meal.strArea}</p>` : '' }
            </div>
            <div class="main">
                <p>${meal.strInstructions}</p>
                <h2>Ingredients</h2>
                <ul>
                    ${ingredients.map( ingredient => `<li>${ingredient}</li>` ).join('')}
                </ul>
            </div>
        </div>
    `;
}

//Event listener
submit.addEventListener("submit", searchMeal);

mealContainer.addEventListener('click', e => {
    const mealInfo = e.path.find( item => {
        if(item.classList) {
            return item.classList.contains('meal-info');
        } else {
            return false
        }
    });

    if(mealInfo) {
        const mealID = mealInfo.getAttribute('data-mealid');
        getMealById(mealID);
    }

});