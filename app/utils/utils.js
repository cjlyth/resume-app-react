import type { LinkRelation } from '../../lib/types';


const getLinkRelation = (links: Array<LinkRelation> = [], linkRel:string) => {
  const link = links.find(l => l.rel === linkRel);
  return link ? link.href : undefined;
};

const utils = {
  getLinkRelation,
};

export default utils;
