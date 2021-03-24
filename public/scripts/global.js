function closeSession(id) {
  let res = confirm("¿Está seguro?");
  if(res){
    window.location = "/:" + id;
  }
}

