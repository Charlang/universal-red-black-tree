import { INode, ITree, NIL } from './';
import { lRotate, rRotate } from './rotate';

export const insertKey = (tree: ITree, key: any) => {
  const z: INode = {
    key,
    p: NIL,
    c: 0,
    l: NIL,
    r: NIL,
  };
  insert(tree, z);
};

export const insert = (tree: ITree, z: INode) => {
  let y = NIL;
  let x = tree.root;
  while (x !== NIL) {
    y = x;
    // TODO: Implement compare function
    x = (z.key < x.key) ? x.l : x.r;
  }
  z.p = y;
  if (y === NIL) {
    tree.root = z;
  } else if (z.key < y.key) {
    y.l = z;
  } else {
    y.r = z;
  }
  z.l = z.r = NIL;
  z.c = 0;
  insertFixUp(tree, z);
};

const insertFixUp = (tree: ITree, z: INode) => {
  while (z.p.c === 0) {
    if (z.p === z.p.p.l) {
      const y = z.p.p.r;
      if (y.c === 0) {
        z.p.c = y.c = 1;
        z.p.p.c = 0;
        z = z.p.p;
      } else {
        if (z === z.p.r) {
          z = z.p;
          lRotate(tree, z);
        }
        z.p.c = 1;
        z.p.p.c = 0;
        rRotate(tree, z.p.p);
      }
    } else if (z.p === z.p.p.r) {
      const y = z.p.p.l;
      if (y.c === 0) {
        z.p.c = y.c = 1;
        z.p.p.c = 0;
        z = z.p.p;
      } else {
        if (z === z.p.l) {
          z = z.p;
          rRotate(tree, z);
        }
        z.p.c = 1;
        z.p.p.c = 0;
        lRotate(tree, z.p.p);
      }
    }
  }
  tree.root.c = 1;
};
