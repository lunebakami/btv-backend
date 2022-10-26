import { Field, ObjectType, InputType } from 'type-graphql';
import { User } from '@prisma/client';
@ObjectType()
export class UserSchema implements User {
  @Field()
  id!: string;

  @Field()
  name!: string;

  @Field()
  email!: string;
}

@InputType()
export class UserInput implements Pick<UserSchema, 'name' | 'email'> {
  @Field()
  name!: string;

  @Field()
  email!: string;
}
