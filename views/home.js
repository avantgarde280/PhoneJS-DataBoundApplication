﻿MyApp.home = function (params) {

    var viewModel = {
        dataSource: {
            load: function (loadOptions) {
                if (loadOptions.refresh) {
                    var deferred = new $.Deferred();
                    $
                      .get('http://sampleservices.devexpress.com/api/Categories')
                      .done(function (result) {
                          var mapped = $.map(result, function (data) {
                              return {
                                  name: data.CategoryName,
                                  id: data.CategoryID
                              }
                          });
                          deferred.resolve(mapped);
                      });
                    return deferred;
                };
            }
        }
    };

    return viewModel;
};