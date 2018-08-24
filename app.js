(function() {
    var app = angular.module('Store', []);

    app.controller('StoreController', function() {
        this.products = products;
    });

    app.controller('PanelController', function() {
        this.tab = 'description';
        this.setTab = function(tab) {
            this.tab = tab;
        }
        this.isSelected = function(tab) {
            return this.tab === tab
        }
    });

    var products = [{
            images: [{ thumbnail: 'thumbnail.jpg', full: 'thumbnail.jpg' }],
            name: 'iPad Air 2 64G',
            price: 499,
            description: 'The newest Apple iPad 1.',
            inStock: true
        },
        {
            images: [{ thumbnail: 'thumbnail.jpg', full: 'thumbnail.jpg' }],
            name: 'iPad Air 2 24G',
            price: 499,
            description: 'The newest Apple iPad 2.',
            inStock: false
        }, {
            images: [{ thumbnail: 'thumbnail.jpg', full: 'thumbnail.jpg' }],
            name: 'iPad Air 2 124G',
            price: 499,
            description: 'The newest Apple iPad 3.',
            inStock: true
        }
    ]
})();