require("dotenv").config();

const {
  createUsersTable,
  insertUser,
  FetchgetAllUser,
  updateUserEmail,
} = require("./concepts/basic-queris");

//test basic queries

async function testBasicQueries() {
  try {
    // await createUsersTable();
    //insert users
    const result = await updateUserEmail("skybolt", "skybolt1@mail.com");
    console.log(result);
  } catch (error) {
    console.error(error, "error");
  }
}

async function testAllQueries() {
  await testBasicQueries();
}

testAllQueries();
