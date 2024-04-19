import * as React from 'react';
import { AddressTag, AddressTagVariants } from '@lace/ui';
import { UseTranslate } from '@ui/hooks';

export type AddressTagTranslations = { own: string; foreign: string };

export const getAddressTagTranslations = (t: UseTranslate['t']): AddressTagTranslations => ({
  own: t('core.addressTags.own'),
  foreign: t('core.addressTags.foreign')
});

export const renderAddressTag = (
  address: string,
  translations: AddressTagTranslations,
  ownAddresses: string[] = [],
  addressToNameMap: Map<string, string> = new Map() // address, name
): JSX.Element => {
  const matchingAddressName = addressToNameMap.get(address);
  return ownAddresses.includes(address) ? (
    <AddressTag variant={AddressTagVariants.Own}>{translations.own}</AddressTag>
  ) : (
    <AddressTag variant={AddressTagVariants.Foreign}>
      {translations.foreign}
      {matchingAddressName ? `/${matchingAddressName}` : ''}
    </AddressTag>
  );
};