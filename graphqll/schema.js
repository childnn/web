const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql');

// 新建一个简单的查询, 查询名为 hello, 返回字段 hello world!
// 其他是定义名字和查询结果类型
const queryObj = new GraphQLObjectType({
    name: 'myFirstQuery',
    description: 'a hello world demo',
    fields: {
        hello: {
            name: 'a hello world query',
            description: 'a hello world demo',
            type: GraphQLString,
            resolve(parentValue, args, request) {
                return 'hello world !';
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: queryObj
});
