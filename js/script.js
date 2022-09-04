const categories = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayCategories(data.data.news_category))
}

const displayCategories = allData => {
    const categories = document.getElementById('categories');

    allData.forEach(data => {
        const a = document.createElement('a');
        a.innerText = data.category_name;
        a.href = "#";
        categories.appendChild(a);
        a.addEventListener('click', function(){
            console.log("click");
        });
    })

    /* for (const data of allData) {
        const a = document.createElement('a');
        a.innerText = data.category_name;
        a.href = "#";
        categories.appendChild(a);
    } */
}

const loadCategoryNews = () =>{
    console.log('clicked');
}


categories();