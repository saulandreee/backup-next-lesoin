export const contactWhatsapp = (default_message, to = "+6285280981172") => {
  var contact = to;
  // "+6282112367898"
  var message = `Hi Le Soin! ${default_message}`;

  window.open(`https://wa.me/${contact}?text=${encodeURIComponent(message)}&app_absent=0`, "_blank");
};
