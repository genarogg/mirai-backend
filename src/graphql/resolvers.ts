import demoResolvers from './demo/resolvers';
import userResolvers from './user/resolvers';

const resolvers = {
    ...demoResolvers,
    ...userResolvers
};

export default resolvers;