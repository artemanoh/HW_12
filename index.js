// Task 1
const user = {
    name: 'Artem',
    age: 16,
    hobby: 'singing',
    premium: true
};

user.mood = 'very-happy';
user.hobby = 'dancing';

user.premium = false;

for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}
// Task 2
function countProps(obj) {
    return Object.keys(obj).length;
}

const userPropsCount = countProps(user);
console.log(`Кількість властивостей: ${userPropsCount}`);
// Task 3
