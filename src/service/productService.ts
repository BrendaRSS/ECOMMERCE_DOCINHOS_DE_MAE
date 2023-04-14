import badRequestError from "../errors/badRequestError";
import { Product } from "../protocols";
import productRepository from "../repository/productRepository";

async function createProduct(body: Product){
    const product = await productRepository.createProduct(body);
    if(!product){
        throw badRequestError();
    }

    return product;
}

async function findAllProducts(){
  const response = await productRepository.findAllProducts();
  if (!response) {
    throw badRequestError();
  }

  const products = response.map((p) => ({
    id: p.id,
    name: p.name,
    category: p.filling.category.name,
    cakeFilling: p.filling.type,
    cakeDough: p.dough.type,
    size: p.size.kg,
    price: p.price,
    description: p.description,
    image: p.image,
  }));

  return products;
}

async function findAllCategories(){
  const categories = await productRepository.findAllCategories();
  if(!categories){
    throw badRequestError();
  }

  return categories;
}

const productService = {
  createProduct,
  findAllProducts,
  findAllCategories,
};

export default productService;

