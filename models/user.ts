import prisma from "../lib/prisma";

export async function getUserInfo(email: string) {
    const result = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    return {
        id: result.id,
        name: result.name,
        email: result.email,
        image: result.image,
        credits: result.credits,
    };
}

export async function getUserInfoById(userId: string) {
    const result = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });

    return {
        id: result.id,
        name: result.name,
        email: result.email,
        image: result.image,
        credits: result.credits,
    };
}

export async function updateUserInfo(email: string, data: any) {
    try {
        const result = await prisma.user.update({
            where: {
                email,
            },
            data,
        });
        return result;
    } catch (error) {
        console.error("updateUserInfo error", error);
    }

    // return result
}

export async function updateUserInfoById(userId: string, data: any) {
    try {
        const result = await prisma.user.update({
            where: {
                id: userId,
            },
            data,
        });
        return result;
    } catch (error) {
        console.error("updateUserInfoById error", error);
    }

    // return result
}
