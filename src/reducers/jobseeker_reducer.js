import { 
  ALL_CAMPAIGNS,
  COMPANIES,
  ADD_DURATION_TO_COMPANIES,
  ERROR_FOR_MODAL,
  SUCCESS_FOR_MODAL
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case ALL_CAMPAIGNS:
      return { ...state, allCampaigns: action.payload }
    case COMPANIES:
      return { ...state, companies: action.payload }
    case ADD_DURATION_TO_COMPANIES:
      return { ...state, companiesWithDurations: action.payload}
    case ERROR_FOR_MODAL:
      return { ...state, messageForModal: 'Form submittion has been unsuccessful. Please try again' }
    case SUCCESS_FOR_MODAL:
      return { ...state, messageForModal: 'You have submitted the form successfully.' }
    default:
      return state;
  }
}
