import prisma from "../config/database";

async function createSession(token: string, userId: number) {
    return await prisma.session.create({
        data: {
            userId: userId,
            token: token
        }
    })
};

const sessionRepository = {
  createSession,
};

export default sessionRepository;