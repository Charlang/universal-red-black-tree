export interface INode {
  key: any;
  color: 'RED' | 'BLACK';
  parent: INode;
  left: INode;
  right: INode;
}

export interface ITree {
  root: INode;
}

export const NIL: INode = {
  key: null,
  color: 'BLACK',
  // @ts-ignore
  parent: null,
  // @ts-ignore
  left: null,
  // @ts-ignore
  right: null,
};

export const minimum = (tree: INode) => {
  let x: any = tree;
  let depth = 0;
  while (x !== NIL && x.left !== NIL) {
    depth ++;
    x = x.left;
  }
  console.info('minimum depth:' + depth);
  return x;
};

export const maximum = (tree: INode) => {
  let x: any = tree;
  let depth = 0;
  while (x !== NIL && x.right !== NIL) {
    depth ++;
    x = x.right;
  }
  console.info('maximum depth:' + depth);
  return x;
};

export const search = (tree: ITree, key: any) => {
  let x: any = tree.root;
  let depth = 0;
  while (x !== NIL && x.key !== key) {
    x = x.key > key ? x.left : x.right;
    depth++;
  }
  console.info('search depth:' + depth);
  return x;
};

import { insert, insertKey } from './insert';
import { deleteNode } from './delete';

export { deleteNode, insert, insertKey };
