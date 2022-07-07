<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Alterar algum produto</title>
</head>
<body>
<form action="{{route('update', ['id' => $product->id]) }}" method="PUT">
    <label for="">Cliente</label> <br>
    <input type="number" name="cliente_id" value="{{$product-> cliente_id}}"> <br>
    <label for="">Nome do Produto</label>
    <input type="text" name="name" value="{{product.name}}"> <br>
    <label for="">Tamanho do Produto</label>
    <input type="number" name="size" value="{{product.size}}"> <br>
    <label for="">Descrição</label>
    <input type="text" name="description" value="{{product.description}}"> <br>
    <label for="">Preço</label>
    <input type="boolean" name="price" value="{{product.price}}">
    <button> Salvar</button>
</form>
</body>
</html>
