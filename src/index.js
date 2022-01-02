/* global cspaceUIPluginProfileMMI */
/* The cspaceUIPluginProfileMMI global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import logo from '../images/logo.png';
import messages from './messages';
import plugins from './plugins';
import { formatIDNumber } from './utils';
import styles from '../styles/cspace-ui-plugin-profile/mmi.css';

export default () => ({
  logo,
  messages,
  className: styles.common,
  defaultSearchPageSize: 50,
  defaultSearchPanelSize: 20,
  idGeneratorTransform: formatIDNumber,
  prettyUrls: true,
  structDateVocabNames: ['dateassociation'],
  tenantId: '42',
  pluginInfo: {
    cspaceUIPluginProfileMMI: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileMMI.name',
          defaultMessage: 'Museum of the Moving Image profile',
        },
      }),
      version: cspaceUIPluginProfileMMI.packageVersion,
    },
  },
  plugins: [
    ...plugins.map((plugin) => plugin()),
  ],
});
