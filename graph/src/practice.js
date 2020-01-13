const {graphql,bulidSchema}=require('graphql');

const sechema=buildSchema(`
type Query{
  hell:String
}
`);
const root={hello:()=>'Hello world'};

graphql(schema, `{hello}`,root).then((response)=>{
  console.log(response);
})
const express=require('express');
const bodyParse=require('body-parser');
const {graphqlExpress,graphiqlExpress}=require('apollo-server-express');
const {makeExecutableSchema}=require('graphql-tools');

const typeDef=[`

type Query{
  hello:String
}
schema{
  query:Query
}
`
];
const resolvers={
    Query:{
      hello(root){
        return 'wolrd';
      }
    }
};
const schema=makeExecutableSchema({typeDef,resolvers});
const app=express();
app.use('/graphql',bodyParse.json(),graphqlExpress({schema}));
app.use('/graphql',graphiqlExpress({endpointURL:'/graphql'}));
app.listen(4000,()=>console.log('Now browse to localhost:4000/graphiql'));

  
type Query{
  me:User
}
type User{
  id:ID
  name:String
}
function Query-me(request){
  return request.auth.user

}
function User-name(user){
  return user.getName();
}
type Query{
  me:user
}
type User{
  id:ID
  name:String
}
function Query_me(request){
  return request.auth.user
}
function User_name(user){
  return user.getName();
}
{
  hero{
    name
  }
}

{
  "data":{
    "hero":{
      "name":"R2 - D2";
    }
  }
}

{
  hero{
    name
    friends{
      name
    }
  }
}
{
  "data":{
    "hero":{
      "name":
      friensd:[

      ]
    }
  }
}

query HeroNameAndFriend($episode:Episode){
  hero(episode:$episode){
    name
    friendss{
      name
    }
  }
}
query HeroNameAndFriend($episode:Episode ='JEDI'){
  hero(episode :$episode){
    namefriends{
      name
    }
  }
}
query Hero($episode :Episode,$wothFriends Boolean!){
  hero(episode:$episode){
    name
    friends @include(if:$withFriends){
      name
    }
  }
}
"episode":'JEDI',
"withFriends";true

mutation CreateReviewForEpisode($ep:Episode!,$review:Review!){
  createReview(episode:$ep,revire:$review){
    star
    commentary
  }
}
imput ReviewInput{
  stars:Int!
  commentary:String
}
mutation CreateReviewForEpisode($ep:$Episode,$review:ReviewInput){
  cretaeReview(episode:$ep,review:$review){
    stars
    commentary
  }
}

 type Query{
   human(id:ID):human
  }
  type Human{
    name:String
    apearsIn:[Episode]
    starShips:[StarShip]

  }
  enum Episode{
    NEWHOPE
    EMPIRE
    JEDI
  }
  type StarShip{
    name:String
  }
  {
    human(id:1002){
      name
      apearIns
      starShip{
        name
      }
    }
  }
  Query:{
    human(obj,args,context){
    return context.db.loadHumanById(args.id).then(
      userData=>new Huan(userData);
    )
    obj,args,context,InputDeviceInfo
    }
  }
  human(obj,args,context){
    return context.db,loadHumanById(args.id).then(
      useData=>new Human(userData);
    )
  }
  Human:{
  name(obj,args,context){
    return obj.name
  }
  }

  Human:{
    apearsIn(obj){
      return obj.appearsIn
    }
  }
  Human:{
    startShips(obj.args,context){
      return obj.starShipId(id).then(
        shipData=>new StarShip(shipData);
      )
    }
  }

  {
    __schema{
      types{
        name
      }
    }
  }
__dirname(스키마ㅣ 확인 시스템의 일부이다.)

import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient, HttpLink} from 'apollo-boost';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { functionTypeAnnotation } from '@babel/types';

const cache=new InMemoryCache();
const GITHUB_BASE_URL=`https://api.github.com/graphql`;
// const httpLink=new HttpLink({
//   uri:GITHUB_BASE_URL,
//   headers:{
//     authoraization:`Bearer ${process.env.REACT_APP_GUHUB_API_KEY}`;
//   },cache
// });
const client=new ApolloClient({
  uri:GITHUB_BASE_URL,
  request:operation=>{
    operation.setContext({
      headers:{
        authoraization:`Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`;
      }
    })
  },cache
})

function App(){
  reutrn (
    <ApolloProvider client={client}>
      <div >
      </div>
    </ApolloProvider>
  )
}
import {gql} from 'graphql-tag';
const reposQuery=gql`
query Myrepositories{
  viewer{
    repositories(first:5){
      edges{
        node{
          id
          name
          stargazers{
            totlaCount
          }
          viewerHasStarred
        }
      }
    }
  }
}
`;
const usersQuery=gql`
viewer{
  name
  email
}
`;
export {reposQuery,usersQuery};

import {gql} from 'graphql-tag';

const ADD_STAR=gql`
mutation AddStar($repoid:ID!){
  addStar(input:{starrableId:$repoid}){
    starrable{
      stargazers{
        totalCount
      }
      viewerHasStarred
    }
  }
}
`;
const Remove_Star=gql`
mutation RemoveStar($repoid:ID){
  removeStar(input:{starrableId:$repoid}){
    starrable{
      stargazers{
        totalCount
      }
      viewerHasStarred
    }
  }
}
`;
export {ADD_STAR,Remove_Star}

import React from 'react';
import {useMutation} from '@appollo/react';
import {ADD_STAR} from './mutation';

const AddStar=({id})=>{
  const [addStar,{loading,error}]=useMutation(ADD_STAR);
  return (
    <div>
      <button
      onClick={()=>{
        addStar({
          variables:{
            repoid:id
          }
        })
      }}>
        {loading && <>loading</>}
        {error && <p>error.meassgae</p>}
      </button>
    </div>
  )
}

