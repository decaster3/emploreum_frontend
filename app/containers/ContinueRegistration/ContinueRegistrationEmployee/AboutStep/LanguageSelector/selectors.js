import { createSelector } from 'reselect';

const selectRegistrationEmployeeLanguages = (state) => state.get('languageSelectorEmployeeRegistration');

export const selectLanguageList = createSelector(
    selectRegistrationEmployeeLanguages,
    (languagesList) => languagesList.get('languageList').get('list')
);

export const selectLanguageListStatus = createSelector(
    selectRegistrationEmployeeLanguages,
    (languagesList) => languagesList.get('languageList').get('languageListStatus')
);

export const selectChoosenLanguages = createSelector(
    selectRegistrationEmployeeLanguages,
    (choosenLanguages) => choosenLanguages.get('choosenLanguages').get('items')
);
