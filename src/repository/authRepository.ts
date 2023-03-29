import prisma from "../config/database";
import { Bodyuser } from "../protocols"; 

async function signUpUser(body: Bodyuser) {
    return await prisma.users.create({
        data: {
            name: body.name,
            birthday: body.birthday,
            email: body.email,
            password: body.password
        },
    });
}

async function findUserByEmail(email: string) {
    return await prisma.users.findFirst({
        where: {
            email: email
        }
    })
}


const authRepository = {
  signUpUser,
  findUserByEmail,
};

export default authRepository;