const products = [
  {
    name: "RICCKS RS8 V2",
    price: "1.050.000đ",
    image: "../assets/images/riccks.jpg",
    link: "chi-tiet/chitiet1.html"
  },
  {
    name: "MONKA K75",
    price: "800.000đ",
    image: "../assets/images/monka.webp",
    link: "chi-tiet/chitiet.html"
  },

  {
    name: "LUCKY65 V2",
    price: "1.000.000đ",
    image: "../assets/images/lucky.webp",
    link: "chi-tiet/chitiet.html"
  },

  {
    name: "RAINY75",
    price: "2.100.000đ",
    image: "../assets/images/rainy.webp",
    link: "chi-tiet/chitiet.html"
  },

  {
    name: "YUNZI AL75",
    price: "2.750.000đ",
    image: "../assets/images/yunzi.webp",
    link: "chi-tiet/chitiet.html"
  },

  {
    name: "LEOBOG HI75 C PRO",
    price: "900.000đ",
    image: "../assets/images/leobog.webp",
    link: "chi-tiet/chitiet.html"
  },

  {
    name: "AULA F75 MAX",
    price: "1.350.000đ",
    image: "../assets/images/aula.webp",
    link: "chi-tiet/chitiet.html"
  },

  {
    name: "MCHOSE G87",
    price: "1.050.000đ",
    image: "../assets/images/mchose.webp",
    link: "chi-tiet/chitiet.html"
  }
];

function createItem(obj)
{
    const productList = document.getElementById("product-list");

    productList.innerHTML += `
    <div class="col text-center product-item">
        <a href="${obj.link}" class="product-card">
            <div class="product-image ratio ratio-1x1">
                <img src="${obj.image}" alt="${obj.name}">
            </div>

            <div class="product-info">
                <h4>${obj.name}</h4>
                <h5>${obj.price}</h5>
            </div>

            <div class="product-overlay">
                <div class="overlay-button">Chi tiết</div>
            </div>
        </a>
    </div>
    `;
}

products.forEach(createItem);





function changeImg(el) {
    document.getElementById("mainImg").src = el.src;
}




function printBCC()
{
    let num = parseInt(document.getElementById("txtSo").value);
    let result = "";

    let i = 1;
    while(i<=10)
    {
        result += `${num} x ${i} = ${num*i} <br>`; 
        i++;
    }

    document.getElementById("result").innerHTML = result;
}
