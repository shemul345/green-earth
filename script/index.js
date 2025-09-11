const loadPlants = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(data => displayPlants(data.plants));
};

const loadCategoryPlants = (id) => {
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then(res => res.json())
        .then(data => {
            removeActive();
            const clickBtn = document.getElementById(`category-btn-${id}`);
            clickBtn.classList.add("active");
            displayPlants(data.plants)
        });
}

const removeActive = () => {
    const categoryBtn = document.querySelectorAll(".category-btn");
    categoryBtn.forEach(btn => btn.classList.remove("active"));
};

const loadCategory = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(data => displayCategory(data.categories))
};

const displayCategory = (categories) => {
    const categoryContainer = document.getElementById("category-container");
    categoryContainer.innerHTML = "";

    for (let category of categories) {
        // console.log(category);
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button id="category-btn-${category.id}"
        onclick="loadCategoryPlants(${category.id})"
         class="text-left w-full px-2 py-2 hover:bg-green-700 hover:text-white rounded-lg category-btn">${category.category_name}</button>`;
        // console.log(btnDiv);
        categoryContainer.append(btnDiv);

    };
};


const displayPlants = (plants) => {
    
    const plantsContainer = document.getElementById("plants-container");
    plantsContainer.innerHTML = "";

     // word limit function
    const limitWords = (text, limit) => {
        const words = text.split(" ");
        if (words.length > limit) {
            return words.slice(0, limit).join(" ") + "...";
        }
        return text;
    };

    for (let plant of plants) {
      
        const plantDiv = document.createElement("div");
        plantDiv.innerHTML = `
        <div class="card bg-base-100 w-82 shadow-sm">
                        <figure class="p-5">
                            <img class="rounded-xl h-52 w-full" src="${plant.image}" />
                        </figure>
                        <div class="card-body mt-[-30px]">
                            <h2 class="card-title">${plant.name}</h2>
                            <p>${limitWords(plant.description, 18)}</p>
                            <div class="flex justify-between">
                                <button class="btn bg-green-100 rounded-3xl text-green-700">${plant.category}</button>
                                <button class="text-xl font-bold">$<span>${plant.price}</span></button>
                            </div>
                            <div class="card-actions justify-end">
                                <button class="bg-green-700 w-full rounded-3xl py-3 text-white text-lg font-semibold mt-4">Add to Cart</button>
                            </div>
                        </div>
                    </div>`;
        
        plantsContainer.append(plantDiv);

    };

};
loadCategory();

loadPlants();