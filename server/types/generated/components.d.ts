import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutFeaturesSection extends Schema.Component {
  collectionName: 'components_layout_features_sections';
  info: {
    displayName: 'Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    section: Attribute.Component<'section.feature', true>;
    icon: Attribute.Enumeration<['MdImportContacts', 'GrDeliver']>;
    image: Attribute.Media<'images'>;
  };
}

export interface SectionFeature extends Schema.Component {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Section';
    description: '';
  };
  attributes: {
    icon: Attribute.Enumeration<['BsClock', 'FaMapMarkerAlt', 'MdPhoneInTalk']>;
    subHeading: Attribute.String;
  };
}

export interface SeoAlternates extends Schema.Component {
  collectionName: 'components_seo_alternates';
  info: {
    displayName: 'Alternates';
  };
  attributes: {
    canonical: Attribute.String;
    languages: Attribute.String;
    languagesUrl: Attribute.String;
    mediaKey: Attribute.String;
    mediaValue: Attribute.String;
    typesKey: Attribute.String;
    typesValue: Attribute.String;
  };
}

export interface SeoIcons extends Schema.Component {
  collectionName: 'components_seo_icons';
  info: {
    displayName: 'Icons';
    description: '';
  };
  attributes: {
    icon: Attribute.String;
    shortcut: Attribute.String;
    apple: Attribute.String;
    otherRel: Attribute.String;
    otherUrl: Attribute.String;
  };
}

export interface SeoOpenGraph extends Schema.Component {
  collectionName: 'components_seo_open_graphs';
  info: {
    displayName: 'OpenGraph';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    url: Attribute.String;
    siteName: Attribute.String;
    images: Attribute.Media<'images', true>;
    locale: Attribute.String;
    type: Attribute.String;
    authors: Attribute.Text;
  };
}

export interface SeoRobots extends Schema.Component {
  collectionName: 'components_seo_robots';
  info: {
    displayName: 'Robots';
    description: '';
  };
  attributes: {
    index: Attribute.Boolean & Attribute.DefaultTo<false>;
    follow: Attribute.Boolean & Attribute.DefaultTo<true>;
    nocache: Attribute.Boolean & Attribute.DefaultTo<true>;
    googleBotIndex: Attribute.Boolean & Attribute.DefaultTo<true>;
    googleBotFollow: Attribute.Boolean & Attribute.DefaultTo<false>;
    googleBotNoimageindex: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface SeoSeoBasic extends Schema.Component {
  collectionName: 'components_components_seo_basics';
  info: {
    displayName: 'Basic';
    description: '';
  };
  attributes: {
    generator: Attribute.String;
    applicationName: Attribute.String;
    referrer: Attribute.String;
    keywords: Attribute.Text;
    creator: Attribute.String;
    publisher: Attribute.String;
    authorsName: Attribute.String;
    authorsUrl: Attribute.String;
    description: Attribute.Text;
    themeColorLight: Attribute.String;
    themeColorDark: Attribute.String;
    manifest: Attribute.String;
  };
}

export interface SeoVerification extends Schema.Component {
  collectionName: 'components_seo_verifications';
  info: {
    displayName: 'Verification';
  };
  attributes: {
    google: Attribute.Text;
    yahoo: Attribute.Text;
    otherMe: Attribute.Text;
  };
}

export interface SeoViewport extends Schema.Component {
  collectionName: 'components_seo_viewports';
  info: {
    displayName: 'Viewport';
  };
  attributes: {
    width: Attribute.String;
    initialScale: Attribute.Integer;
    maximumScale: Attribute.Integer;
    userScalable: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.features-section': LayoutFeaturesSection;
      'section.feature': SectionFeature;
      'seo.alternates': SeoAlternates;
      'seo.icons': SeoIcons;
      'seo.open-graph': SeoOpenGraph;
      'seo.robots': SeoRobots;
      'seo.seo-basic': SeoSeoBasic;
      'seo.verification': SeoVerification;
      'seo.viewport': SeoViewport;
    }
  }
}
