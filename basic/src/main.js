require("dotenv").config();

const {
  createUsersTable,
  insertUser,
  FetchgetAllUser,
  updateUserEmail,
  deleteInfo,
} = require("./concepts/basic-queris");
const {
  getUserWhere,
  getSortedUsers,
  getPagintedUsers

} = require("./concepts/filtering-sorting")
const {
   createPostsTable,
   insertNewpost
} = require("./concepts/relationship")
const {
   getUsersWithPosts
}= require("./concepts/joins")
const {constPostsByUser,avgPost} = require("./concepts/agressgation")
//test basic queries



async function testBasicQueries() {
  try {
    // await createUsersTable();
    //insert users
    const result = await deleteInfo("skybolt");
    console.log(result);
  } catch (error) {
    console.error(error, "error");
  }
}

async function testFilterAndSortQueries() {
  try {
    //get user with a username whose username starting with z
      const result =await getPagintedUsers(4,1);
      console.log(result);
       ;
  } catch (error) {
    console.error(error);
    
  }



}

async function relationshipQueries() {
  try {
    //get user with a username whose username starting with z
      const result =await insertNewpost('firest post','this is my first post ','3');
      console.log(result);
       ;
  } catch (error) {
    console.error(error);
    
  }



}
async function joinQueries() {
  try {
    const result = await  getUsersWithPosts()
    console.log(result);
    
       
  } catch (error) {
    console.error(error);
    
  }



}

async function agregation() {
  try {
    
    const result = await constPostsByUser()
       console.log(result);
       
  } catch (error) {
    console.error(error);
    
  }



}

async function testAllQueries() {
  // await testBasicQueries();
  // await joinQueries();
await agregation();
}

testAllQueries();
