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
        categorySlug: "Thuốc 1",
        producer: "Công ti 1",
        slug: "thuoc-Silkeron Phil Inter Pharma",
        description: "Lốc 15 tube x 10 gram"
    },
    {
        title: "Amlodipin 5mg Tv.Pharm (H/30v)",
        price: '11400',
        image01: product_02_image_01,
        categorySlug: "Thuốc 1",
        producer: "Công ti 1",
        slug: "thuoc-Amlodipin 5mg Tv.Pharm",
        description: "Hộp 3 vỉ x 10 viên"
    },
    {
        title: "Vaspycar Trimetazidine 20mg Pymepharco (H60v)",
        price: '27300',
        image01: product_03_image_01,
        categorySlug: "Thuốc 1",
        producer: "Công ti 1",
        slug: "thuoc-Vaspycar Trimetazidine",
        description: "Chai 60 Viên"
    },
    {
        title: "Apitim Amlodipin 5mg Dhg (H/30v)",
        price: '18500',
        image01: product_04_image_01,
        categorySlug: "Thuốc 1",
        producer: "Công ti 2",
        slug: "thuoc-Apitim Amlodipin",
        description: "Hộp 2 Vỉ X 30 Viên"
    },
    {
        title: "Dạ Hương Tím Hoa Linh (C/100ml)",
        price: '25100',
        image01: product_05_image_01,
        categorySlug: "Thuốc 1",
        producer: "Công ti 2",
        slug: "da-huong-tim-hoa-linh",
        description: "Chai 100ml"
    },
    {
        title: "Glotadol 500mg Abbott (Hộp/100viên Nén)(Hồng)",
        price: '34300',
        image01: product_06_image_01,
        categorySlug: "Thuốc 2",
        producer: "Công ti 2",
        slug: "thuoc-Glotadol",
        description: "Hộp 10 Vỉ X 10 Viên Nén"
    },
    {
        title: "Dung Dịch Vệ Sinh Phụ Nữ Dạ Hương Xanh (C/120ml)",
        price: '31800',
        image01: product_07_image_01,
        categorySlug: "Thuốc 2",
        producer: "Công ti 3",
        slug: "dung-dich-vs-xanh",
        description: "Chai 120ml"
    },
    {
        title: "Dung Dịch Vệ Sinh Phụ Nữ Dạ Hương Tím (C/120ml)",
        price: '31800',
        image01: product_08_image_01,
        categorySlug: "Thuốc 2",
        producer: "Công ti 3",
        slug: "dung-dich-vs-tim",
        description: "Chai 120ml"
    },
    {
        title: "Dạ Hương Trà Xanh Hoa Linh (C/100ml)(Xanh Lá)",
        price: '26600',
        image01: product_09_image_01,
        categorySlug: "Thuốc 2",
        producer: "Công ti 3",
        slug: "da-huong-tra-xanh",
        description: "Chai 100ml"
    },
    {
        title: "Cataflam 50mg Novartis (H/10v)",
        price: '46990',
        image01: product_10_image_01,
        categorySlug: "Thuốc 3",
        producer: "Công ti 4",
        slug: "thuoc-Cataflam",
        description: "Hộp 1 Vỉ X 10 Viên"
    },
    {
        title: "Dinalvic Pharimexco (H/20v)",
        price: '22500',
        image01: product_11_image_01,
        categorySlug: "Thuốc 3",
        producer: "Công ti 4",
        slug: "thuoc-Dinalvic Pharimexco",
        description: "Hộp 2 Vỉ X 10 Viên"
    },
    {
        title: "Xịt Mũi Xypenat Merap (C/30ml)",
        price: '24200',
        image01: product_12_image_01,
        categorySlug: "Thuốc 3",
        producer: "Công ti 4",
        slug: "thuoc-xitmui",
        description: "Chai 30ml"
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