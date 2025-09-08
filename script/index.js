const loadPlants = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(data => displayPlants(data.plants));
};

// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
//     "price": 500

const displayPlants = (plants) => {
    
    const plantsContainer = document.getElementById("plants-container");
    plantsContainer.innerHTML = "";

    for (let plant of plants) {
      
        const plantDiv = document.createElement("div");
        plantDiv.innerHTML = `
        <div class="card bg-base-100 w-92 shadow-sm">
                        <figure class="p-5">
                            <img class="rounded-xl h-52 w-full" src="${plant.image}" />
                        </figure>
                        <div class="card-body mt-[-30px]">
                            <h2 class="card-title">${plant.name}</h2>
                            <p>${plant.description}</p>
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

loadPlants();