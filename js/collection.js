show_collection(null);
function show_collection(valuecheck) {
    if (valuecheck == null) {
        show_collection_left();
        show_collection_new();
    }
    else {

        // show_collection_left();
        let valueoutput = '';
        data_collection.forEach((value) => {
            // console.log(value.content[0]);
            if (value.id_collection == valuecheck) {
                valueoutput += ` <div class="blog-right-header">
                    <div class="blog-header-text blog-header-text-news" style="text-align: left;">
                        ${value.title}
                    </div>
                </div>
                <div class="blog-right-body js-blog-right-body">
                    <div class="blog-right-body-right-time">
                        <p>${value.time}</p>
                    </div>
                    <div class="blog-right-body-right-img">
                        <img src="${value.img}" alt="">
                    </div>

                </div> <div class="blog-right-body js-blog-right-body">`;

                value.content.forEach((valueContent) => {

                    if (valueContent.img) {
                        valueoutput += `<div class="blog-right-body-right-img">
                        <img src="${valueContent.img}" alt="">
                    </div>`;
                    }
                    else if (valueContent.text) {
                        valueoutput += ` <div class="blog-right-body-right-text">
                        <p>${valueContent.text} </p>  </div>`;
                    }
                    else if (valueContent.title) {
                        valueoutput += `  <div class="blog-right-body-right-title">
                        <h3>${valueContent.title}</h3>
                    </div>`
                    }
                });
            }

        });
        // console.log(valueoutput);
        // console.log("HÀ THANH DŨNG");
        valueoutput += ` </div>`;
        console.log(valueoutput);
        document.querySelector('.box-right').innerHTML = valueoutput;
    }
}
function show_collection_left() {
    let value_collection = '';
    data_collection.forEach((value, index) => {
        value_collection += `<div href="" class="js-blog-box-left" id="${value.id_collection}">
                        <div class="blog-box">

                            <div class="blog-box-image">
                                <img src="${value.img}" alt="${value.alt}"
                                    style="width: 100%;height: 100%; object-fit: cover;">
                            </div>
                            <div class="blog-box-text">
                                <span> <i class="fa-regular fa-clock"></i> ${value.time}</span>
                                <h5> <span style="line-height: 20px;">${value.title}</span></h5>
                            </div>

                        </div>
                    </div>`;
    });
    document.querySelector('.js-blog-left-body').innerHTML = value_collection;
}
function show_collection_new() {
    let valueCollection = '';
    dataCollectionnew.forEach((value) => {
        valueCollection += `<div class="js-blog-box">
                        <div class="blog-box-right">

                            <div class="blog-box-image">
                                <img src="${value.img}" alt="áo sơ mi trắng công sở" style="">
                            </div>
                            <div class="blog-box-text">
                                <span> <i class="fa-regular fa-clock"></i>${value.time}</span>
                                <h1> <span style="line-height: 20px; font-size: 15.56px;">${value.title}</span>
                                </h1>
                                <p style="font-size: 14.4px;">${value.content}</p>
                                <button>Xem thêm+</button>
                            </div>

                        </div>
                        </div>
                    `;
    });
    document.querySelector('.js-blog-right-body').innerHTML = valueCollection;
}
click_new_collection();
function click_new_collection() {
    // console.log(' click_new_collection');
    // document.querySelectorAll('.js-blog-box-left').forEach((value) => {
    //     value.addEventListener('click', () => {
    //         let test = "123";
    //         show_collection(test);
    //     });
    // });
    document.querySelectorAll('.js-blog-box-left').forEach((value) => {
        value.addEventListener('click', function () {
            let test = "123";
            console.log("value nè");
            console.log(value)
            show_collection(value.id);
        });
    })

}