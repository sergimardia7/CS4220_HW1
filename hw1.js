//Problem 1 (SwapKeyValues)
const swapKeyValues = (value) => {
    const ret = {};
    Object.keys(value).forEach((key) => {
        ret[value[key]] = key;
    });
    return ret;
};

const swapped = swapKeyValues({
    scooby: 'dog',
    garfield: 'cat',
    daffy: 'duck',
    bugs: 'bunny'
});

console.log(swapped);

//Problem 2 (mapLetters)

function mapLetters(letters) {
    const letterMap = [];

    letters.forEach((letter) => {
        letterMap[letter.toLowerCase()] = letter.toUpperCase();
    });

    return Object.entries(letterMap)
        .sort(([a], [b]) => a.localeCompare(b))
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
}

const mapped = mapLetters(['X', 'a', 'b', 'y', 'z', 'C']);

console.log(mapped);

//Problem 3 (convertFollowers)

function convertFollowers(users) {
    return users.map((user) => {
        const followers = user['followers'];
        if (typeof followers === 'string' && followers.endsWith('k')) {
            user['followers'] = parseInt(followers) * 1000;
        } else {
            user['followers'] = Number(followers);
        }

        return user;
    });
}

const converted = convertFollowers([
    { name: 'Harley Quinn', followers: '97.1k' },
    { name: 'Green Lantern', followers: '999' },
    { name: 'Poison Ivy', followers: '21.7k' },
    { name: 'Robin', followers: '11.1k' }
]);

console.log(converted);

//Problem 4 (longestCommonPrefix)

function longestCommonPrefix(prefixes){
    let i = 0;
    if(!prefixes[0] || prefixes.length == 1){
        return '';
    }
    while(prefixes[0][i] && prefixes.every(p => p[i] === prefixes[0][i])){
        i++;
    }

    return prefixes[0].substr(0, i);
}

const longest1 = longestCommonPrefix(['flow', 'floof', 'flower']);

console.log(longest1);
// output: 'flo'

const longest2 = longestCommonPrefix(['dog', 'racecar', 'car']);

console.log(longest2);
// output: ''

//Problem 5 (capitalize) and (transformWords)
const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1);
};
function capitalizeWords(words, capitalize){
    return words.map(word => capitalize(word));
}

const words = ['apple', 'banana', 'pineapple', 'orange', 'peach', 'pear', 'plum'];
const capitalized = capitalizeWords(words, capitalize);

console.log(capitalized);
// output: [ 'Apple', 'Banana', 'Pineapple', 'Orange', 'Peach', 'Pear', 'Plum' ]