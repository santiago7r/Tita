const photosData = [
    {
        title: "Woman in pool ",
        url: "https://images.unsplash.com/photo-1619882903364-55fb81befd7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80"
    },
    {
        title: "Woman smoking ",
        url: "https://images.unsplash.com/photo-1619817366580-2e0ab90395a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80"
    },
    {
        title: "Brown dog ",
        url: "https://images.unsplash.com/photo-1619795566026-8471166b84e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
        title: "Japanese street ",
        url: "https://images.unsplash.com/photo-1619862622483-75cd36ea3409?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
    },
    {
        title: "Luxury car ",
        url: "https://images.unsplash.com/photo-1619881053442-0ac008a72cdf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
    },
    {
        title: "Woman green eyes",
        url: "https://images.unsplash.com/photo-1619857154353-eff1ffd9ffe4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
    },
    {
        title: "Man with dreadlocks ",
        url: "https://images.unsplash.com/photo-1619872812024-44da4df9819d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    },
    {
        title: "Sunset ",
        url: "https://images.unsplash.com/photo-1619798146346-f3a83d31f976?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80"
    },
    {
        title: "Bakery ",
        url: "https://images.unsplash.com/photo-1619820358954-ef600ca5c603?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
}];


function renderGridElement(photo){
    return `
        <div class="grid-cell">
            <img src="${photo.url}" alt="${photo.title}">
        </div>
    `;
}

function renderContent(){
    const content = document.getElementById("grid").innerHTML;
    document.getElementById("grid").innerHTML = `${content}
        ${photosData.map(renderGridElement).join('')}
    `;
}

renderContent();

const addMoreBtn = document.getElementById('show-me-more');

addMoreBtn.addEventListener('click',renderContent);
