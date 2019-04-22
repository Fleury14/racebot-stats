// takes in array of users

const GetCookieLeaders = (users) => {
  users.sort((user1, user2) => {
    return user2.cookies - user1.cookies
  });
  return users.length > 20 ? users.slice(0, 20) : users;
}

export default GetCookieLeaders;
