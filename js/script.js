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
        a.addEventListener('click', function () {
            console.log('clicked');

            const url = `https://openapi.programming-hero.com/api/news/category/${data.category_id}`;

            fetch(url)
                .then(res => res.json())
                .then(data => displayNews(data.data))
        });
    })
}

const displayNews = allNews => {
    console.log(allNews);
    const news = document.getElementById('news');

    allNews.forEach(data => {
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
        <div class="card mt-5 ms-auto me-auto mb-3 custom-card-style">
        <div class="row g-0">
            <div class="col-md-3 d-flex" id="card-image">
                <img src="img/profile.jpg" class="img-fluid rounded-3">
            </div>

            <div class="col-md-9 p-3">
                <div class="card-body d-flex flex-column gap-5 container-fluid">

                    <div class="container-fluid">
                        <h5 class="card-title">The best online vintage clothing stores to shop more
                            sustainably this summer</h5>
                        <p class="card-text mt-4">There's no better time than now to familiarise
                            yourself with the best online vintage clothing stores. If you want to
                            overhaul your wardrobe for the long run, mixing vintage with high street
                            clothing is the key to being trendy as well as sustainable.</p>
                        <p class="mb-0 mt-4 ms-0 me-0">But vintage shopping isn't easy, you can easily
                            spend hours in a store and walk out with...</p>

                    </div>

                    <div class="container-fluid mt-2 mt-md-5 d-md-flex justify-content-between ps-2 pe-2"
                        id="card-footer">

                        <div class="container d-flex align-items-center">

                            <div class="profile-img" id="footer-profile-image">
                                <img src="img/profile.jpg" alt="profile">
                            </div>
                            <div class="cotainer d-flex flex-column align-items-start justify-content-center ms-2">
                                <p class="m-0" id="profile-name">John Snow</p>
                                <p class="m-0 text-muted" id="profile-date">Jan 10, 2022</p>
                            </div>
                        </div>

                        <div class="container d-flex align-items-center mt-2 mt-md-0">
                            <span><i class="fa-solid fa-eye me-2"></i></span>
                            <p class="m-0">1.5M</p>
                        </div>

                        <div class="container d-flex align-items-center mt-2 mt-md-0">
                            <span><i class="fa-regular fa-star-half-stroke"></i></span>
                            <span><i class="fa-regular fa-star"></i></span>
                            <span><i class="fa-regular fa-star"></i></span>
                            <span><i class="fa-regular fa-star"></i></span>
                            <span><i class="fa-regular fa-star"></i></span>
                        </div>

                        <div class="container d-flex align-items-center justify-content-end mt-2 mt-md-0">
                            <span id="read-more"><i class="fa-solid fa-arrow-right-long"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `

    })
}

categories();