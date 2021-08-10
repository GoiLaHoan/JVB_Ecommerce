const product_01_image_01 = require('../images/products/product-01 (1).jpg').default

const product_02_image_01 = require('../images/products/product-02 (1).jpg').default

const product_03_image_01 = require('../images/products/product-03 (1).jpg').default

const product_04_image_01 = require('../images/products/product-04 (1).jpg').default

const product_05_image_01 = require('../images/products/product-05 (1).jpg').default

const product_06_image_01 = require('../images/products/product-06 (1).jpg').default

const product_07_image_01 = require('../images/products/product-07 (1).jpg').default

const product_08_image_01 = require('../images/products/product-08 (1).jpg').default

const product_09_image_01 = require('../images/products/product-09 (1).jpg').default

const product_10_image_01 = require('../images/products/product-10 (1).jpg').default

const product_11_image_01 = require('../images/products/product-11 (1).jpg').default

const product_12_image_01 = require('../images/products/product-12 (1).jpg').default

const products = [
    {
        title: "Silkeron Phil Inter Pharma (Lốc/15tube/10gr)",
        price: '177000',
        image01: product_01_image_01,
        categorySlug: "thuoc",
        slug: "thuoc-Silkeron Phil Inter Pharma",
        description: ""
    },
    {
        title: "Amlodipin 5mg Tv.Pharm (H/30v)",
        price: '11400',
        image01: product_02_image_01,
        categorySlug: "thuoc",
        slug: "thuoc-Amlodipin 5mg Tv.Pharm",
        description: ""
    },
    {
        title: "Vaspycar Trimetazidine 20mg Pymepharco (H60v)",
        price: '27300',
        image01: product_03_image_01,
        categorySlug: "thuoc",
        slug: "thuoc-Vaspycar Trimetazidine",
        description: ""
    },
    {
        title: "Apitim Amlodipin 5mg Dhg (H/30v)",
        price: '18500',
        image01: product_04_image_01,
        categorySlug: "thuoc",
        slug: "thuoc-Apitim Amlodipin",
        description: ""
    },
    {
        title: "Dạ Hương Tím Hoa Linh (C/100ml)",
        price: '25100',
        image01: product_05_image_01,
        categorySlug: "thuoc",
        slug: "da-huong-tim-hoa-linh",
        description: ""
    },
    {
        title: "Glotadol 500mg Abbott (Hộp/100viên Nén)(Hồng)",
        price: '34300',
        image01: product_06_image_01,
        categorySlug: "thuoc",
        slug: "thuoc-Glotadol",
        description: ""
    },
    {
        title: "Dung Dịch Vệ Sinh Phụ Nữ Dạ Hương Xanh Có Vòi (C/120ml)",
        price: '31800',
        image01: product_07_image_01,
        categorySlug: "thuoc",
        slug: "dung-dich-vs-xanh",
        description: ""
    },
    {
        title: "Dung Dịch Vệ Sinh Phụ Nữ Dạ Hương Tím Có Vòi (C/120ml)",
        price: '31800',
        image01: product_08_image_01,
        categorySlug: "thuoc",
        slug: "dung-dich-vs-tim",
        description: ""
    },
    {
        title: "Dạ Hương Trà Xanh Hoa Linh (C/100ml)(Xanh Lá)",
        price: '26600',
        image01: product_09_image_01,
        categorySlug: "thuoc",
        slug: "da-huong-tra-xanh",
        description: ""
    },
    {
        title: "Cataflam 50mg Novartis (H/10v)",
        price: '46990',
        image01: product_10_image_01,
        categorySlug: "thuoc",
        slug: "thuoc-Cataflam",
        description: ""
    },
    {
        title: "Dinalvic Pharimexco (H/20v)",
        price: '22500',
        image01: product_11_image_01,
        categorySlug: "thuoc",
        slug: "thuoc-Dinalvic Pharimexco",
        description: ""
    },
    {
        title: "Xịt Mũi Xypenat Merap (C/30ml)",
        price: '24200',
        image01: product_12_image_01,
        categorySlug: "thuoc",
        slug: "thuoc-xitmui",
        description: ""
    },
    // 12 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug
}

export default productData