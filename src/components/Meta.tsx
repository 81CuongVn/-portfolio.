import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface Props {
  themeColor: string;
  title: string;
  description: string;
  image: string;
  noindex: boolean;
  nofollow: boolean;
  revisitAfter: string;
  type: 'website' | 'article';
}

export default function Meta(iprops: Partial<Props>) {
  const { pathname } = useLocation();
  const props: Partial<Props> = {};

  props.themeColor = iprops.themeColor || '#00ffff';

  props.title = iprops.title
    ? `${iprops.title} | Undefine`
    : 'Undefine Development';

  props.description =
    iprops.description ??
    'ICT Student, Full Stack Web Developer, and Systems Administrator with a flair for creating elegant solutions in the least amount of time and creative cloud computing. See my work, who I have worked for in the past, along with my expierence in fields.';

  props.image = iprops.image ?? 'banner.png';
  props.revisitAfter = iprops.revisitAfter ?? '7 days';

  const robots = `${iprops.noindex ? 'noindex' : 'index'}, ${
    iprops.nofollow ? 'nofollow' : 'follow'
  }`;

  const type = iprops.type ?? 'website';

  document.title = props.title;

  return (
    <Helmet>
      <meta property="theme-color" content={props.themeColor} />
      <meta name="title" content={props.title} />
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.image} />
      <meta property="og:url" content={pathname} />
      <meta property="og:type" content={type} />
      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.description} />
      <meta property="twitter:image" content={props.image} />
      <meta property="twitter:url" content={pathname} />
      <meta name="robots" content={robots} />
      <meta name="revisit-after" content={props.revisitAfter} />
    </Helmet>
  );
}
