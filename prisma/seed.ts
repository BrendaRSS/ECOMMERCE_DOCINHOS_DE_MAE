import prisma from '../src/config/database';

async function main() {
    let statePB = await prisma.states.create({
        data: {
            name: 'Paraíba - PB',
        },
    });

  let citiesAC = await prisma.cities.createMany({
    data: [
      {
        name: 'Conde',
        stateId: statePB.id,
      },
      {
        name: 'João Pessoa',
        stateId: statePB.id,
      },
      {
        name: 'Lucena',
        stateId: statePB.id,
      },
      {
        name: 'Santa Rita',
        stateId: statePB.id,
      },
    ],
  });

  await prisma.ecommerce.create({
    data:{
        name: "Docinhos de Mãe",
        since: "2015",
    }
  });

  const categoryTraditional = await prisma.fillingCategory.create({
    data:{
        name: "Tradicionais"
    }
  });

  const categorySpecial = await prisma.fillingCategory.create({
    data: {
      name: 'Especiais',
    },
  });

  const categoryGourmet = await prisma.fillingCategory.create({
    data: {
      name: 'Gourmet',
    },
  });

  await prisma.cakeFilling.createMany({
    data: [
      {
        type: 'Chocollate',
        categoryId: categoryTraditional.id,
        value: 75,
      },
      {
        type: 'Ninho',
        categoryId: categoryTraditional.id,
        value: 75,
      },
      {
        type: 'Beijinho',
        categoryId: categoryTraditional.id,
        value: 75,
      },
      {
        type: 'Maracujá',
        categoryId: categorySpecial.id,
        value: 80,
      },
      {
        type: 'Ninho com óreo',
        categoryId: categorySpecial.id,
        value: 80,
      },
      {
        type: 'Doce de leite',
        categoryId: categorySpecial.id,
        value: 80,
      },
      {
        type: 'Ninho com morango',
        categoryId: categoryGourmet.id,
        value: 85,
      },
      {
        type: 'Ninho com nutela',
        categoryId: categoryGourmet.id,
        value: 85,
      },
      {
        type: 'Chocolate com morango',
        categoryId: categoryGourmet.id,
        value: 85,
      },
    ],
  });

  await prisma.cakeDough.createMany({
    data: [
        {
            type: "Chocolate",
            value: 0,
        },
        {
            type: "Branca",
            value: 0,
        },
        {
            type: "Mista",
            value: 0,
        }
    ]
  });

  await prisma.sizes.createMany({
    data: [
        {
            kg: 1,
        },
        {
            kg: 15,
        },
        {
            kg: 20,
        },
        {
            kg: 25,
        },
        {
            kg: 30,
        },
        {
            kg: 35,
        },
        {
            kg: 40,
        },
        {
            kg: 45,
        },
        {
            kg: 50,
        },
        {
            kg: 55,
        },
        {
            kg: 60,
        },
        {
            kg: 65,
        },
        {
            kg: 70,
        },
        {
            kg: 75,
        },
        {
            kg: 80,
        },
        {
            kg: 85,
        },
        {
            kg: 90,
        },
        {
            kg: 95,
        },
        {
            kg: 10,
        },
        {
            kg: 105,
        },
        {
            kg: 110,
        },
        {
            kg: 115,
        },
        {
            kg: 120,
        }
    ]
  });

  
}

main()
  .then(() => console.log('Registros feitos com sucesso!'))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
