let user = {
  name: "urvish",
  age: 26,
  city: "surat",
  1: "red",
};

// let keyName = "name"
// console.log("🚀 ~ user.keyName:", user[keyName])

for (const key in user) {
  console.log("🚀 ~ key:", key, user[key]);
}
