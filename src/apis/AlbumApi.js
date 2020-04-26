import BaseApi from './BaseApi';
import LinkConstants from 'constants/LinkConstants';
import AppConstants from 'constants/AppConstants';
import AppActions from 'actions/AppActions';
import LocalStorage from 'common/LocalStorage';

class UtilsApi {

  getAlbumByName(name, onSuccess){
    BaseApi.get(LinkConstants.GETALBUMBYNAME+"?albumName="+name.toLowerCase(),onSuccess);
  }

}

export default new UtilsApi();
