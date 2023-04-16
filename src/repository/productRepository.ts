import prisma from "../config/database";
import { Product } from "../protocols";

async function createProduct(body: Product) {
    let imageURL = `/src/images/${body.image}`;

    return await prisma.products.create({
        data:{
            name: body.name,
            cakeDoughtId: body.cakeDoughtId,
            cakeFillingId: body.cakeFillingId,
            sizeId: body.sizeId,
            price: body.price,
            description: body.description,
            image: imageURL,
        }
    });
}

async function findAllProducts(){
    return await prisma.products.findMany({
      include: {
        size: true,
        filling: {
            select:{
                type: true,
                category: true
            }
        },
        dough: true
      },
    });
}

async function findAllCategories(){
    return await prisma.fillingCategory.findMany();
}

async function findAllFillings(){
    return await prisma.cakeFilling.findMany({
        include:{
            category: true,
        }
    })
}

async function findAllDough(){
    return await prisma.cakeDough.findMany();
}

async function findAllDecorationsCategories(){
    return await prisma.categoryDecoration.findMany();
}

async function findAllDecorations(){
    return await prisma.decorations.findMany({
        include:{
            category: true
        }
    });
}

const productRepository = {
  createProduct,
  findAllProducts,
  findAllCategories,
  findAllFillings,
  findAllDough,
  findAllDecorationsCategories,
  findAllDecorations,
};

export default productRepository;