function closeSession(id) {
  let res = Swal.fire({
    title: 'Estas seguro que quieres cerrar sesión',
    text: "¡Deberas volver a logearte para acceder a las acciones de la web!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si'
    
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Sesión cerrada!',
        'Tu sesión se ha cerrado correctamente.',
        'success'
      )
      setTimeout(() => window.location = "/:" + id,2000)
    }
  })
}