<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BebeApiController;
Route::get('/bebes', [BebeApiController::class, 'index']);
Route::post('/bebes', [BebeApiController::class, 'store']);
Route::get('/bebes/{bebeId}', [BebeApiController::class, 'getById']);
Route::delete('/bebes/{bebeId}', [BebeApiController::class, 'destroy']);
Route::put('/bebes/{bebeId}', [BebeApiController::class, 'update']);