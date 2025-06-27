<?php

namespace App\Providers;



use App\Models\Offre;
use Illuminate\Http\Request;

class OffreServiceProvider
{

    public function index()
    {
        $offres = Offre::all();
       return $offres;
    }


    public function store( array $request)
    {
        $offre =  Offre::create($request);
        return $offre;
    }


    public function show($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        Offre::destroy($id);
        return true;
    }
}
