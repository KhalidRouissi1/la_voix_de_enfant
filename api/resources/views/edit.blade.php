<form method="post" action="{{ route('bebes.update', $bebe->id) }}">
    @csrf
    @method('put')

    <label for="nom">Nom:</label>
    <input type="text" name="nom" value="{{ $bebe->nom }}" required><br>

    <label for="prenom">Prénom:</label>
    <input type="text" name="prenom" value="{{ $bebe->prenom }}" required><br>

    <label for="nombre_ordonnel">Nombre ordonnel:</label>
    <input type="text" name="nombre_ordonnel" value="{{ $bebe->nombre_ordonnel }}" required><br>

    <label for="sexe">Sexe:</label>
    <select name="sexe" required>
        <option value="M" {{ $bebe->sexe === 'M' ? 'selected' : '' }}>Masculin</option>
        <option value="F" {{ $bebe->sexe === 'F' ? 'selected' : '' }}>Féminin</option>
    </select><br>

    <label for="date_naissance">Date de naissance:</label>
    <input type="date" name="date_naissance" value="{{ $bebe->date_naissance }}" required><br>

    <label for="lieu">Lieu:</label>
    <input type="text" name="lieu" value="{{ $bebe->lieu }}" required><br>

    <label for="date_acceptation">Date d'acceptation:</label>
    <input type="date" name="date_acceptation" value="{{ $bebe->date_acceptation }}" required><br>

    <label for="date_integration">Date d'intégration:</label>
    <input type="date" name="date_integration" value="{{ $bebe->date_integration }}" required><br>

    <label for="nom_mere_bio">Nom de la mère biologique:</label>
    <input type="text" name="nom_mere_bio" value="{{ $bebe->nom_mere_bio }}" required><br>

    <label for="nom_pere_bio">Nom du père biologique:</label>
    <input type="text" name="nom_pere_bio" value="{{ $bebe->nom_pere_bio }}" required><br>

    <label for="telephone">Téléphone:</label>
    <input type="text" name="telephone" value="{{ $bebe->telephone }}" required><br>

    <label for="adresse">Adresse:</label>
    <textarea name="adresse" required>{{ $bebe->adresse }}</textarea><br>

    <label for="nom_mere_adoptive">Nom de la mère adoptive:</label>
    <input type="text" name="nom_mere_adoptive" value="{{ $bebe->nom_mere_adoptive }}" required><br>

    <label for="nom_pere_adoptive">Nom du père adoptif:</label>
    <input type="text" name="nom_pere_adoptive" value="{{ $bebe->nom_pere_adoptive }}" required><br>

    <label for="tel_adoptive">Téléphone (adoptive):</label>
    <input type="text" name="tel_adoptive" value="{{ $bebe->tel_adoptive }}" required><br>

    <label for="adresse_adoptive">Adresse (adoptive):</label>
    <textarea name="adresse_adoptive" required>{{ $bebe->adresse_adoptive }}</textarea><br>

    <!-- Ajoutez d'autres champs si nécessaire -->
    <br>
    <button type="submit">Mettre à jour</button>
</form>
