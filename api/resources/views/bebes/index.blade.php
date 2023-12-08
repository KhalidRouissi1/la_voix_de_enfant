<!-- resources/views/bebes/index.blade.php -->

@extends('layouts.app')

@section('content')
    <div class="container">
        <h2>Liste des Bébés</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Date de Naissance</th>
                    <th>Prénom</th>
                    <th>Sexe</th>
                    <th>Lieu</th>
                    <th>Date d'Acceptation</th>
                    <th>Date d'Intégration</th>
                    <th>Nom de la Mère Biologique</th>
                    <th>Nom du Père Biologique</th>
                    <th>Téléphone</th>
                    <th>Adresse</th>
                    <th>Nom de la Mère Adoptive</th>
                    <th>Nom du Père Adoptif</th>
                    <th>Téléphone Adoptif</th>
                    <th>Adresse Adoptive</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($bebes as $bebe)
                    <tr>
                        <td>{{ $bebe->id }}</td>
                        <td>{{ $bebe->nom }}</td>
                        <td>{{ $bebe->date_naissance }}</td>
                        <td>{{ $bebe->prenom }}</td>
                        <td>{{ $bebe->sexe }}</td>
                        <td>{{ $bebe->lieu }}</td>
                        <td>{{ $bebe->date_acceptation }}</td>
                        <td>{{ $bebe->date_integration }}</td>
                        <td>{{ $bebe->nom_mere_bio }}</td>
                        <td>{{ $bebe->nom_pere_bio }}</td>
                        <td>{{ $bebe->telephone }}</td>
                        <td>{{ $bebe->adresse }}</td>
                        <td>{{ $bebe->nom_mere_adoptive }}</td>
                        <td>{{ $bebe->nom_pere_adoptive }}</td>
                        <td>{{ $bebe->tel_adoptive }}</td>
                        <td>{{ $bebe->adresse_adoptive }}</td>
                        <td>
                            <a href="{{ route('bebes.edit', $bebe->id) }}">Modifier</a>
                            <!-- Ajoutez d'autres liens d'action si nécessaire -->
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
