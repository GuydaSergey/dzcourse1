const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
 } = require('graphql');

 const LaunchType = new GraphQLObjectType({
    name:"Launch",
    fields:()=>(
        {
            flight_number: { 
                type: GraphQLInt 
            },
            mission_name: { 
                type: GraphQLString
            },
            launch_year: {
                 type: GraphQLString
            },
            launch_success: {
                 type: GraphQLBoolean
            },
            rocket: {
                type: RocketType
            },
            links: {
                type: LinkType
            }
        })

 })

 const RocketType = new GraphQLObjectType({
    name:"Rocket",
    fields:()=>(
        {
            rocket_id: { 
                type: GraphQLString 
            },
            rocket_name: { 
                type: GraphQLString
            },
            rocket_type: {
                 type: GraphQLString
                },
            launch_success: {
                 type: GraphQLBoolean
                }
        })

 })

 const LinkType = new GraphQLObjectType({
    name:"Links",
    fields:()=>(
        {
            mission_patch: { 
                type: GraphQLString 
            },
            video_link: { 
                type: GraphQLString
            },
            article_link: {
                 type: GraphQLString
                }
        })

 })

 const MeteorType = new GraphQLObjectType({
    name:"Meteor",
    fields:()=>(
        {
            name: { 
                type: GraphQLString 
            },
            nametype: { 
                type: GraphQLString
            },
            recclass: {
                 type: GraphQLString
                },
            year: {
                type: GraphQLString
            },
            mass: {
                type: GraphQLString
            },
            id: {
                type: GraphQLString
            },
        })

 })

 const RootQuery = new GraphQLObjectType({
     name: "RootQueryType",
     fields: {
         launches: {
             type: new GraphQLList(LaunchType),
             resolve(parent, args){
                 return axios
                 .get('https://api.spacexdata.com/v3/launches')
                 .then(res=>res.data);
             }
         },
         Meteores: {
             type: new GraphQLList(MeteorType),
             resolve(parent, args){
                return axios
                .get('https://data.nasa.gov/resource/gh4g-9sfh.json')
                .then(res=>res.data);
            }
         }                
     }
 })

 module.exports = new GraphQLSchema ({
     query: RootQuery
 })