<?php

namespace App\Http\Controllers;

use App\Models\Bebe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BebeApiController extends Controller
{
    public function index()
    {
        $bebes = Bebe::all();
        return response()->json($bebes);
    }

    public function show(Bebe $bebe)
    {
        return response()->json($bebe);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
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

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $bebe = Bebe::create($request->all());

        return response()->json($bebe, 201);
    }

    public function update(Request $request, $bebeId)
    {
        $bebe = Bebe::find($bebeId);

        if (!$bebe) {
            return response()->json(['message' => 'Bébé non trouvé.'], 404);
        }

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

        $bebe->update($request->all());

        return response()->json($bebe, 200);
    }

    public function destroy(Bebe $bebe)
    {
        $bebe->delete();

        return response()->json(null, 204);
    }
    public function getById($bebeId)
    {
        $bebe = Bebe::find($bebeId);

        if (!$bebe) {
            return response()->json(['message' => 'Bébé not found.'], 404);
        }

        return response()->json($bebe);
    }

}
