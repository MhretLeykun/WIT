<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::prefix('auth')->group(function() {
    Route::get('init', 'AppController@init');
    Route::post('login', 'AppController@login');
    Route::post('register', 'AppController@register');
    Route::post('logout', 'AppController@logout');
});
