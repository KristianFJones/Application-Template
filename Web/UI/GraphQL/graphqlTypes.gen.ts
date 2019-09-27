export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AuthResponse = {
   __typename?: 'AuthResponse',
  token: Scalars['String'],
  currentUser: CurrentUser,
};

export type Configuration = {
   __typename?: 'Configuration',
  id: Scalars['ID'],
};

export type CreateUtilityInput = {
  name: Scalars['String'],
};

export type CurrentUser = {
   __typename?: 'CurrentUser',
  id: Scalars['ID'],
  username: Scalars['String'],
  email: Scalars['String'],
  roles: Array<UserRole>,
};

export type InitialConfigurationInput = {
  initialUser: UserInput,
};

export type LoginInput = {
  username: Scalars['String'],
  password: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  login: AuthResponse,
  register: RegisterResponse,
  resetPasswordReset: Scalars['Boolean'],
  initialConfiguration: Configuration,
  createUtility: Utility,
};


export type MutationLoginArgs = {
  input: LoginInput
};


export type MutationRegisterArgs = {
  input: RegisterInput
};


export type MutationResetPasswordResetArgs = {
  input: RequestPasswordResetInput
};


export type MutationInitialConfigurationArgs = {
  input: InitialConfigurationInput
};


export type MutationCreateUtilityArgs = {
  input: CreateUtilityInput
};

export type Query = {
   __typename?: 'Query',
  currentUser: User,
  hasSetup: Scalars['Boolean'],
  users: Array<User>,
  utilities: Array<Utility>,
};

export type RegisterInput = {
  username: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
};

export type RegisterResponse = {
   __typename?: 'RegisterResponse',
  success: Scalars['Boolean'],
  token: Scalars['String'],
  currentUser: CurrentUser,
};

export type RequestPasswordResetInput = {
  email: Scalars['String'],
};

export type ResetPasswordInput = {
  token: Scalars['String'],
  password: Scalars['String'],
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  username: Scalars['String'],
};

export type UserInput = {
  username: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
};

export enum UserRole {
  Guest = 'GUEST',
  User = 'USER',
  Admin = 'ADMIN'
}

export type Utility = {
   __typename?: 'Utility',
  id: Scalars['ID'],
  name: Scalars['String'],
};
export type LoginMutationVariables = {
  input: LoginInput
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthResponse' }
    & Pick<AuthResponse, 'token'>
    & { currentUser: (
      { __typename?: 'CurrentUser' }
      & Pick<CurrentUser, 'id' | 'roles'>
    ) }
  ) }
);
