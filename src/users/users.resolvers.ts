import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import prisma from '../database';
import { UserInput, UserSchema } from './users.schema';

@Resolver(() => UserSchema)
export class UsersResolver {
  @Query(() => [UserSchema])
  async getUsers(): Promise<UserSchema[]> {
    const users = await prisma.user.findMany({});

    return users;
  }

  @Query(() => UserSchema)
  async getUser(@Arg('id') id: string): Promise<UserSchema | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  @Mutation(() => UserSchema)
  async createUser(@Arg('input') input: UserInput): Promise<UserSchema> {
    const user = await prisma.user.create({
      data: input,
    });

    return user;
  }

  @Mutation(() => UserSchema)
  async updateUser(
    @Arg('id') id: string,
    @Arg('input') input: UserInput
  ): Promise<UserSchema> {
    const updatedUser = await prisma.user.update({
      data: input,
      where: {
        id,
      },
    });

    return updatedUser;
  }

  @Mutation(() => UserSchema)
  async deleteUser(
    @Arg('id') id: string
  ): Promise<UserSchema> {
    const updatedUser = await prisma.user.delete({
      where: {
        id,
      },
    });

    return updatedUser;
  }
}
