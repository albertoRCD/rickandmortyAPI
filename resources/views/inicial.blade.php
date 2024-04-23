@extends('layout')

@extends('menu')

@section('contenido')
    <div class="container mt-3 text-center">
        <h1>Páxina web para cargar dende unha API externa datos dos personaxes da serie de animación Rick And Morty</h1>
        <img src=" {{asset('img/img-central.jpg')}}" class="img" alt="Familia Rick and Morty">
    </div>
@endsection
