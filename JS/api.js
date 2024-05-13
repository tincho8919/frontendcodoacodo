
const { createApp } = Vue
createApp({
  data() {
    return {
      url: "../JS/api.json",
      datos: [],
      error: false,
    }
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(
          data => {
            console.log(data)
            this.datos = data
          }
        )
        .catch(error => {
          console.log("Error:" + error)
          this.error = true
        });
    }
  },   
created() { 
  this.fetchData(this.url)
}
}).mount('#app')
























/* let dato = [
    {
        id: 1,
        nombre: "Just",
        marca: "Nike",
        talla: "44",
        genero: "Masculino",
        imagen: "https://falabella.scene7.com/is/image/Falabella/7430791_1?q=i?wid=800&hei=800&qlt=70",
    },
    {
        id: 2,
        nombre: "Neo",
        marca: "Adidas",
        talla: "42",
        genero: "Femenino",
        imagen: "https://http2.mlstatic.com/tenis-adidas-neo-advantage-dama-todos-los-colores-zapatillas-D_NQ_NP_730970-MCO27896039823_082018-F.jpg",
    },
    {
        id: 3,
        nombre: "Master",
        marca: "Puma",
        talla: "43",
        genero: "Masculino",
        imagen: "https://www.lapolar.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4ce3d473/images/large/3CC453408-blanco.jpg?sw=1200&sh=1200&sm=fit",
    },
    {
        id: 4,
        nombre: "Converse",
        marca: "All star",
        talla: "41",
        genero: "Unisex",
        imagen: "https://th.bing.com/th/id/OIP.9TG09WjYjLhMiX5Hfydu8gHaHa?rs=1&pid=ImgDetMain",
    },
    {
        id: 5,
        nombre: "Tenis",
        marca: "Puma",
        talla: "40",
        genero: "Femenino",
        imagen: "https://tiendasmultisports.com/4825-large_default_2x/tenis-puma-x-ray-lite-square-mujer-blanco-373108-06.jpg",
    },
    {
        id: 6,
        nombre: "Main",
        marca: "Puma",
        talla: "40",
        genero: "Masculino",
        imagen: "https://th.bing.com/th/id/OIP.9gtO4WjLaHJKYt_QIGq4tgHaHa?w=830&h=830&rs=1&pid=ImgDetMain",
    },
    {
        id: 7,
        nombre: "opin",
        marca: "All star",
        talla: "42",
        genero: "Unisex",
        imagen: "https://th.bing.com/th/id/OIP.QV__gs1g_2Oa8K1fXal9pAHaHa?rs=1&pid=ImgDetMain",
    },
    {
        id: 8,
        nombre: "WL410",
        marca: "New Balance",
        talla: "45",
        genero: "Masculino",
        imagen: "https://i.pinimg.com/originals/a2/07/76/a207769b62b7872cafbf0580160ef13a.jpg",
    },
    {
        id: 9,
        nombre: "Tenis",
        marca: "All star",
        talla: "40",
        genero: "Unisex",
        imagen: "https://http2.mlstatic.com/tenis-converse-bota-lona-100-original-2-al-9-mex-D_NQ_NP_878397-MLM41625637757_052020-F.jpg",
    },
    {
        id: 10,
        nombre: "MKP0",
        marca: "Venca",
        talla: "44",
        genero: "Unisex",
        imagen: "https://statics.venca.com/web/img/products/MKP000316126_10447390_PL_20221213051442_0_l.jpg",
    },
    {
        id: 11,
        nombre: "Uktn",
        marca: "Puma",
        talla: "39",
        genero: "Femenino",
        imagen: "https://m.media-amazon.com/images/I/415UknT-pcL.jpg",
    },
    {
        id: 12,
        nombre: "Revolution",
        marca: "Nike",
        talla: "43",
        genero: "Masculino",
        imagen: "https://http2.mlstatic.com/tenis-nike-revolution-4-caballero-gris-908988-010-D_NQ_NP_618490-MLM31233364840_062019-F.jpg",
    } ]


    let zapatillas = ``
for (elemento of dato) {
    zapatillas = zapatillas + `<div class="tarjeta">
    <img  class="img"src="${elemento.imagen}" alt="${elemento.nombre}">
    <div class="cuerpo">
        <h1>${elemento.nombre}</h1>
        <h2>${elemento.marca}</h2>
        <p>${elemento.talla}</p>
        <p>${elemento.genero}</p>
    </div>
    </div>`
}
document.querySelector(".contenedor").innerHTML = zapatillas */