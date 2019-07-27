import { INode, ITree, NIL, minimum } from './';
import { lRotate, rRotate } from './rotate';

const transplant = (tree: ITree, u: INode, v: INode) => {
  if (u.p === NIL) {
    tree.root = v;
  } else if (u === u.p.l) {
    u.p.l = v;
  } else {
    u.p.r = v;
  }
  v.p = u.p;
};
export const deleteNode = (tree: ITree, z: INode) => {
  if (z === NIL || tree.root === NIL) {
    return;
  }
  let y = z;
  let yOriginalColor = y.c;
  let x;
  if (z.l === NIL) {
    x = z.r;
    transplant(tree, z, z.r);
  } else if (z.r === NIL) {
    x = z.l;
    transplant(tree, z, z.l);
  } else {
    y = minimum(z.r);
    yOriginalColor = y.c;
    x = y.r;
    if (y.p === z) {
      x.p = y;
    } else {
      transplant(tree, y, y.r);
      y.r = z.r;
      y.r.p = y;
    }
    transplant(tree, z, y);
    y.l = z.l;
    y.l.p = y;
    y.c = z.c;
  }
  if (yOriginalColor === 1) {
    deleteFixUp(tree, x);
  }
};

const deleteFixUp = (tree: ITree, x: INode) => {
  while (x !== tree.root && x.c === 1) {
    if (x === x.p.l) {
      let w = x.p.r;
      // Case 1
      if (w.c === 0) {
        w.c = 1;
        x.p.c = 0;
        lRotate(tree, x.p);
        w = w.p.r;
      }
      // Case 2
      if (w.l.c === 1 && w.r.c === 1) {
        w.c = 0;
        x = x.p;
      } else {
        // Case 3
        if (w.r.c === 1) {
          w.l.c = 1;
          w.c = 0;
          rRotate(tree, w);
          w = x.p.r;
        }
        // Case 4
        w.c = x.p.c;
        x.p.c = 1;
        w.r.c = 1;
        lRotate(tree, x.p);
        x = tree.root;
      }
    } else {
      let w = x.p.l;
      if (w.c === 0) {
        w.c = 1;
        x.p.c = 0;
        rRotate(tree, x.p);
        w = w.p.l;
      }
      if (w.l.c === 1 && w.r.c === 1) {
        w.c = 0;
        x = x.p;
      } else {
        if (w.l.c === 1) {
          w.r.c = 1;
          w.c = 0;
          lRotate(tree, w);
          w = x.p.l;
        }
        w.c = x.p.c;
        x.p.c = 1;
        w.l.c = 1;
        rRotate(tree, x.p);
        x = tree.root;
      }
    }
  }
  x.c = 1;
};
