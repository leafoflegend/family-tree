### Family Tree
<hr />

Trees are such an important structure in computer science. But what more important tree, than our family tree? ❤️ 👨‍👩‍👧‍👦 ❤️

For this weekend assignment, you will have to build a tree that has multiple children. It will have a few methods:

`familySize`: Returns this size of **this parent and their children.**

`findMember`: Given a `name`, it will return the `node` where that member exists. Otherwise, returns undefined.

`log`: Logs out a specific structure (exampled below) of the family from this point down.

`insert`: Inserts a child at this node.
 <hr />
 
 I've been kind enough to have written a suite of tests to help you get there. **But I am ok with you doing this outside of this repo, on your own, as long as the work you turn in on Monday can operate like the example below.**
 
```javascript 1.8
const szwajkowskis = new FamilyTree('Pops');

szwajkowskis.insert('Mike');
szwajkowskis.insert('Amy');
szwajkowskis.insert('Todd');

const mikesFamily = szwajkowskis.findMember('Mike');

mikesFamily.insert('Eliot');
mikesFamily.insert('Elise');
mikesFamily.insert('Cas');
mikesFamily.insert('George');
mikesFamily.insert('Lear');

const amysFamily = szwajkowskis.findMember('Amy');

amysFamily.insert('Henry');
amysFamily.insert('Vivian');

const log = szwajkowskis.log();
console.log(log);

// Logs:
/*
-- Pops
---- Mike
------ Eliot
------ Elise
------ Cas
------ George
------ Lear
---- Amy
------ Henry
------ Vivian
---- Todd
*/
```
<hr />

### Using This Repo

To use this repo, the following instructions should be followed.

1. Pull down this repo from github.
2. At the root level of this repo, run `npm i` to install all dependencies.
3. Write code in the adjacent file `family-tree.js`.
4. While writing that code, you can at any time run `npm run test` to see results of how you are doing against the tests in the terminal. If you want to see **live results** of how your code is doing, you can run `npm run test:watch`
5. When passing all tests push up to your own personal fork!

### Extra

If you're unimpressed by the difficulty of this assignment, I would ask that you make the family tree that you've designed in JS look like a family tree in HTML! Build a HTML file that renders the tree and allows you to add additional family members. You can watch the GIF below to see what I am talking about (ignore the setup I use in the GIF, just the webpage matters). 

![GIF of WA2](https://user-images.githubusercontent.com/12236649/55920129-a5832b80-5bc6-11e9-9d43-74aca3564991.gif) 

