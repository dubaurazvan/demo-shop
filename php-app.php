<?php
    $products = json_decode(file_get_contents('api/products.json'), true);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP page</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <style type="text/css">
        .row {
            padding-top: 10px;
            padding-bottom: 10px;
        }

        #product-list .row:nth-child(even){
            background: #eee;
        }
    </style>
</head>
<body ng-app="productList">
<div class="container" >
    <div class="row">
        <h1>JS Demo shop</h1>
    </div>
    <div class="row bg-info">
        &nbsp;
    </div>

    <div class="row text-danger" style="border-bottom: 1px solid #ccc">
        <div class="col-sm-5">
            Product
        </div>
        <div class="col-sm-4">
            Category
        </div>
        <div class="col-sm-2">
            Price
        </div>
        <div class="col-sm-1">

        </div>
    </div>

    <div id="product-list">
        <?php if (count($products)) : ?>
            <div>No items in the list</div>
        <?php endif; ?>

        <?php foreach ($products as $product) : ?>
            <div class="row">
                <div class="col-sm-5">
                    <?php echo $product['name'] ?>
                </div>
                <div class="col-sm-4">
                    <?php echo $product['category']['name'] ?>
                </div>
                <div class="col-sm-2">
                    <?php echo $product['price'] ?>
                </div>
                <div class="col-sm-1">
                    <a href="#" class="glyphicon glyphicon-remove-circle text-danger"></a>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>

</body>
</html>