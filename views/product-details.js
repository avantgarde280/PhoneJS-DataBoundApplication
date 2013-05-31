MyApp['product-details'] = function (params) {
    var viewModel = {
        id: parseInt(params.id),
        name: ko.observable('')
    };
    $
    .get('http://sampleservices.devexpress.com/api/Products/' + viewModel.id)
    .done(function (data) {
      viewModel.name(data.ProductName);
    });
    return viewModel;
};