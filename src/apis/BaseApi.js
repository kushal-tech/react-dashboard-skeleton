import $ from 'jquery';
import LinkConstants from 'constants/LinkConstants';
import AppActions from 'actions/AppActions';
import ActionMessages from 'constants/ActionMessages';
let ajax = [];
let reTries = 4;

class BaseApi {

  post(url, data, onSuccess, onError){
    let that = this;
    let call = $.ajax({
      type: "POST",
      url: url,
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      data: data?JSON.stringify(data):"",
      dataType :"json",
      success: function(response){
        if(onSuccess){
          onSuccess(response);
        }
        reTries = 4;
      },
      error: function(xhr, status, err) {
        AppActions.addLoader(false);
        if(xhr.status===0){ //network failure
          that.reCall(this);
          //AppActions.addLoader(true, ActionMessages.INTERNET_ERROR);
        } else if(xhr.status===401){ //unauthorized
          AppActions.removeUser();
        } else if(onError){
          onError(xhr, status, err);
        }
      }
    });
    ajax.push(call);
  }

  get(url, onSuccess, onError){
    let that = this;
    let call = $.ajax({
      type: "GET",
      url: url,
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      data: "",
      dataType :"json",
      success: function(response){
        if(onSuccess){
          onSuccess(response);
        }
        reTries = 4;
      },
      error: function(xhr, status, err) {
        AppActions.addLoader(false);
        if(xhr.status===0){ //network failure
          that.reCall(this);
          //AppActions.addLoader(true, ActionMessages.INTERNET_ERROR);
        } else if(xhr.status===401){
          AppActions.removeUser();
        } else if(onError){
          onError(xhr, status, err);
        }
      }
    });
    ajax.push(call);
  }

  cancel(){
    if(ajax.length>0){
      ajax.map(function(a){
        a.abort();
      });
    }
  }

  reCall(ajaxRequest){
    if(LinkConstants.LINK_PRIORITY[ajaxRequest.url]==1){
      if(reTries>=1){
        setTimeout(function () {
          $.ajax(ajaxRequest).done(function(){})
          reTries = reTries-1;
        }, 3000);
      }
    }
  }

}

export default new BaseApi();
