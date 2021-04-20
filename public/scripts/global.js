function closeSession(id) {
  let res = Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
    
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Session closed!',
        'Your session has been closed.',
        'success'
      )
      setTimeout(() => window.location = "/:" + id,2000)
    }
  })
}