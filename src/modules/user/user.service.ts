import { User, PrismaClient, Profile } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({ data: data });
  return result;
};

const getAllUsers = async () => {
  const result = await prisma.user.findMany({
    // select: {
    //   name: true,
    //   email: true,
    //   profile: true,
    // }
    include: {
      profile: true,
    },
  });
  return result;
};

const getSingleUser = async (id: number): Promise<User | null> => {
  const result = await prisma.user.findUnique({ where: { id } });
  return result;
};

const createOrUpdateProfile = async (data: Profile): Promise<Profile> => {
  const isExist = await prisma.profile.findUnique({
    where: { userId: data.userId },
  });
  if (isExist) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },
    });

    return result;
  }

  const result = await prisma.profile.create({ data });
  return result;
};

export const UserService = {
  createUser,
  getAllUsers,
  getSingleUser,
  createOrUpdateProfile,
};
