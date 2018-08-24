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

    app.controller("ReviewController", function() {
        this.review = {};
        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    var products = [{
            images: [{ thumbnail: 'thumbnail.jpg', full: 'thumbnail.jpg' }],
            name: 'iPad Air 2 64G',
            price: 499,
            description: 'The newest Apple iPad 1.',
            inStock: true,
            reviews: [{
                    stars: 5,
                    body: "I love this product!",
                    author: "qlam@gmail.com"
                },
                {
                    stars: 1,
                    body: "This product sucks",
                    author: "bob@qlam.com"
                }
            ]
        },
        {
            images: [{ thumbnail: 'thumbnail.jpg', full: 'thumbnail.jpg' }],
            name: 'iPad Air 2 24G',
            price: 499,
            description: 'The newest Apple iPad 2.',
            inStock: false,
            reviews: [{
                    stars: 5,
                    body: "I love this product!",
                    author: "qlam@gmail.com"
                },
                {
                    stars: 1,
                    body: "This product sucks",
                    author: "bob@qlam.com"
                }
            ]
        }, {
            images: [{ thumbnail: 'thumbnail.jpg', full: 'thumbnail.jpg' }],
            name: 'iPad Air 2 124G',
            price: 499,
            description: 'The newest Apple iPad 3.',
            inStock: true,
            reviews: [{
                    stars: 5,
                    body: "I love this product!",
                    author: "qlam@gmail.com"
                },
                {
                    stars: 1,
                    body: "This product sucks",
                    author: "bob@qlam.com"
                }
            ]
        }
    ]
})();