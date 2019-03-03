define(["knockout"], function (ko) {
    var vm = function () {
        var self = this;
        self.hello = ko.observable("Hello world");
    }

    ko.applyBindings(new vm());
})