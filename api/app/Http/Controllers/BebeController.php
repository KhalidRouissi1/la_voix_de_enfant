<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bebe;

class BebeApiController extends Controller
{
    public function index()
    {
        $bebes = Bebe::all();
        return response()->json($bebes);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required',
            'prenom' => 'required',
            'date_naissance' => 'required|date',
            'nombre_ordonnel' => 'required',
            'sexe' => 'required',
            'lieu' => 'required',
            'date_acceptation' => 'required|date',
            'date_integration' => 'required|date',
            'nom_mere_bio' => 'required',
            'nom_pere_bio' => 'required',
            'telephone' => 'required',
            'adresse' => 'required',
            'nom_mere_adoptive' => 'required',
            'nom_pere_adoptive' => 'required',
            'tel_adoptive' => 'required',
            'adresse_adoptive' => 'required',
        ]);

        $bebe = Bebe::create($request->all());

        return response()->json($bebe, 201);
    }

    public function destroy($bebeId)
    {
        $bebe = Bebe::find($bebeId);

        if (!$bebe) {
            return response()->json(['message' => 'Bébé non trouvé.'], 404);
        }

        $bebe->delete();
        return response()->json(null, 204);
    }

}
?>