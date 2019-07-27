export interface INode {
  key: any; // key
  c: 0 | 1; // '0-RED' | '1-BLACK';
  p: INode; // parent node
  l: INode; // left child
  r: INode; // right child
}

export interface ITree {
  root: INode;
}

export const NIL: INode = {
  key: null,
  c: 1,
  // @ts-ignore
  p: null,
  // @ts-ignore
  l: null,
  // @ts-ignore
  r: null,
};

export const minimum = (tree: INode) => {
  let x = tree;
  let depth = 0;
  while (x !== NIL && x.l !== NIL) {
    depth ++;
    x = x.l;
  }
  console.info('find minimum with depth:' + depth);
  return x;
};

export const maximum = (tree: INode) => {
  let x = tree;
  let depth = 0;
  while (x !== NIL && x.r !== NIL) {
    depth ++;
    x = x.r;
  }
  console.info('find maximum with depth:' + depth);
  return x;
};

export const search = (tree: ITree, key: any) => {
  let x = tree.root;
  let depth = 0;
  while (x !== NIL && x.key !== key) {
    x = x.key > key ? x.l : x.r;
    depth++;
  }
  console.info('search find node at depth:' + depth);
  return x;
};

import { insert, insertKey } from './insert';
import { deleteNode } from './delete';

export { insert, insertKey, deleteNode };
