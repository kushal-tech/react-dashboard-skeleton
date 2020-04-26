
class Toast {
  //errorType:success/info/error
	showMsgBottom(message){
		if(window.plugins){
			window.plugins.toast.show(message, '1500', 'bottom', function(a) {
			}, function(b){
			});
		}
	}

  showMsgCenter(message){
		if(window.plugins){
			window.plugins.toast.show(message, '1500', 'center', function(a) {
			}, function(b){
			});
		}
	}
}

export default new Toast();
