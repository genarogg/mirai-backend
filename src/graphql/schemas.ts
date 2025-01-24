import { mergeTypeDefs } from '@graphql-tools/merge';

import demoTypeDefs from './demo/schema'
import userTypeDefs from './user/schema'

const typeDefs = mergeTypeDefs([demoTypeDefs, userTypeDefs]);

export default typeDefs;