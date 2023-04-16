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

async function findAllFillings(){
  const response = await productRepository.findAllFillings();
  if(!response){
    throw badRequestError();
  }

  let fillings = response.map((r) => ({
    id: r.id,
    type: r.type,
    category: r.category.name,
    value: 75
  }))

  return fillings;
}

async function findAllDough(){
  const cakeDough = await productRepository.findAllDough();
  if(!cakeDough){
    throw badRequestError();
  }

  return cakeDough;
}

async function findAllDecorationsCategories(){
  const categories = await productRepository.findAllDecorationsCategories();
  if(!categories){
    throw badRequestError();
  }

  return categories;
}

async function findAllDecorations(){
  const response = await productRepository.findAllDecorations();
  if (!response) {
    throw badRequestError();
  }

  let decorations = response.map((d) => ({
    id: d.id,
    name: d.name,
    value: d.value,
    category: d.category.name,
  }))

  return decorations;
}

const productService = {
  createProduct,
  findAllProducts,
  findAllCategories,
  findAllFillings,
  findAllDough,
  findAllDecorationsCategories,
  findAllDecorations,
};

export default productService;

