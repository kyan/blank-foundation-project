$('.datatable').dataTable({
	'sDom': "<'row'<f>r>t<'row'<'span6'i><'span6'p>>",
	'bPaginate': true,
	'iDisplayLength': 15,
	'aoColumnDefs': [
		{ 'aTargets': ['actions'], 'bSortable': false }
	]
});

$('.searchable').dataTable({
	"aaSorting": [ ],
	'sDom': "<'row'<f>r>t<'row'<'span6'i><'span6'p>>",
	'bPaginate': false,
	'iDisplayLength': 15,
	'aoColumnDefs': [
		{ 'aTargets': ['actions'], 'bSortable': false }
	]
});