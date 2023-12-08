@extends('layouts.app')

@section('content')
<h1>Liste des bébés</h1>
<ul>
    @foreach ($bebes as $bebe)
        <li>{{ $bebe->nom }} - {{ $bebe->date_naissance }}</li>
    @endforeach
</ul>
@endsection
