let obj = {
  username0: "Santa",
  username1: "Rudolf",
  username2: "Mr. Grinch",
};

// i want santa0, rudolf1, grinch2

// we get key and value via entries
// make each array --> user
// now we can transform user aka each array
// we target the array, access the 2nd value which is santa/grinch/rudolf
// plus we target 1st item which is username0/username1/username2
// replace the keyword username with an empty string
// which leaves us the number
// result: santa0, rudolf1,grinch2
Object.entries(obj).map((user) => {
  console.log(user[1] + user[0].replace("username", ""));
});
