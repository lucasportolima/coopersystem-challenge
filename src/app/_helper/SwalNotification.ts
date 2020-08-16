import Swal from 'sweetalert2';

export const swalNotification = async (type: string, text: string) => {
  const imageUrl =
    type === 'error' ? 'assets/icon/48/ic_error_big.svg' : 'assets/icon/48/ic_check_big.svg';

  await Swal.fire({
    width: 320,
    text,
    imageUrl,
    backdrop: 'swal2-backdrop-hide',
    showCloseButton: false,
    showConfirmButton: false,
    timer: 1500,
  });
};
