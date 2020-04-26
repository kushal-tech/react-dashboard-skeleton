
var storage = window.localStorage;

class LocalStorage {

	setUser(obj){
    storage.setItem("user_obj", JSON.stringify(obj));
	}
  getUser(){
    return JSON.parse(storage.getItem("user_obj"));
  }
  removeUser(){
    storage.removeItem("user_obj");
  }

  setDUserId(id){
    storage.setItem("u_deviceid", id);
  }
  getDUserId(){
    return storage.getItem("u_deviceid");
  }
  removeDUserId(){
    storage.removeItem("u_deviceid");
  }


	setAlbums(albumList){
		storage.setItem("myalbums", albumList);
	}
	getAlbums(){
		return storage.getItem("myalbums");
	}
	
}

export default new LocalStorage();
