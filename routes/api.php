<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::group(['middleware' => 'cors'], function(){
    Route::group(['middleware' => 'jwt.auth'], function(){
        Route::resource('products', 'Api\ProductsController');
        Route::get('session', 'Api\PagSeguroController@getSessionId');
        Route::post('order', 'Api\OrdersController@store');
    });
    Route::post('login', 'Api\AuthController@login');
});
