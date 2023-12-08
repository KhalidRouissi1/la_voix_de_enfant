<!-- resources/views/destroy.blade.php -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete Form</title>
</head>
<body>
    <h1>Delete Form</h1>

    <!-- Formulaire de suppression avec champ ID -->
    <form method="POST" action="{{ route('bebes.destroyById', ['bebe_id' => 1]) }}">
        @csrf
        @method('DELETE')

        <!-- Champ ID pour saisir l'ID du bébé à supprimer -->
        <label for="bebe_id">ID du bébé à supprimer:</label>
        <input type="text" name="bebe_id" required>

        <button type="submit">Supprimer</button>
    </form>
</body>
</html>



