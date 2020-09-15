<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Wit - Social network built with laravel
        </title>
        <!-- <script src="{{ asset('js/app.js') }}" defer></script> -->
<meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet"><link href="{{ asset('css/app.css') }}" rel="stylesheet">

    </head>
    <body>
        <div id="app">
        </div>
        <script>
        var Base_URL = '{{ URL::to('/') }}';
        </script>
        <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
</html>
