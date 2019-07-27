import { INode, ITree, NIL } from './';

export const lRotate = (tree: ITree, x: INode) => {
  if (x === NIL) {
    console.info('Nothing happen if try to left rotate a NIL node');
    return;
  }
  if (x.r === NIL) {
    console.info('Nothing happen if try to left rotate a node whose right child is NIL');
    return;
  }
  const y = x.r;
  x.r = y.l;
  if (y.l !== NIL) {
    y.l.p = x;
  }
  y.p = x.p;
  if (x.p === NIL) {
    tree.root = y;
  } else if (x === x.p.l) {
    x.p.l = y;
  } else {
    x.p.r = y;
  }
  y.l = x;
  x.p = y;
};

export const rRotate = (tree: ITree, y: INode) => {
  if (y === NIL) {
    console.info('Nothing happen if try to right rotate a NIL node');
    return;
  }
  if (y.l === NIL) {
    console.info('Nothing happen if try to right rotate a node whose left child is NIL');
    return;
  }
  const x = y.l;
  y.l = x.r;
  if (x.r !== NIL) {
    x.r.p = y;
  }
  x.p = y.p;
  if (y.p === NIL) {
    tree.root = x;
  } else if (y === y.p.l) {
    y.p.l = x;
  } else {
    y.p.r = x;
  }
  x.r = y;
  y.p = x;
};
