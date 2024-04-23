@extends('layout')

@extends('menu')

@section('contenido')
    <div class="container mt-5 text-center" id="contidoBotons">
        <button class="btn btn-primary" id="btnCarga">Cargar Datos</button>
    </div>
    <div class="container mt-4 text-center">
        <div class="row enunciado" id="enunciados">
            <div class="col-md-2 mt-3 mb-3 pb-2 border-bottom">
                <h3>Nome</h3>
            </div>
            <div class="col-md-2 mt-3 mb-3 pb-2 border-bottom">
                <h3>Estado</h3>
            </div>
            <div class="col-md-2 mt-3 mb-3 pb-2 border-bottom">
                <h3>Especie</h3>
            </div>
            <div class="col-md-2 mt-3 mb-3 pb-2 border-bottom">
                <h3>Xénero</h3>
            </div>
            <div class="col-md-2 mt-3 mb-3 pb-2 border-bottom">
                <h3>Localización</h3>
            </div>
            <div class="col-md-2 mt-3 mb-3 pb-2 border-bottom">
                <h3>Imaxe</h3>
            </div>
        </div>

        <!-- Div onde vai a ir o contido da API -->
        <div class="row contido" id="contido">


        </div>
    </div>



    <!-- Chamada ó archivo js onde está a funcionalidade da API -->
    <script src="{{ asset('js/fetch.js') }}"></script>
@endsection
