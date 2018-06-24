import type { LinkRelation } from '../../lib/types';
import { app } from '../../lib/config';


const getLinkRelation = (links: Array<LinkRelation> = [], linkRel:string) => {
  const link = links.find(l => l.rel === linkRel);
  return link ? link.href : undefined;
};

const linkGetter = links => (rel: string) => {
  const l = getLinkRelation(links, rel);
  return l.startsWith('http') ? l : `${app.resumeDataAPIUrl}/${l}`;
};

const utils = {
  getLinkRelation,
  linkGetter,
};

export default utils;
