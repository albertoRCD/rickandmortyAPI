
<header>
    <div class="container mt-3">
        <nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
            <div class="container-fluid">
                <a class="navbar-brand" href="{{ route('inicial') }}"><img class="imagen-oculta" src="{{ asset('img/logo.png') }}"
                        alt="Logo" width="200"></a>
                <div class="collapse navbar-collapse" id="navbarColor03">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item m-3">
                            <a class="nav-link" href="{{ route('inicial') }}">Principal
                            </a>
                        </li>
                        <li class="nav-item m-3">
                            <a class="nav-link" href="{{ route('carga_datos') }}">Cargar Datos</a>
                        </li>
                    </ul>
                    <div class="rayo"></div>
                    <div class="d-flex">
                        <img src="{{ asset('img/rickmorty.png') }}" alt="rickandmorty" width="120">
                    </div>
                </div>
            </div>
        </nav>
    </div>
</header>
