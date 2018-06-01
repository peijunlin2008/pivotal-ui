import React from 'react';
import PropTypes from 'prop-types';
import {Tabs, Tab} from 'pivotal-ui/react/tabs';
import {Icon} from 'pivotal-ui/react/iconography';

const formatEditUrl = file => `https://github.com/pivotal-cf/pui-styleguide/edit/master/docs/${file}`;
const formatIssueUrl = title => `https://github.com/pivotal-cf/pivotal-ui/issues/new?title=${title}%3A%20<issue description>`;

export default class Page extends React.PureComponent {
  static propTypes = {
    file: PropTypes.string.isRequired,
    markdownContent: PropTypes.node.isRequired,
    pageMetadata: PropTypes.object
  };

  render() {
    const {file, markdownContent, pageMetadata} = this.props;
    const {title} = pageMetadata;

    return (
      <div className="styleguide-page">
        <div className="styleguide-page-header">
          <a className="type-underline-hover" href={formatEditUrl(file)} target="_blank">
            <Icon verticalAlign="baseline" src="mode_edit"/>
            <span className="toolbar--label mlm">Edit this page</span>
          </a>
          <a className="type-underline-hover mlxl" href={formatIssueUrl(title)} target="_blank">
            <Icon verticalAlign="baseline" src="github"/>
            <span className="toolbar--label mlm">Report an issue</span>
          </a>
          <h1 className="mvxl">{title}</h1>
        </div>
        {markdownContent}
      </div>
    );
  }
}