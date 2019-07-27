import { insertKey, ITree, NIL } from '../index';

const tree: ITree = {
  root: {
    p: NIL,
    c: 1,
    l: NIL,
    r: NIL,
    key: Number.MAX_SAFE_INTEGER,
  },
};
const start = Date.now();
const testIndexNumber = 100000000;
console.info(`🚀👇🏻 Start build tree with ${testIndexNumber} nodes ...`);
for (let i = testIndexNumber; i > 0 ; i --) {
  insertKey(tree, i);
}
const end = Date.now();
console.info(`✅🎊 Finished build tree in [${end - start}] milliseconds.`);
// @ts-ignore
console.info(`Memory Usage: ${JSON.stringify(process.memoryUsage())}`);
