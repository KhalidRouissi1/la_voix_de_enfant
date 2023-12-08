<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BebeApiController;
Route::get('/bebes', [BebeApiController::class, 'index']);
Route::get('/bebes/{bebeId}', [BebeApiController::class, 'getById']);
Route::post('/bebes', [BebeApiController::class, 'store']);
Route::delete('/bebes/{bebeId}', [BebeApiController::class, 'destroy']);
Route::put('/bebes/{bebe}', [BebeApiController::class, 'update']);
