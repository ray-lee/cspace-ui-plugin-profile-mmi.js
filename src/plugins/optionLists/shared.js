import { defineMessages } from 'react-intl';

/**
 * This plugin provides option lists that are shared by multiple record types. Option lists that
 * are used by only one record type are defined in the plugin for that record type.
 */
export default () => ({
  optionLists: {
    nameSources: {
      values: [
        'aficatalog',
        'encyclopediaofearlycinema',
        'halliwellswhoswhointhemovies',
        'libraryofcongressnameauthority',
        'other',
        'root',
        'silentfilmnecrology2ndedition',
        'thefilmencyclopedia4thedition',
      ],
      messages: defineMessages({
        aficatalog: {
          id: 'option.orgTermSources.aficatalog',
          defaultMessage: 'AFI Catalog',
        },
        encyclopediaofearlycinema: {
          id: 'option.orgTermSources.encyclopediaofearlycinema',
          defaultMessage: 'Encyclopedia of Early Cinema',
        },
        halliwellswhoswhointhemovies: {
          id: 'option.orgTermSources.halliwellswhoswhointhemovies',
          defaultMessage: 'Halliwell\'s Who\'s Who in the Cinema',
        },
        libraryofcongressnameauthority: {
          id: 'option.orgTermSources.libraryofcongressnameauthority',
          defaultMessage: 'Library of Congress Name Authority',
        },
        silentfilmnecrology2ndedition: {
          id: 'option.orgTermSources.silentfilmnecrology2ndedition',
          defaultMessage: 'Silent Film Necrology, 2nd Edition',
        },
        thefilmencyclopedia4thedition: {
          id: 'option.orgTermSources.thefilmencyclopedia4thedition',
          defaultMessage: 'The Film Encyclopedia, 4th Edition',
        },
      }),
    },
  },
});
