const categories = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayCategories(data.data.news_category))
        .catch((e) => console.log(e))
}

const displayCategories = allData => {
    const categories = document.getElementById('categories');

    allData.forEach(data => {
        const a = document.createElement('a');
        a.innerText = data.category_name;
        a.href = "#";
        categories.appendChild(a);
        a.addEventListener('click', function () {
            const url = `https://openapi.programming-hero.com/api/news/category/${data.category_id}`;

            fetch(url)
                .then(res => res.json())
                .then(data => displayNews(data.data))
                .catch((e) => console.log(e))
        });
    })

    togggle(true);
}

function compare(a, b){ 
    if(a.total_view < b.total_view)return 1; 
    else if(a.total_view > b.total_view)return -1; 
    else return 0; 
}

const displayNews = allNews => {
    let count = 0;

    console.log(allNews);
    const news = document.getElementById('news-container');

    news.innerHTML = "";

    allNews.sort(compare);
    allNews.forEach(data => {
        count++;
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
        <div class="card mt-5 ms-auto me-auto mb-3 custom-card-style">
        <div class="row g-0">
            <div class="col-md-3 d-flex card-image">
                <img src="${data.thumbnail_url}" class="img-fluid rounded-3">
            </div>

            <div class="col-md-9 p-3">
                <div class="card-body d-flex flex-column container-fluid">

                    <div class="container-fluid">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text mt-4">${data.details.slice(0, 500)}....</p>

                    </div>

                    <div class="card-footer container-fluid mt-2 mt-md-5 d-md-flex justify-content-between ps-2 pe-2"
                        id="card-footer">

                        <div class="container d-flex align-items-center">

                            <div class="profile-img" id="footer-profile-image">
                                <img src="${data.author.img}" alt="profile">
                            </div>
                            <div class="cotainer d-flex flex-column align-items-start justify-content-center ms-2">
                                <p class="m-0" id="profile-name">${data.author.name}</p>
                                <p class="m-0 text-muted" id="profile-date">${data.author.published_date}</p>
                            </div>
                        </div>

                        <div class="container d-flex align-items-center mt-2 mt-md-0">
                            <span><i class="fa-solid fa-eye me-2"></i></span>
                            <p class="m-0">${data.total_view}</p>
                        </div>

                        <div class="container d-flex align-items-center mt-2 mt-md-0">
                            <span><i class="fa-regular fa-star-half-stroke"></i></span>
                            <span><i class="fa-regular fa-star"></i></span>
                            <span><i class="fa-regular fa-star"></i></span>
                            <span><i class="fa-regular fa-star"></i></span>
                            <span><i class="fa-regular fa-star"></i></span>
                        </div>

                        <div class="container d-flex align-items-center justify-content-end mt-2 mt-md-0">
                            <span id="read-more" btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <i class="fa-solid fa-arrow-right-long"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;

        news.appendChild(newsDiv);
    })

    togggle(false);

    const items = document.getElementById('items');
    items.innerText = `${count}`;
}

let togggle = (isloading) =>
{
    let loder = document.getElementById('lodder');
    if(isloading){
        loder.classList.remove('d-none');
    }
    else
    {
        loder.classList.add('d-none')
    }
}

const openModal = () => {

}

categories();

