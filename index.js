const products = [
    {
        "date": "2017-11-01 12:09:03",
        "id": 564564867361401,
        "image": "https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg",
        "name": "Молочный Изюм 100",
        "price": 102.0,
        "removed": 0,
        "quantity": 96,
    },
    {
        "date": "2017-11-03 13:11:06",
        "id": 564564867361402,
        "image": "https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg",
        "name": "Русская картошка чедар 50",
        "price": 46.3,
        "removed": 0,
        "quantity": 96,
    },
    {
        "date": "2017-11-03 13:11:06",
        "id": 564564867361403,
        "image": null,
        "name": "Виноград 0,3л",
        "price": 65.0,
        "removed": 0,
        "quantity": 96,
    },
    {
        "date": "2017-11-29 19:31:03",
        "id": 564564867361404,
        "image": "http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/tvorog-prostokvashino-1.jpg",
        "name": "Нежирный творог",
        "price": 52.41,
        "removed": 0,
        "quantity": 96,
    },
    {
        "date": "2017-11-29 18:29:00",
        "id": 564564867361405,
        "image": null,
        "name": "Парус лимон 1л",
        "price": 150.0,
        "removed": 1,
        "quantity": 96,
    },
    {
        "date": "2017-11-29 17:26:57",
        "id": 564564867361406,
        "image": "http://карапузик.com.images.1c-bitrix-cdn.ru/upload/iblock/b28/b28f089d41db757b74cfebfe21609228.jpg",
        "name": "Яблоко-Виноград 0,5л",
        "price": 44.0,
        "removed": 0,
        "quantity": 96,
    },
    {
        "date": "2017-11-29 16:24:54",
        "id": 564564867361407,
        "image": "http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG",
        "name": "Молочный Традиция 100",
        "price": 115.0,
        "removed": 0,
        "quantity": 96,
    },
    {
        "date": "2017-10-16 12:07:07",
        "id": 564564867361408,
        "image": "https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg",
        "name": "Молочный Груша 200",
        "price": 180.0,
        "removed": 0,
        "quantity": 96,
    },
    {
        "date": "2017-10-16 15:09:08",
        "id": 564564867361409,
        "image": "http://produkty-online.ru/wa-data/public/shop/products/31/83/18331/images/1359/1359.970.jpg",
        "name": "Молочный Сказка 100",
        "price": 39.0,
        "removed": 0,
        "quantity": 96,
    },
    {
        "date": "2017-10-16 18:11:09",
        "id": 564564867361410,
        "image": "http://ecosned.ru/image/cache/catalog/categories/iz_fermerskogo_moloka/tvorog/7/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg",
        "name": "Творог 9% с курагой",
        "price": 121.0,
        "removed": 0,
        "quantity": 96,
    },
    {
        "date": "2017-10-16 15:06:08",
        "id": 564564867361411,
        "image": null,
        "name": "Парус апельсин 1л",
        "price": 150.0,
        "removed": 1,
        "quantity": 96,
    },
    {
        "date": "2017-10-16 15:09:08",
        "id": 564564867361412,
        "image": "http://xn--4-8sbu.xn--p1ai/thumb/4KQdJOhw0Uu5AnP0PPIrMQ/200r200/761268/3152.png",
        "name": "Беседа. 50гр",
        "price": 36.5,
        "removed": 0,
        "quantity": 96,
    },
    {
        "date": "2017-10-16 15:09:08",
        "id": 564564867361413,
        "image": "http://www.svoda.ru/site/userfiles/images/%D0%9A%D0%90%D0%9F%D0%9B%D0%AF%20%D0%A0%D0%9E%D0%A1%D0%AB%201.5%D0%9B%20%D0%93%D0%90%D0%97%D0%98%D0%A0%D0%9E%D0%92%D0%90%D0%9D%D0%9D%D0%90%D0%AF.jpg",
        "name": "Капля росы негаз 1.5л",
        "price": 16.9,
        "removed": 0,
        "quantity": 96,
    },
    {
        "date": "2017-10-16 15:09:08",
        "id": 564564867361414,
        "image": "https://www.utkonos.ru/images/photo/3054/3054289H.jpg",
        "name": "Аленка карамель 100г Акционный товар Большая скидка",
        "price": 73.9,
        "removed": 0,
        "quantity": 96,
    },
    {
        "date": "2017-10-16 15:09:08",
        "id": 564564867361415,
        "image": "https://tashkentcena.com/files/products/893eebe7b69146290886dc504a3328ef.jpeg",
        "name": "Горький коньяк 100",
        "price": 336.0,
        "removed": 0,
        "quantity": 96,
    },
    {
        "date": "2017-10-16 15:09:08",
        "id": 564564867361416,
        "image": "https://www.utkonos.ru/images/photo/3139/3139296H.jpg",
        "name": "Тоник 0,5л",
        "price": 63.0,
        "removed": 0,
        "quantity": 96,
    },
    {
        "date": "2017-10-16 15:09:03",
        "id": 564564867361417,
        "image": "https://www.utkonos.ru/images/photo/3265/3265004H.jpg",
        "name": "Молочный Яблоко 100",
        "price": 25.1,
        "removed": 0,
        "quantity": 96,
    },
    {
        "date": "2017-10-16 11:09:06",
        "id": 564564867361418,
        "image": "https://www.utkonos.ru/images/photo/3176/3176192H.jpg",
        "name": "Сыр 125г",
        "price": 131.0,
        "removed": 0,
        "quantity": 96,
    },
    {
        "date": "2017-10-16 13:04:08",
        "id": 564564867361419,
        "image": "https://teremok.sm.ua/wa-data/public/shop/products/82/25/82582/images/35179/35179.750@2x.jpg",
        "name": "Сметана и лук 25г",
        "price": 30.0,
        "removed": 0,
        "quantity": 96,
    },
    {
        "date": "2017-10-16 12:09:04",
        "id": 564564867361420,
        "image": "https://www.utkonos.ru/images/photo/3117/3117496H.jpg",
        "name": "Русская картошка икра 50",
        "price": 33.1,
        "removed": 0,
        "quantity": 96,
    }
]

for (const el of products){
    document.getElementById('app').innerHTML += `<div class="all_card"><details>
    <summary id="title">${el.date}</summary>
    <p>Приход №${el.id}</p>
    <div class="all_info">
      <img class="product_image" src="${el.image}" alt="No image" >  
      <div class="text_info">
      <p>${el.name}</p>
      <div class="down_info">
        <p>${el.quantity} штук x </p>
        <p> ${Math.ceil(el.price)}₽</p>
        <p class="total_price">${Math.ceil(el.quantity * el.price)}₽</p>
      </div>
      </div> 
    </div>
  </details></div>`;
    
}


// x = 0
// for (const element of rows) {
    
//         if (rows[x].docId === rows[x + 1].docId){
//             x++;
//         } 
//         else {
//             for (const el of docs){
//                 if(el.id === rows[x].docId){
//                     document.getElementById('app').innerHTML += `<p>${el.date}</p>`;
//                 }
//             }
//             break
//         }
        

// }


// for (const element of docs) {
//     console.log(element)
    
//     document.getElementById('app').innerHTML += `<p>${element.date}</p>`;
// }

// for (const key in array) {
//     console.log(`${key}: ${array[key]}`);
// }