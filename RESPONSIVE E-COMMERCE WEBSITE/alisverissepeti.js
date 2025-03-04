
//ürünleri içeren veri yapısı
const product = [
    {
        id: 0,
        image: 'martinedenk.png',
        title: 'Martin Eden',
        price: 153,
    },
    {
        id: 1,
        image: 'atesvekank.jpeg',
        title: 'Ateş ve Kan',
        price: 65,
    },
    {
        id: 2,
        image: 'sucvecezak.png',
        title: 'Suç ve Ceza',
        price: 35,
    },
    {
        id: 3,
        image: 'cesuryenidunyak.png',
        title: 'Cesur Yeni Dünya',
        price: 45,
    },
    {
        id: 4,
        image: 'yitikcennetk.png',
        title: 'Yitik Cennet',
        price: 39,
    },
    {
        id: 5,
        image: 'hayvanciftligik.png',
        title: 'Hayvan Çİftliği',
        price: 14,
    },
    {
        id: 6,
        image: 'sefillerk.jpg',
        title: 'Sefiller',
        price: 98,
    },
    {
        id: 7,
        image: 'tutunamayanlark.avif',
        title: 'Tutunamayanlar',
        price: 99,
    },
    {
        id: 8,
        image: 'annakareninak.jpg',
        title: 'Anna Karenina',
        price: 57,
    },
    {
        id: 9,
        image: 'sekerportakalık.jpg',
        title: 'Şeker Portakalı',
        price: 45,
    },
    {
        id: 10,
        image: 'intibahk.jpg',
        title: 'İntibah',
        price: 26,
    },
    {
        id: 11,
        image: 'gururveonyargik.webp',
        title: 'Gurur ve Önyargı',
        price: 47,
    },
];

//Bu kodun temel amacı her bir kategori için bir kutu oluşturarak bu kutuları sayfaya eklemektir.
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2> ${price}.00 TL</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Satın Al</button>"+
        `</div>
        </div>`
    )
}).join('')

//Alışveriş sepeti oluşturma ve yönetme işlevselliği sağlar. Sepete ürün eklemek, çıkarmak ve görüntülemek için kullanılır.
var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Sepet Boş";
        document.getElementById("total").innerHTML = 0+".00" + " TL";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = total+".00" + " TL";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'> ${price}.00 TL</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

}