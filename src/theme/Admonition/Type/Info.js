import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
import IconInfo from '@theme/Admonition/Icon/Info';
const infimaClassName = 'alert alert--info';
const defaultProps = {
  icon: <IconInfo />,
  title: (
    <Translate
      id="theme.admonition.info"
      description="The default label used for the jira admonition (:::info)">
      info
    </Translate>
  ),
};
export default function AdmonitionTypeInfo(props) {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
