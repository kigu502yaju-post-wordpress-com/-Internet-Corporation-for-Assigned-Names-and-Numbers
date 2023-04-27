import { registerStore } from '@wordpress/data';
import { controls } from '@wordpress/data-controls';
import { registerPlugins } from '../plugins';
import * as actions from './actions';
import { STORE_KEY } from './constants';
import reducer, { State } from './reducer';
import * as selectors from './selectors';
import type { SelectFromMap } from '../mapped-types';

export type { State };
export type OnboardSelect = SelectFromMap< typeof selectors >;

export { SiteGoal, SiteIntent } from './constants';
export * as utils from './utils';
export * from './types';
let isRegistered = false;

/**
 * Onboard store depends on site-store. You should register the site before using this store.
 */
export function register(): typeof STORE_KEY {
	if ( isRegistered ) {
		return STORE_KEY;
	}

	registerPlugins();

	registerStore( STORE_KEY, {
		actions,
		controls,
		reducer,
		selectors,
		persist: [
			'anchorPodcastId',
			'anchorEpisodeId',
			'anchorSpotifyUrl',
			'domain',
			'domainSearch',
			'domainForm',
			'goals',
			'hasUsedDomainsStep',
			'hasUsedPlansStep',
			'hideFreePlan',
			'intent',
			'paidSubscribers',
			'lastLocation',
			'planProductId',
			'randomizedDesigns',
			'selectedDesign',
			'selectedFeatures',
			'selectedFonts',
			'selectedSite',
			'siteTitle',
			'patternContent',
			'siteDescription',
			'siteLogo',
			'siteAccentColor',
			'storeType',
			'verticalId',
			'storeLocationCountryCode',
			'ecommerceFlowRecurType',
			'domainCartItem',
			'planCartItem',
			'productCartItems',
		],
	} );
	isRegistered = true;
	return STORE_KEY;
}
