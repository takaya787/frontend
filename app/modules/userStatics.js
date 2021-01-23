//StaticPathesでuserのIDを取得する
export async function getAllUserIDs() {
  let json = []
  // fetch と response.json 両方のエラーをキャッチ
  try {
    // const res = await fetch(`http://localhost:3000/api/users`);
    const res = await fetch('https://railsbackend2020.herokuapp.com/api/users');
    json = await res.json();
    // console.log(json);
  } catch (err) {
    console.log(err);
  }
  //pathに送ったpathは実際のurlと等しい必要がある
  let paths = [];
  await json.map(data => {
    let path = '/users/' + data.id.toString(10);
    paths.push(path);
  })
  return paths
}

// export async function getUserData(id) {

//   const res = await fetch(`${process.env.BASE_URL}/users/${id}`)
//   const json = await res.json()

//   return {
//     json
//   }
// }
