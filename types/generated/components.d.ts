import type { Schema, Attribute } from '@strapi/strapi';

export interface PostInsight extends Schema.Component {
  collectionName: 'components_post_insights';
  info: {
    displayName: 'Insight';
    description: '';
  };
  attributes: {
    content: Attribute.RichText;
    Title: Attribute.String;
    author: Attribute.Relation<
      'post.insight',
      'oneToOne',
      'api::author.author'
    >;
    tags: Attribute.Relation<'post.insight', 'oneToMany', 'api::tag.tag'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'post.insight': PostInsight;
    }
  }
}
