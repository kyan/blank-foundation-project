$(document).on('click', 'input[type=checkbox].sub_service', function () {
	var checkbox = $(this);
	if (checkbox.is(':checked')) {
		checkbox.closest('tr').prevAll('.service-row').eq(0).find('input.service').attr('checked', true);
	}
});
