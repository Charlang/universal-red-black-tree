import { insert, ITree, NIL } from '../index';

const tree: ITree = {
  root: {
    parent: NIL,
    color: 'BLACK',
    left: NIL,
    right: NIL,
    key: Number.MAX_SAFE_INTEGER,
  },
};
const start = Date.now();
const testIndexNumber = 100000000;
console.info(`🚀👇🏻 Start build tree with ${testIndexNumber} nodes ...`);
for (let i = testIndexNumber; i > 0 ; i --) {
  insert(tree, { key: i, parent: NIL, color: 'RED', left: NIL, right: NIL });
}
const end = Date.now();
console.info(`✅🎊 Finished build tree in [${end - start}] milliseconds.`);
// @ts-ignore
console.info(`Memory Usage: ${JSON.stringify(process.memoryUsage())}`);
